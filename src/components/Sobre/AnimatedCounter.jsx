import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  decimals = 0 
}) => {
  // Extrai sufixo do valor se existir (ex: "24h" -> sufixo: "h")
  const valueStr = String(value);
  const match = valueStr.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const extractedSuffix = match ? match[2] : '';
  const finalSuffix = extractedSuffix || suffix;
  
  const [count, setCount] = useState('');
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

    // Extrai número e sufixo do valor (ex: "24h" -> número: 24, sufixo: "h")
    const match = valueStr.match(/^(\d+(?:\.\d+)?)(.*)$/);
    
    // Se não tem número no início, trata como string não numérica
    if (!match) {
      setCount(value);
      return;
    }

    const numericValue = parseFloat(match[1]);
    const extractedSuffix = match[2] || ''; // Sufixo extraído do valor (ex: "h")
    const finalSuffix = extractedSuffix || suffix; // Usa o sufixo extraído ou o prop

    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    // Inicializa com 0 + sufixo para começar a animação
    setCount('0' + finalSuffix);

    let startTime = null;
    const startValue = 0;
    const endValue = numericValue;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function para animação suave (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setCount(currentValue.toFixed(decimals) + finalSuffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue.toFixed(decimals) + finalSuffix);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration, decimals, suffix, valueStr]);

  // Verifica se o valor tem número no início
  const hasNumber = /^\d/.test(valueStr);
  
  // Se não tem número no início, retorna o valor original com animação de fade-in
  if (!hasNumber) {
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
      {prefix}{count}
    </span>
  );
};

export default AnimatedCounter;

