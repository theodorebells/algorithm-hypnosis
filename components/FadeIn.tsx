
import React, { useEffect, useRef, useState } from 'react';

export type AnimationVariant = 
    | 'fade-up' 
    | 'fade-down' 
    | 'fade-left' // Enters from right
    | 'fade-right' // Enters from left
    | 'zoom-in' 
    | 'zoom-out' 
    | 'blur' 
    | 'scale' 
    | 'pop'
    | 'flip-up';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    variant?: AnimationVariant;
    className?: string;
    fullWidth?: boolean;
    duration?: number; // in ms
    threshold?: number; // 0 to 1
    direction?: string; // Backward compatibility (unused but prevents errors during transition)
}

const FadeIn: React.FC<FadeInProps> = ({ 
    children, 
    delay = 0, 
    variant = 'fade-up', 
    className = '',
    fullWidth = false,
    duration = 800,
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    const getInitialState = () => {
        switch (variant) {
            case 'fade-up': return 'opacity-0 translate-y-12';
            case 'fade-down': return 'opacity-0 -translate-y-12';
            case 'fade-left': return 'opacity-0 translate-x-12';
            case 'fade-right': return 'opacity-0 -translate-x-12';
            case 'zoom-in': return 'opacity-0 scale-90';
            case 'zoom-out': return 'opacity-0 scale-110';
            case 'blur': return 'opacity-0 blur-lg scale-105';
            case 'scale': return 'opacity-0 scale-50';
            case 'pop': return 'opacity-0 scale-75 translate-y-4';
            case 'flip-up': return 'opacity-0 rotate-x-90 translate-y-12';
            default: return 'opacity-0 translate-y-12';
        }
    };

    const getFinalState = () => {
        return 'opacity-100 blur-0 translate-x-0 translate-y-0 scale-100 rotate-0';
    };

    return (
        <div
            ref={ref}
            className={`transition-all ease-out will-change-transform ${fullWidth ? 'w-full' : ''} ${isVisible ? getFinalState() : getInitialState()} ${className}`}
            style={{ 
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: variant === 'pop' ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
