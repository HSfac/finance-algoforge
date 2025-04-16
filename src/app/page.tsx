'use client';

import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaRobot, FaChartLine, FaCogs, FaShieldAlt, FaArrowRight, FaGithub, FaDatabase } from 'react-icons/fa';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CounterAnimation from '@/components/ui/CounterAnimation';
import HeroBackground from '@/components/ui/HeroBackground';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useState } from 'react';

// 아이콘 컴포넌트 정의
const ChartLineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 7.09-4-4L2 16l1.5 2.5z"/>
  </svg>
);

const RobotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);

const DesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

const ArrowRightIcon = ({ className = "text-sm" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// 샘플 차트 데이터
const PERFORMANCE_DATA = {
  labels: Array.from({ length: 24 }, (_, i) => `${i + 1}월`),
  data: [100, 112, 119, 123, 130, 127, 135, 142, 148, 155, 149, 157, 165, 170, 177, 183, 190, 187, 195, 205, 212, 220, 230, 242],
};

const DAILY_RETURN_DATA = {
  labels: Array.from({ length: 30 }, (_, i) => `${i + 1}일`),
  data: [0.12, 0.05, 0.21, -0.08, 0.15, 0.30, 0.18, -0.05, 0.10, 0.22, 0.15, 0.19, -0.10, 0.25, 0.33, 0.12, 0.18, 0.27, -0.07, 0.22, 0.16, 0.20, 0.11, 0.28, -0.05, 0.19, 0.23, 0.15, 0.21, 0.30],
};

// 글로벌 스타일을 컴포넌트 외부로 이동
const GlobalStyles = () => (
  <style jsx global>{`
    .typing-algorithm {
      overflow: hidden;
      line-height: 1.5;
    }
    
    .typing-algorithm span {
      display: inline-block;
      opacity: 0;
      animation: typingAlgorithm 3s steps(60, end) forwards;
    }
    
    .typing-algorithm span:nth-child(2) { animation-delay: 0.1s; }
    .typing-algorithm span:nth-child(3) { animation-delay: 0.2s; }
    .typing-algorithm span:nth-child(4) { animation-delay: 0.3s; }
    .typing-algorithm span:nth-child(5) { animation-delay: 0.4s; }
    .typing-algorithm span:nth-child(6) { animation-delay: 0.6s; }
    .typing-algorithm span:nth-child(7) { animation-delay: 0.8s; }
    .typing-algorithm span:nth-child(8) { animation-delay: 1s; }
    .typing-algorithm span:nth-child(9) { animation-delay: 1.2s; }
    .typing-algorithm span:nth-child(10) { animation-delay: 1.4s; }
    .typing-algorithm span:nth-child(11) { animation-delay: 1.6s; }
    .typing-algorithm span:nth-child(12) { animation-delay: 1.8s; }
    .typing-algorithm span:nth-child(13) { animation-delay: 2s; }
    .typing-algorithm span:nth-child(14) { animation-delay: 2.2s; }
    .typing-algorithm span:nth-child(15) { animation-delay: 2.4s; }
    .typing-algorithm span:nth-child(16) { animation-delay: 2.6s; }
    
    .cta-button-pulse {
      animation: ctaPulse 2s infinite alternate;
    }
    
    @keyframes typingAlgorithm {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes ctaPulse {
      0% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
      100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
    }
    
    .matrix-line {
      position: absolute;
      display: flex;
      flex-direction: column;
      animation: matrixfall 8s linear infinite;
      font-family: monospace;
      font-size: 10px;
    }
    
    @keyframes matrixfall {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    
    /* 버튼 애니메이션 효과 */
    .hero-btn-primary {
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
      z-index: 10;
    }
    
    .hero-btn-primary::before,
    .hero-btn-secondary::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 150%;
      height: 150%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
      z-index: -1;
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .hero-btn-primary:hover::before,
    .hero-btn-secondary:hover::before {
      transform: translate(-50%, -50%) scale(1);
    }
    
    .hero-btn-primary:hover {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
      transform: translateY(-3px) scale(1.02);
    }
    
    .hero-btn-secondary:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    
    .btn-hover-float {
      animation: floatAnimation 3s ease-in-out infinite;
    }
    
    @keyframes floatAnimation {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    .btn-sparkle {
      position: relative;
    }
    
    .btn-sparkle::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%);
      opacity: 0;
      z-index: -1;
      transform: scale(0);
      transition: transform 0.6s, opacity 0.6s;
    }
    
    .btn-sparkle:hover::after {
      transform: scale(1);
      opacity: 0.3;
      animation: sparkleRotate 2s linear infinite;
    }
    
    @keyframes sparkleRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* 알고리즘 효과 애니메이션 */
    .algo-btn-effect {
      position: relative;
      overflow: hidden;
    }
    
    .algo-btn-effect::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }
    
    .algo-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.15;
      overflow: hidden;
    }
    
    .algo-pattern::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    }
    
    .algo-line {
      position: absolute;
      height: 1px;
      background-color: rgba(59, 130, 246, 0.5);
      animation: algoLineScan 3s linear infinite;
    }
    
    @keyframes algoLineScan {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { opacity: 0.8; }
      100% { transform: translateY(500%); opacity: 0; }
    }
    
    .algo-bit {
      position: absolute;
      font-family: monospace;
      font-size: 0.6rem;
      color: rgba(59, 130, 246, 0.8);
      animation: algoBitFade 2s linear infinite;
    }
    
    @keyframes algoBitFade {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.8; }
    }
    
    .data-stream {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0.2;
    }
    
    .data-particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background-color: rgba(59, 130, 246, 0.8);
      border-radius: 50%;
      animation: dataTravel 4s linear infinite;
    }
    
    @keyframes dataTravel {
      0% { transform: translate(-10px, -10px); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translate(120%, 120%); opacity: 0; }
    }
  `}</style>
);

// 알고리즘 효과를 위한 컴포넌트
const AlgorithmEffect = () => {
  return (
    <div className="algo-pattern">
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={`line-${i}`} 
          className="algo-line" 
          style={{ 
            width: '120%', 
            left: '-10%',
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`
          }}
        />
      ))}
      
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`bit-${i}`} 
          className="algo-bit" 
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
      
      <div className="data-stream">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`particle-${i}`} 
            className="data-particle" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);
  
  const toggleBanner = () => {
    setIsBannerCollapsed(!isBannerCollapsed);
  };
  
  return (
    <div className="flex flex-col">
      <GlobalStyles />
      
      {/* Hero 섹션 */}
      <section className="relative bg-gradient-to-b from-black via-blue-800/80 to-black text-white py-28 md:py-40 lg:py-48 overflow-hidden algo-grid">
        <HeroBackground />
        
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70 z-0"></div>
          <div className="absolute inset-0 opacity-30 z-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* 코드 효과 배경 */}
          <div className="absolute inset-0 z-0 opacity-10">
            <pre className="text-white font-mono text-[10px] leading-tight p-8 overflow-hidden" style={{ whiteSpace: 'pre-wrap' }}>
{"function initAlgorithmicTrading() {\n  // 초기화 설정\n  const CONFIG = {\n    apiEndpoint: \"wss://market-data-stream.finance\",\n    timeframe: \"1m\",\n    symbols: [\"BTC/USDT\", \"ETH/USDT\", \"XRP/USDT\"],\n    riskLevel: 0.2,\n    useML: true,\n    maxPositions: 5\n  };\n\n  // 데이터 스트림 연결\n  const dataStream = new MarketDataStream(CONFIG.apiEndpoint);\n  dataStream.connect().then(() => {\n    console.log(\"실시간 데이터 스트림 연결 성공\");\n    CONFIG.symbols.forEach(symbol => {\n      dataStream.subscribe(symbol, CONFIG.timeframe);\n    });\n  });\n\n  // 시그널 생성기 초기화\n  const signalGenerator = new SignalGenerator({\n    indicators: [\n      new MovingAverage({ period: 20, type: \"ema\" }),\n      new RSI({ period: 14, overbought: 70, oversold: 30 }),\n      new MACD({ fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 })\n    ],\n    ml: CONFIG.useML ? new MLModel(\"/models/price-prediction-v3.onnx\") : null\n  });\n\n  // 리스크 관리 모듈 초기화\n  const riskManager = new RiskManager({\n    maxDrawdown: 10,\n    maxPositionSize: CONFIG.riskLevel,\n    stopLossPercent: 2.5,\n    takeProfitPercent: 7.5\n  });\n\n  // 주문 실행기 초기화\n  const orderExecutor = new OrderExecutor({\n    apiKey: process.env.EXCHANGE_API_KEY,\n    apiSecret: process.env.EXCHANGE_API_SECRET,\n    testMode: false\n  });\n\n  // 메인 트레이딩 루프\n  return {\n    start() {\n      console.log(\"알고리즘 트레이딩 시스템 시작\");\n      dataStream.onData(marketData => {\n        // 시그널 생성\n        const signals = signalGenerator.analyze(marketData);\n        \n        // 리스크 확인\n        const validatedSignals = riskManager.validateSignals(signals);\n        \n        // 주문 실행\n        for (const signal of validatedSignals) {\n          if (signal.action === \"BUY\") {\n            orderExecutor.placeBuyOrder(signal);\n          } else if (signal.action === \"SELL\") {\n            orderExecutor.placeSellOrder(signal);\n          }\n        }\n      });\n    },\n    \n    stop() {\n      console.log(\"알고리즘 트레이딩 시스템 중지\");\n      dataStream.disconnect();\n    }\n  };\n}"}
            </pre>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-500/40 mb-6 shadow-lg text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="font-medium text-white">24시간 완전 자동화 알고리즘 매매</span>
                </span>
              </motion.div>
              
              {/* 프로세스 라인 추가 */}
              <div className="h-1 w-32 mb-8 overflow-hidden rounded-full">
                <div className="animate-process h-full rounded-full"></div>
              </div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-heading leading-tight text-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="leading-tight">
                  <span className="relative inline-block text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    데이터<span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-500"></span>
                  </span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">로 수익을</span>
                </div>
                <div className="leading-tight mt-2">
                  <span className="relative inline-block text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    알고리즘<span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-500"></span>
                  </span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">으로 안정성을</span>
                </div>
                <div className="text-sm font-mono text-blue-200 mt-3">
                  // 데이터 + 알고리즘 = 최적화된 투자전략
                </div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl leading-relaxed drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                트레이더의 감정을 배제한 <span className="algo-number text-blue-200 bg-black/40">100%</span> 데이터 기반 알고리즘으로
                <span className="block mt-1">시간과 장소에 구애받지 않는 <strong className="text-blue-300 font-bold">안정적 수익</strong>을 실현하세요.</span>
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="hero-btn-primary algo-btn-effect w-full sm:w-auto font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-white btn-hover-float btn-sparkle relative overflow-hidden group"
                  >
                    <AlgorithmEffect />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-800/30 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm transform scale-105 translate-y-2"></div>
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="absolute -top-6 -left-6 w-12 h-12 bg-blue-300/40 rounded-full blur-xl animate-pulse"></span>
                      <span className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-300"></span>
                      무료 상담 신청
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                      <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-400 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">New</span>
                    </div>
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="hero-btn-secondary algo-btn-effect bg-black/30 backdrop-blur-lg border border-white/40 hover:border-blue-400/60 shadow-lg w-full sm:w-auto text-white relative overflow-hidden group"
                  >
                    <AlgorithmEffect />
                    <span className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50 backdrop-blur-sm"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="flex items-center gap-2 relative z-10">
                    솔루션 살펴보기
                      <div className="relative w-4 h-4">
                        <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 bg-white/80 rounded-full"></div>
                      </div>
                    </span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                className="mt-12 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="hidden md:flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-black/70 flex items-center justify-center text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-white/90">
                    <span className="font-bold text-xl text-white">200+</span> 고객 사례
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-white/90 ml-1">평균 98% 만족도</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="md:col-span-5 hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                
                <div className="bg-black/40 p-8 rounded-2xl backdrop-blur-md shadow-2xl border border-blue-500/20 transform rotate-2 algo-grid">
                  <div className="transform -rotate-2">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold font-heading">실시간 성과 모니터링</h3>
                      <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/90">라이브</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-blue-500/10">
                        <h4 className="text-xs mb-1 font-heading text-white/80">연간 수익률</h4>
                        <p className="text-2xl font-bold text-blue-400">
                          <CounterAnimation end={142} suffix="%" />
                        </p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-blue-500/10">
                        <h4 className="text-xs mb-1 font-heading text-white/80">평균 수익기간</h4>
                        <p className="text-2xl font-bold text-white">
                          <CounterAnimation end={3.2} decimals={1} suffix="개월" />
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-blue-500/10">
                      <div className="h-40 w-full relative">
                        <Line 
                          data={{
                            labels: PERFORMANCE_DATA.labels,
                            datasets: [{
                              label: '누적 수익률',
                              data: PERFORMANCE_DATA.data,
                              borderColor: '#10B981', // 녹색으로 변경
                              backgroundColor: 'rgba(16, 185, 129, 0.15)',
                              fill: true,
                              tension: 0.4,
                              pointRadius: 0,
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { 
                              legend: { display: false },
                              tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleFont: { size: 12 },
                                bodyFont: { size: 11 },
                                padding: 8,
                                cornerRadius: 4
                              }
                            },
                            scales: {
                              x: { 
                                display: false,
                                grid: { display: false } 
                              },
                              y: { 
                                display: false,
                                grid: { display: false } 
                              }
                            },
                            elements: {
                              line: {
                                borderWidth: 2
                              }
                            },
                            animation: {
                              duration: 2000,
                              easing: 'easeOutExpo',
                              onProgress: function(animation) {
                                const ctx = animation.chart.ctx;
                                const dataset = animation.chart.data.datasets[0];
                                const meta = animation.chart.getDatasetMeta(0);
                                
                                if (animation.currentStep > animation.numSteps * 0.6) {
                                  // 폭발적 상승 효과 (그래프 상단에 빛나는 점)
                                  const lastPoint = meta.data[meta.data.length - 1];
                                  const lastX = lastPoint.x;
                                  const lastY = lastPoint.y;
                                  
                                  ctx.save();
                                  ctx.globalAlpha = Math.min(1, (animation.currentStep / animation.numSteps) * 2 - 1);
                                  
                                  // 빛나는 효과
                                  const gradient = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 40);
                                  gradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
                                  gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
                                  
                                  ctx.beginPath();
                                  ctx.arc(lastX, lastY, 40 * (animation.currentStep / animation.numSteps), 0, Math.PI * 2);
                                  ctx.fillStyle = gradient;
                                  ctx.fill();
                                  
                                  // 중앙 점
                                  ctx.beginPath();
                                  ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
                                  ctx.fillStyle = '#10B981';
                                  ctx.fill();
                                  ctx.restore();
                                }
                              }
                            }
                          }}
                        />
                      </div>
                      
                      {/* 상승 화살표 효과 */}
                      <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                        <div className="flex flex-col items-center">
                          <svg className="w-8 h-14 text-green-400 chart-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19V5M5 12l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="text-xs text-green-400 font-mono animate-pulse">급상승</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-green-500/20">
                        <p className="text-xs text-white/80 mb-1">승률</p>
                        <p className="text-lg font-bold text-green-400">78%</p>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-500/10">
                        <p className="text-xs text-white/80 mb-1">거래횟수</p>
                        <p className="text-lg font-bold text-white">142회</p>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-green-500/20">
                        <p className="text-xs text-white/80 mb-1">MDD</p>
                        <p className="text-lg font-bold text-green-400">8.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-green-600 px-4 py-2 rounded-lg font-bold shadow-xl rotate-6 z-20 text-sm text-white">
                  24/7 자동 성장
                </div>
                
                <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-lg font-medium shadow-lg -rotate-3 z-20 text-sm">
                  AI 기반 상승 예측
                </div>
                
                {/* 터미널 효과 추가 */}
                <div className="absolute -bottom-20 right-10 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg font-mono text-xs text-accent shadow-lg border border-blue-500/20 w-56">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-white/80 ml-1">terminal</span>
                  </div>
                  <div className="typing-animation">
                    <span className="text-primary/80">$</span> <span className="text-white">algorithm</span> <span className="text-primary/80">--start</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">트레이딩 시스템 초기화...</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">신호 생성기 로드 완료</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">API 연결 성공</span><br/>
                    <span className="text-yellow-400 blink">█</span>
                  </div>
                </div>
                
                {/* 통계 팝업 추가 */}
                <div className="absolute top-10 left-10 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg font-mono text-xs text-white/90 shadow-lg border border-blue-500/20 z-30 transform -rotate-3">
                  <div className="flex items-center gap-2 mb-1 text-blue-400 text-[10px]">
                    <span>PERFORMANCE_METRICS</span>
                  </div>
                  <div className="text-[10px] leading-relaxed">
                    <span className="text-blue-400">ROI:</span> <span className="text-yellow-300">+142%</span><br/>
                    <span className="text-blue-400">Sharpe:</span> <span className="text-white">2.43</span><br/>
                    <span className="text-blue-400">Volatility:</span> <span className="text-white">8.2%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 스크롤 다운 인디케이터 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1
          }}
        >
          <div className="flex flex-col items-center bg-black/70 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-700/40">
            <p className="text-sm text-white mb-2 font-mono">$ scroll_down.sh</p>
            <div className="data-line w-full my-1"></div>
            <FaArrowRight className="rotate-90 text-yellow-400 animate-bounce" />
          </div>
        </motion.div>

        {/* 데이터 흐름 라인 효과 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute top-1/3 left-0 right-0 h-px bg-accent/10 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/20 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
      </section>

      {/* 실적 배너 */}
      <section className={`bg-gradient-to-r from-blue-900 via-black to-blue-800 text-white py-14 border-t border-b border-primary/20 relative overflow-hidden sticky-banner ${isBannerCollapsed ? 'collapsed' : ''}`}>
        {/* 배경 패턴 */}
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        
        {/* 배너 컨트롤 버튼 */}
        <button 
          className={`absolute right-4 top-8 transform z-20 bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-blue-400/30 banner-toggle ${isBannerCollapsed ? 'collapsed' : ''}`}
          onClick={toggleBanner}
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* 데이터 라인 효과 */}
        <div className="absolute top-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute left-1/4 h-full w-px">
          <div className="data-line h-full w-full"></div>
        </div>
        <div className="absolute right-1/4 h-full w-px">
          <div className="data-line h-full w-full"></div>
        </div>
        
        {/* 수치 효과 배경 */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="matrix-code text-primary font-mono">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="matrix-line" style={{ 
                animationDelay: `${Math.random() * 3}s`,
                left: `${Math.floor(Math.random() * 100)}%`
              }}>
                {Array.from({ length: 15 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${Math.random() * 2}s` }}>
                    {Math.floor(Math.random() * 10)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* 콘텐츠 */}
        <div className="container relative z-10 banner-content">
          <div className="mb-10 text-center">
            <div className="inline-block bg-black/30 backdrop-blur-md rounded-full px-4 py-1.5 mb-3 border border-primary/30">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                실시간 트레이딩 실적
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
              검증된 <span className="text-primary">데이터</span>로 증명하는 결과
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* 총 거래 금액 */}
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-primary/30 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(241,196,15,0.3)] group">
              <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-5 relative overflow-hidden">
                {/* 배경 디자인 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-primary/20 rounded-full"></div>
                <div className="absolute top-5 right-5 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 17L11 13L15 17L21 11" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* 콘텐츠 */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                      <ChartLineIcon />
                    </div>
                    <h3 className="text-sm font-mono text-white/80">총 거래 금액</h3>
                  </div>
                  
                  <div className="mb-3 flex items-end">
                    <div className="text-4xl font-bold text-white font-heading tracking-tight">
                      <CounterAnimation end={1527} suffix="" />
                    </div>
                    <div className="text-lg font-mono text-blue-400 font-bold ml-2 mb-1">억원</div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    <span>전년 대비 32% 증가</span>
                  </div>
                  
                  {/* 장식 요소 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 자동화 트레이딩 */}
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group">
              <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-5 relative overflow-hidden">
                {/* 배경 디자인 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-blue-500/20 rounded-full"></div>
                <div className="absolute top-5 right-5 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.5V16.5M7 10.5V16.5M17 4.5V16.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* 콘텐츠 */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                      <RobotIcon />
                    </div>
                    <h3 className="text-sm font-mono text-white/80">자동화 트레이딩</h3>
                  </div>
                  
                  <div className="mb-3 flex items-end">
                    <div className="text-4xl font-bold text-white font-heading tracking-tight">
                      <CounterAnimation end={24} suffix="" />
                    </div>
                    <div className="text-lg font-mono text-blue-400 font-bold ml-2 mb-1">시간</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <span>무중단 시스템</span>
                  </div>
                  
                  {/* 장식 요소 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 데이터 포인트 */}
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-green-500/30 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] group">
              <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-5 relative overflow-hidden">
                {/* 배경 디자인 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-green-500/20 rounded-full"></div>
                <div className="absolute top-5 right-5 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5H3M21 12H3M21 19H3" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* 콘텐츠 */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                      <DatabaseIcon />
                    </div>
                    <h3 className="text-sm font-mono text-white/80">데이터 포인트</h3>
                  </div>
                  
                  <div className="mb-3 flex items-end">
                    <div className="text-4xl font-bold text-white font-heading tracking-tight">
                      <CounterAnimation end={42} suffix="" />
                    </div>
                    <div className="text-lg font-mono text-green-400 font-bold ml-2 mb-1">억개+</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>실시간 분석 처리</span>
                  </div>
                  
                  {/* 장식 요소 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 고객 만족도 */}
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group">
              <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-5 relative overflow-hidden">
                {/* 배경 디자인 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-purple-500/20 rounded-full"></div>
                <div className="absolute top-5 right-5 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8.5L12 13.5L7 8.5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13.5V21.5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5.5V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 5.5V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* 콘텐츠 */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                      <UsersIcon />
                    </div>
                    <h3 className="text-sm font-mono text-white/80">고객 만족도</h3>
                  </div>
                  
                  <div className="mb-3 flex items-end">
                    <div className="text-4xl font-bold text-white font-heading tracking-tight">
                      <CounterAnimation end={98} suffix="" />
                    </div>
                    <div className="text-lg font-mono text-purple-400 font-bold ml-2 mb-1">%</div>
                  </div>
                  
                  <div className="w-full h-1.5 bg-black/50 rounded-full mt-1 mb-2">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  
                  {/* 장식 요소 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .sticky-banner {
          transition: all 0.5s ease-in-out;
          max-height: 800px;
          overflow: hidden;
        }
        
        .sticky-banner.collapsed {
          max-height: 80px; /* 제목과 컨트롤 버튼을 위한 충분한 높이 */
        }
        
        .sticky-banner.collapsed .banner-content {
          transform: translateY(-20px);
        }
        
        .sticky-banner .banner-content {
          transition: transform 0.5s ease-in-out;
        }
        
        .banner-toggle {
          transition: transform 0.3s ease;
          z-index: 30;
        }
        
        .banner-toggle.collapsed {
          transform: rotate(180deg);
        }
        
        .chart-arrow {
          animation: arrowBounce 2s infinite;
        }
        
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        /* 나머지 스타일은 유지 */
      `}</style>

      {/* 핵심 성과 지표 섹션 추가 */}
      <AnimatedSection className="bg-gradient-to-b from-gray-900 via-black to-black py-20 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  실시간 트레이딩 지표
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">알고리즘</span>이 만드는 성과
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                24시간 쉬지 않고 작동하는 자동화 트레이딩 시스템의 실시간 성과를 확인하세요
              </p>
            </div>
          </AnimatedItem>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden h-full">
                  {/* 배경 효과 */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-black/60 px-3 py-1 rounded-md text-white/70 text-xs font-medium">실시간 지표</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/60">라이브</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">신호 정확도</h3>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-4xl font-bold font-heading text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={93.7} decimals={1} suffix="%" />
                      </span>
                    </div>
                    
                    <div className="w-full bg-black/60 h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '93.7%' }}></div>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs text-white/60">
                      <span>최근 100 거래</span>
                      <span className="flex items-center gap-1 text-green-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        2.3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden h-full">
                  {/* 배경 효과 */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-black/60 px-3 py-1 rounded-md text-white/70 text-xs font-medium">수익 안정성</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/60">라이브</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">샤프 비율</h3>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-4xl font-bold font-heading text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={2.43} decimals={2} suffix="" />
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">업계 평균</span>
                        <span className="text-white/80">1.5</span>
                      </div>
                      <div className="w-full bg-black/60 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400" style={{ width: '62%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">알고포지</span>
                        <span className="text-white/80">2.43</span>
                      </div>
                      <div className="w-full bg-black/60 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden h-full">
                  {/* 배경 효과 */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-black/60 px-3 py-1 rounded-md text-white/70 text-xs font-medium">리스크 관리</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/60">라이브</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">최대 손실폭</h3>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-4xl font-bold font-heading text-green-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={8.2} decimals={1} suffix="%" />
                      </span>
                    </div>
                    
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-xs text-white/90">업계 최저 수준 MDD</span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        알고리즘 최적화를 통해 시장 변동성에도 안정적인 수익을 확보합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.4}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="bg-gradient-to-br from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden h-full">
                  {/* 배경 효과 */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-black/60 px-3 py-1 rounded-md text-white/70 text-xs font-medium">거래 효율성</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                        <span className="text-xs text-white/60">라이브</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">승률</h3>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-4xl font-bold font-heading text-purple-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={78} suffix="%" />
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/50 p-3 rounded-lg text-center border border-white/10">
                        <p className="text-xs text-white/80 mb-1">수익</p>
                        <p className="text-sm font-bold text-green-400">78%</p>
                      </div>
                      <div className="bg-black/50 p-3 rounded-lg text-center border border-white/10">
                        <p className="text-xs text-white/80 mb-1">손실</p>
                        <p className="text-sm font-bold text-red-400">22%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          
          <AnimatedItem delay={0.5}>
            <div className="flex justify-center mt-12">
              <Link href="/performance">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <span>상세 성과 보기</span>
                  <FaArrowRight className="text-sm" />
                </Button>
              </Link>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* 우리가 제공하는 것 */}
      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0">
          {/* 데이터 패턴 배경 */}
          <div className="absolute inset-0 bg-black/80 z-0">
            <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F1C40F' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          {/* 흐르는 데이터 라인 효과 */}
          <div className="absolute top-0 w-full h-px">
            <div className="data-line w-full h-full"></div>
          </div>
          <div className="absolute bottom-0 w-full h-px">
            <div className="data-line w-full h-full"></div>
          </div>
          <div className="absolute left-1/4 h-full w-px">
            <div className="data-line h-full w-full"></div>
          </div>
          <div className="absolute right-1/4 h-full w-px">
            <div className="data-line h-full w-full"></div>
          </div>
          
          {/* 데이터 시각화 요소 */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary/30 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-primary/20 animate-pulse-slow"></div>
            <div className="absolute top-40 right-10 w-32 h-32 rounded-full border border-primary/40 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 mb-4 text-sm font-medium text-primary shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  검증된 실적
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">데이터</span>로 증명하는 결과
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                감정이 아닌 알고리즘으로 일관된 수익을 창출합니다
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  {/* 배경 그래프 효과 */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">메인 상품</div>
                    <h3 className="text-lg font-bold text-white mb-2">USDT 기반 시스템<br/>누적 수익률</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={142} suffix="%" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">최근 12개월</p>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      <span className="font-medium">32% 상승</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-primary/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">수익 효율성</div>
                    <h3 className="text-lg font-bold text-white mb-2">BEP 달성<br/>평균 기간</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={3} suffix="개월" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">초기 투자 회수 기간</p>
                    <div className="flex items-center gap-1 text-white/70 mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span className="text-sm">업계 평균 대비 2배 빠름</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-px bg-gradient-to-l from-blue-400/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">고객 신뢰도</div>
                    <h3 className="text-lg font-bold text-white mb-2">고객 만족도<br/>재계약률</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-green-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={96} suffix="%" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">전체 고객 기준</p>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      <span className="font-medium">12% 상승</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-green-400/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          
          <AnimatedItem delay={0.4}>
            <div className="mt-16 bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 backdrop-blur-sm">
                      성공 사례
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white leading-tight">
                      &quot;알고리즘 매매로<br/>운용 자산 <span className="text-primary">30% 증가</span>&quot;
                    </h3>
                    
                    <div className="p-6 bg-black/40 rounded-xl relative mb-8 backdrop-blur-sm border border-white/10">
                      <div className="absolute -top-3 -left-3 text-4xl text-primary/20">"</div>
                      <p className="text-white/80 relative z-10 leading-relaxed">
                        알고포지의 김프 차익거래 시스템을 도입한 후, 24시간 안정적인 수익을 창출하고 있습니다. 특히 변동성이 큰 시장에서도 일관된 수익을 내는 것이 인상적입니다.
                      </p>
                      <div className="absolute -bottom-3 -right-3 text-4xl text-primary/20">"</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/20 rounded-full overflow-hidden flex items-center justify-center text-primary font-bold text-xl border border-primary/30">
                        김
                      </div>
                      <div>
                        <p className="font-medium text-white">김정훈 이사</p>
                        <p className="text-sm text-white/60">크립토 에셋 운용사</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white">구현 사례: 김프 차익거래 시스템</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <ul className="space-y-4">
                          {[
                            "국내외 거래소 간 스프레드 실시간 모니터링",
                            "최적의 진입/청산 포인트 자동 감지",
                            "멀티 스레드 주문 처리로 슬리피지 최소화",
                            "리스크 관리 모듈로 갑작스러운 변동성 대응"
                          ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="bg-primary/30 rounded-full p-1 mt-1 text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                          
                          <li className="flex items-start gap-3 mt-6 bg-primary/10 p-3 rounded-lg backdrop-blur-sm">
                            <div className="bg-primary rounded-full p-1 mt-1 text-black flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-bold text-primary">월평균 3.2% 안정적 수익 달성</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                        <div className="mb-4 flex justify-between items-center">
                          <h5 className="text-sm font-medium text-white/80">일 평균 수익률</h5>
                          <div className="flex items-center gap-1 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            <span>안정적</span>
                          </div>
                        </div>
                        
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-green-500/20 relative overflow-hidden">
                          {/* 상승 효과를 위한 배경 그라데이션 */}
                          <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
                          <div className="h-40 w-full relative">
                            <Line 
                              data={{
                                labels: DAILY_RETURN_DATA.labels,
                                datasets: [{
                                  label: '일일 수익률',
                                  data: DAILY_RETURN_DATA.data,
                                  borderColor: '#22C55E',
                                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                  fill: true,
                                  tension: 0.4,
                                  pointRadius: 0,
                                }]
                              }}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { 
                                  legend: { display: false },
                                  tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    titleFont: { size: 12 },
                                    bodyFont: { size: 11 },
                                    padding: 8,
                                    cornerRadius: 4
                                  }
                                },
                                scales: {
                                  x: { 
                                    display: false,
                                    grid: { display: false } 
                                  },
                                  y: { 
                                    display: false,
                                    grid: { display: false } 
                                  }
                                },
                                elements: {
                                  line: {
                                    borderWidth: 2
                                  }
                                }
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                          {/* 내용이 누락된 부분 */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
          
          <AnimatedItem delay={0.5}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading leading-tight text-shadow-lg text-center">
                지금 바로 <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">시작</span>하세요
              </h2>
              
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] text-center">
                당신의 투자 아이디어를 자동화된 수익 시스템으로 바꿔드립니다.
                <span className="block mt-2 font-medium text-blue-200">지금 무료 상담을 신청하고 맞춤형 솔루션을 경험하세요.</span>
              </p>

            <div className="max-w-3xl mx-auto mb-16 relative">
              {/* 알고리즘 효과 배경 */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
              
              {/* 데이터 플로우 라인 */}
              <div className="absolute -top-5 w-full h-px">
                <div className="data-line w-full h-full opacity-30"></div>
                  </div>
              <div className="absolute -bottom-5 w-full h-px">
                <div className="data-line w-full h-full opacity-30"></div>
                </div>
                
              {/* 알고리즘 진행 효과 */}
              <div className="bg-black/40 backdrop-blur-md p-5 rounded-2xl mb-8 border border-blue-900/40 overflow-hidden relative">
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="matrix-line opacity-20" 
                      style={{ 
                        animationDelay: `${Math.random() * 3}s`,
                        left: `${Math.floor(Math.random() * 100)}%`,
                        color: '#3B82F6'
                      }}
                    >
                      {Array.from({ length: 15 }).map((_, j) => (
                        <div key={j} style={{ animationDelay: `${Math.random() * 2}s` }}>
                          {Math.round(Math.random()) ? '1' : '0'}
                    </div>
                      ))}
                    </div>
                  ))}
                  </div>
                  
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg border border-blue-900/40">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs text-white/90 font-mono">algorithm_processing.py</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="font-mono text-xs text-white/80 bg-black/60 p-3 rounded-lg border border-blue-900/40 mb-4">
                    <div className="typing-algorithm">
                      <span className="text-blue-400">def</span> <span className="text-green-400">create_custom_solution</span><span className="text-white">(</span><span className="text-yellow-400">client_needs</span><span className="text-white">):</span><br/>
                      <span className="ml-4 text-white/70"># 트레이딩 알고리즘 초기화</span><br/>
                      <span className="ml-4 text-blue-400">if</span> <span className="text-white">client_needs.requires_optimization:</span><br/>
                      <span className="ml-8 text-white">strategy = AlgorithmicTrading(</span><br/>
                      <span className="ml-12 text-orange-400">risk_level</span><span className="text-white">:</span> <span className="text-purple-400">client_needs.risk_preference,</span><br/>
                      <span className="ml-12 text-orange-400">timeframe</span><span className="text-white">:</span> <span className="text-purple-400">client_needs.preferred_timeframe,</span><br/>
                      <span className="ml-12 text-orange-400">markets</span><span className="text-white">:</span> <span className="text-purple-400">client_needs.target_markets</span><br/>
                      <span className="ml-8 text-white">)</span><br/>
                      <span className="ml-4 text-blue-400">return</span> <span className="text-green-400">optimize_algorithm</span><span className="text-white">(strategy)</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="bg-black/40 p-2 rounded-lg border border-blue-900/30 flex flex-col items-center">
                      <span className="text-xs text-white/70 mb-1">최적화</span>
                      <span className="text-lg font-bold text-green-400">100%</span>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-blue-900/30 flex flex-col items-center">
                      <span className="text-xs text-white/70 mb-1">수익성</span>
                      <span className="text-lg font-bold text-green-400">분석중</span>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-blue-900/30 flex flex-col items-center">
                      <span className="text-xs text-white/70 mb-1">안정성</span>
                      <span className="text-lg font-bold text-green-400">검증됨</span>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-blue-900/30 flex flex-col items-center">
                      <span className="text-xs text-white/70 mb-1">맞춤화</span>
                      <span className="text-lg font-bold text-blue-400">준비됨</span>
                  </div>
                </div>
                
                  <div className="text-center font-mono text-xs text-blue-300 mb-1">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 rounded-full">
                      알고리즘 분석 완료: 맞춤형 솔루션 준비 완료
                    </span>
                  </div>
                </div>
              </div>
              
                  <Link href="/contact">
                    <Button 
                      variant="accent" 
                      size="lg"
                  className="w-full shadow-xl shadow-blue-900/30 hover:scale-105 transition-transform duration-300 text-white font-bold bg-gradient-to-r from-blue-700 to-blue-500 h-14 text-lg relative overflow-hidden group cta-button-pulse"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -top-10 -left-10 w-16 h-16 bg-blue-400/40 rounded-full blur-2xl group-hover:animate-pulse"></span>
                  <span className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-400/40 rounded-full blur-2xl group-hover:animate-pulse"></span>
                      <span className="flex items-center justify-center gap-2 relative z-10">
                    <span className="relative">
                      <span className="absolute -top-6 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></span>
                    </span>
                        무료 상담 신청하기
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </Button>
                  </Link>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaChartLine size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">백테스트 무료 제공</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaRobot size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">24/7 모니터링</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaDatabase size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">데이터 분석 리포트</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <svg className="w-4 h-4 text-blue-400 pulse-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span className="text-sm text-white/90">데이터 보안 보장</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/70 text-sm">
                  * 무료 상담은 최대 1시간 동안 제공되며, <span className="text-blue-400">48시간 이내</span>에 답변을 드립니다.
                </p>
              </div>
            </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}

