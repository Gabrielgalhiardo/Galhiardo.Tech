import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  decimals = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Se o valor não é numérico (ex: "24/7", "Top"), apenas mostra o valor
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    let startTime = null;
    const startValue = 0;
    const endValue = numericValue;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function para animação suave (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setCount(currentValue.toFixed(decimals));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue.toFixed(decimals));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration, decimals]);

  // Se não é numérico, retorna o valor original com animação de fade-in
  if (isNaN(parseFloat(value))) {
    return (
      <span 
        ref={counterRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out'
        }}
      >
        {value}
      </span>
    );
  }

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;

