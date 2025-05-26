import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ScrollZoomSectionProps {
  children: ReactNode;
  className?: string;
}

const ScrollZoomSection: React.FC<ScrollZoomSectionProps> = ({ children, className = '' }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-700 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollZoomSection;