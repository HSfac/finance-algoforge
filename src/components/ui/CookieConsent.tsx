'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 쿠키 동의 여부 확인
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // 동의 기록이 없으면 배너 표시
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-blue-500/30 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/90 text-sm">
          <p>
            본 웹사이트는 사용자 경험 향상을 위해 쿠키를 사용합니다. 웹사이트를 계속 사용하면 쿠키 사용에 동의하는 것으로 간주됩니다.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="text-white border-blue-500/50 hover:bg-blue-500/20"
            onClick={acceptCookies}
          >
            동의합니다
          </Button>
        </div>
      </div>
    </div>
  );
} 