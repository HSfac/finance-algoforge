'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "홈" },
    { href: "/services", label: "서비스" },
    { href: "/solutions", label: "솔루션" },
    { href: "/about", label: "회사 소개" },
    { href: "/contact", label: "문의하기" },
  ];

  return (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/10">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-8 w-8">
          <img 
            src="/logo.png" 
            alt="AlgoForge Logo" 
            className="h-full w-full object-contain"
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-screen rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          AlgoForge
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white/90 hover:text-yellow-300 transition-colors duration-200 
                     text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="flex items-center space-x-4">
        <Link
          href="/auth/login"
          className="hidden sm:block px-4 py-1.5 text-sm font-medium text-black bg-yellow-300 
                   hover:bg-yellow-400 rounded-md transition-colors duration-200 
                   shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        >
          로그인
        </Link>
        
        <Link
          href="/auth/register"
          className="px-4 py-1.5 text-sm font-medium text-white border border-yellow-300/80 
                   hover:border-yellow-300 hover:text-yellow-300 rounded-md transition-colors 
                   duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        >
          회원가입
        </Link>
        
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-yellow-300 transition-colors 
                         duration-200 text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="text-white/90 hover:text-yellow-300 transition-colors 
                       duration-200 text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              로그인
            </Link>
          </nav>
        </div>
      </div>
    )}
  </header>
  );
};

export default Header; 