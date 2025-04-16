import { useState, useEffect, useCallback } from 'react';

interface UseCodeAnimationReturn {
  code: string;
  isTyping: boolean;
  startCodeAnimation: (newSnippet?: string) => void;
}

const useCodeAnimation = (
  codeSnippet?: string, 
  typingSpeed: number = 30,
  startDelay: number = 500
): UseCodeAnimationReturn => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState(codeSnippet || '');
  
  const startAnimation = useCallback(() => {
    let isMounted = true;
    let timer: NodeJS.Timeout;
    let charIndex = 0;
    
    setIsTyping(true);
    
    const typeNextChar = () => {
      if (!isMounted) return;
      
      if (charIndex < currentSnippet.length) {
        setDisplayedCode(currentSnippet.slice(0, charIndex + 1));
        charIndex++;
        timer = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };
    
    timer = setTimeout(typeNextChar, startDelay);
    
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [currentSnippet, typingSpeed, startDelay]);
  
  const startCodeAnimation = useCallback((newSnippet?: string) => {
    if (newSnippet) {
      setCurrentSnippet(newSnippet);
    }
    startAnimation();
  }, [startAnimation]);
  
  return {
    code: displayedCode,
    isTyping,
    startCodeAnimation
  };
};

export default useCodeAnimation; 