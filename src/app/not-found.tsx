'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

const NotFoundPage = () => {
  const [count, setCount] = useState(10);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-blue-950 to-black flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* 데이터 라인 효과 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-blue-500/20 z-0">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent w-full animate-data-flow"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500/20 z-0">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent w-full animate-data-flow"></div>
      </div>
      
      {/* 404 텍스트 */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="text-center">
          <div className="relative mb-6 inline-block">
            <h1 className="text-[120px] sm:text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 leading-none">
              404
            </h1>
            <div className="absolute -inset-1 blur-xl bg-blue-500/20 -z-10 rounded-full"></div>
          </div>
          
          <div className="glitch-wrapper">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 glitch" data-text="페이지를 찾을 수 없습니다">
              페이지를 찾을 수 없습니다
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-md mx-auto text-blue-200/80 mb-8 text-center"
          >
            요청하신 페이지가 존재하지 않거나, 주소가 변경되었을 수 있습니다.
            <br className="hidden sm:block" />
            {count > 0 ? `${count}초 후에 자동으로 홈페이지로 이동합니다.` : '홈페이지로 이동합니다...'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 text-white shadow-xl shadow-blue-600/20 px-8 py-3 rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  홈페이지로 돌아가기
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-500/80 group-hover:from-blue-500/80 group-hover:to-blue-400/80 transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* 404 애니메이션 배경 */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="absolute opacity-10 text-blue-500 font-mono text-xs"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            404
          </div>
        ))}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`line-${index}`}
            className="absolute w-px bg-blue-500/20 data-line"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100%',
              animation: `data-flow ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div 
              className="h-20 w-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"
              style={{ 
                animation: `flow-up ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes data-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes flow-up {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100px); }
        }
        
        .glitch {
          position: relative;
          color: white;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: white;
        }
        
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 #3B82F6;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        }
        
        .glitch::after {
          left: -2px;
          text-shadow: -1px 0 #A855F7;
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        }
        
        @keyframes glitch-anim-1 {
          0% { transform: translate(0); }
          30% { transform: translate(0); }
          31% { transform: translate(2px, -2px); }
          33% { transform: translate(-2px, 0); }
          34% { transform: translate(0); }
          100% { transform: translate(0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { transform: translate(0); }
          29% { transform: translate(0); }
          30% { transform: translate(-2px, 2px); }
          32% { transform: translate(2px, 0); }
          33% { transform: translate(0); }
          100% { transform: translate(0); }
        }
        
        .animate-data-flow {
          animation: data-flow 8s linear infinite;
        }
      `}</style>
      
      {count === 0 && (
        <script dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.location.href = '/';
            }, 500);
          `
        }} />
      )}
    </div>
  );
};

export default NotFoundPage; 