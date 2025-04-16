'use client';

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp, FaChartPie, FaRobot, FaBalanceScale, FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

// 코드 애니메이션 컨텍스트 생성
export interface CodeAnimationContextType {
  showConsultCode: boolean;
  setShowConsultCode: React.Dispatch<React.SetStateAction<boolean>>;
  codeText: string;
  codeComplete: boolean;
  startCodeAnimation: () => void;
}

export const CodeAnimationContext = createContext<CodeAnimationContextType | null>(null);

export const useCodeAnimation = () => {
  const context = useContext(CodeAnimationContext);
  if (!context) {
    throw new Error('useCodeAnimation must be used within a CodeAnimationProvider');
  }
  return context;
};

export const CodeAnimationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showConsultCode, setShowConsultCode] = useState(false);
  const [codeText, setCodeText] = useState('');
  const [codeComplete, setCodeComplete] = useState(false);
  
  // 현재 경로가 변경될 때 모달 상태 초기화
  useEffect(() => {
    setShowConsultCode(false);
    setCodeText('');
    setCodeComplete(false);
  }, [pathname]);
  
  // 코드 애니메이션 효과
  useEffect(() => {
    if (!showConsultCode) {
      return;
    }

    const codeLines = [
      'import numpy as np',
      'import pandas as pd',
      'from sklearn.ensemble import RandomForestRegressor',
      '',
      'class AlgoForgeTrading:',
      '    def __init__(self, strategy="momentum", risk_level=0.3):',
      '        self.strategy = strategy',
      '        self.risk_level = risk_level',
      '        self.model = RandomForestRegressor()',
      '',
      '    def analyze_market(self, data):',
      '        # 시장 데이터 분석 알고리즘',
      '        signals = self._calculate_signals(data)',
      '        return signals',
      '',
      '    def execute_trades(self, signals):',
      '        # 트레이딩 실행 로직',
      '        print("알고리즘 거래 실행 중...")',
      '        return "success"',
      '',
      '# 상담 페이지로 이동합니다...'
    ];
    
    let currentLine = 0;
    let typingSpeed = 50; // ms
    
    const typingInterval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setCodeText(prev => prev + codeLines[currentLine] + '\n');
        currentLine++;
      } else {
        clearInterval(typingInterval);
        setCodeComplete(true);
        setTimeout(() => {
          if (pathname !== '/contact') {
            router.push('/contact');
          } else {
            // 이미 contact 페이지에 있는 경우 모달만 닫음
            setShowConsultCode(false);
          }
        }, 1000);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [showConsultCode, router, pathname]);
  
  const startCodeAnimation = () => {
    // 이미 contact 페이지에 있는 경우 애니메이션 표시하지 않음
    if (pathname === '/contact') {
      // 페이지의 상담 폼으로 스크롤 이동시키기
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    setCodeText('');
    setCodeComplete(false);
    setShowConsultCode(true);
  };
  
  const value = {
    showConsultCode,
    setShowConsultCode,
    codeText,
    codeComplete,
    startCodeAnimation
  };
  
  return (
    <CodeAnimationContext.Provider value={value}>
      {children}
      
      {/* 코드 애니메이션 모달 */}
      {showConsultCode && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div 
            className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto"
          >
            <div className="p-4 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-white font-medium">알고리즘 초기화 중...</h2>
              {!codeComplete && (
                <button 
                  onClick={() => setShowConsultCode(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <div className="p-4">
              <pre className="font-mono text-sm text-green-400 overflow-x-auto whitespace-pre">
                {codeText}
                {!codeComplete && <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse"></span>}
              </pre>
              
              {codeComplete && (
                <div className="mt-4 text-center py-2 bg-green-500/20 rounded-md text-green-400">
                  상담 페이지로 이동 중...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </CodeAnimationContext.Provider>
  );
};

const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { startCodeAnimation } = useCodeAnimation();
  
  // 스크롤 시 헤더 스타일 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: "/", label: "홈" },
    { 
      href: "/services", 
      label: "서비스",
      isDropdown: true,
      dropdownItems: [
        { 
          href: "/services/portfolio-optimization", 
          label: "포트폴리오 최적화", 
          description: "최적의 자산 구성으로 수익률 극대화",
          icon: <FaChartPie className="text-blue-400" />
        },
        { 
          href: "/services/quant-strategy", 
          label: "퀀트 전략", 
          description: "데이터 기반 투자 전략",
          icon: <FaRobot className="text-purple-400" />
        },
        { 
          href: "/services/asset-allocation", 
          label: "자산 배분", 
          description: "과학적 자산 배분 전략",
          icon: <FaBalanceScale className="text-green-400" />
        },
        { 
          href: "/services/risk-management", 
          label: "리스크 관리", 
          description: "포트폴리오 위험 측정 및 관리",
          icon: <FaShieldAlt className="text-orange-400" />
        },
        { 
          href: "/services/trading", 
          label: "알고리즘 트레이딩", 
          description: "자동화된 트레이딩 전략",
          icon: <FaChartLine className="text-red-400" />
        }
      ]
    },
    { href: "/solutions", label: "솔루션" },
    { href: "/about", label: "회사 소개" },
    { href: "/contact", label: "문의하기" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${
      isScrolled ? "bg-black/80 shadow-lg" : "bg-black/30"
    } border-b border-white/10 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image 
              src="/logo.svg" 
              alt="AlgoForge Logo" 
              width={40}
              height={40}
              className="h-full w-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </div>
          <span className="text-xl font-bold text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            알고포지
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => 
            item.isDropdown ? (
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-white/90 hover:text-yellow-300 transition-colors duration-200 
                         text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                  {servicesOpen ? 
                    <FaChevronUp className="ml-1 w-3 h-3" /> :
                    <FaChevronDown className="ml-1 w-3 h-3" />
                  }
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-md shadow-xl p-1 z-50">
                    <div className="py-1 border-b border-slate-700/50 mb-1">
                      <Link 
                        href="/services"
                        className="block px-4 py-2 text-sm text-white hover:bg-slate-800/70 rounded transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        모든 서비스
                      </Link>
                    </div>
                    {item.dropdownItems?.map((dropdownItem, i) => (
                      <Link 
                        key={i}
                        href={dropdownItem.href}
                        className="flex items-start gap-3 px-4 py-3 text-sm text-white hover:bg-slate-800/70 rounded transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {dropdownItem.icon}
                        </div>
                        <div>
                          <p className="font-medium text-white">{dropdownItem.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-yellow-300 transition-colors duration-200 
                         text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={startCodeAnimation}
            className="hidden md:flex items-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 
                    hover:from-blue-600 hover:to-blue-700 rounded-full transition-all duration-300 
                    shadow-[0_4px_15px_rgba(59,130,246,0.3)] gap-2 transform hover:scale-105"
            aria-label="Start consultation"
          >
            <span className="relative">
              무료 상담 시작하기
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 rounded-full"></span>
            </span>
            <FaArrowRight className="h-3.5 w-3.5 animate-pulse" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-yellow-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => 
                item.isDropdown ? (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-white/90 hover:text-yellow-300 transition-colors 
                            duration-200 text-sm font-medium py-2"
                    >
                      <span>{item.label}</span>
                      {mobileServicesOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                    </button>
                    
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-2 mb-3 space-y-3 border-l-2 border-slate-700">
                        <Link
                          href="/services"
                          className="block text-white/90 hover:text-yellow-300 transition-colors 
                                  duration-200 text-sm font-medium py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          모든 서비스
                        </Link>
                        
                        {item.dropdownItems?.map((dropdownItem, i) => (
                          <Link
                            key={i}
                            href={dropdownItem.href}
                            className="flex items-center gap-2 text-white/90 hover:text-yellow-300 transition-colors 
                                    duration-200 text-sm font-medium py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="text-xs">{dropdownItem.icon}</span>
                            <span>{dropdownItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/90 hover:text-yellow-300 transition-colors 
                            duration-200 text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <button
                onClick={startCodeAnimation}
                className="flex items-center justify-center px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600
                          hover:from-blue-600 hover:to-blue-700 rounded-full transition-all duration-300
                          shadow-[0_2px_10px_rgba(59,130,246,0.3)] gap-2 text-sm font-medium mt-3 w-full"
              >
                <span className="relative">
                  무료 상담 시작하기
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 rounded-full"></span>
                </span>
                <FaArrowRight className="h-3.5 w-3.5 animate-pulse" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 