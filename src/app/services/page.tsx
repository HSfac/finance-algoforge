'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaBalanceScale, FaChartPie, FaShieldAlt, FaRobot, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useCodeAnimation } from '@/components/layout/Header';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// 애니메이션 효과를 위한 컴포넌트
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// 애니메이션 배경 효과
const AnimatedGradientBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[10px] opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(100, 100, 255, 0.15), transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

// 서비스 카드 컴포넌트
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, href }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 flex flex-col h-full shadow-xl transition-all duration-300"
    >
      <div className={`w-16 h-16 bg-${color}-900/40 rounded-2xl flex items-center justify-center mb-6 text-${color}-400`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400 mb-6 flex-grow">{description}</p>
      <Link 
        href={href} 
        className={`inline-flex items-center text-${color}-400 hover:text-${color}-300 font-medium transition-colors group`}
      >
        자세히 보기 <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

// 코드 애니메이션 컴포넌트
const CodeAnimation: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [line, setLine] = useState(0);
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
    '        print("트레이딩 실행 중...")',
    '        return "trade_success"',
  ];

  useEffect(() => {
    if (line < codeLines.length) {
      const timer = setTimeout(() => {
        setText(prevText => prevText + codeLines[line] + '\n');
        setLine(line + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [line, onComplete]);

  return (
    <pre className="bg-black/80 text-green-400 p-4 rounded-lg font-mono text-sm overflow-hidden whitespace-pre">
      {text}
      <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
    </pre>
  );
};

// 성공 사례 카드 컴포넌트
interface TestimonialProps {
  title: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  title, 
  quote, 
  name, 
  position, 
  company, 
  imageUrl 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-6 text-yellow-300">{title}</h3>
        
        <div className="mb-6 relative">
          <FaQuoteLeft className="absolute -top-3 -left-2 text-yellow-500/20 text-4xl" />
          <p className="text-slate-300 italic relative z-10 text-lg leading-relaxed">
            {quote}
          </p>
          <FaQuoteRight className="absolute -bottom-3 -right-2 text-yellow-500/20 text-4xl" />
        </div>
        
        <div className="mt-auto flex items-center">
          {imageUrl ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-yellow-500/50">
              <Image src={imageUrl} alt={name} width={48} height={48} className="object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/40 to-yellow-600/40 mr-4 flex items-center justify-center text-xl font-bold text-white">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-slate-400 text-sm">{position}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [codeCompleted, setCodeCompleted] = useState(false);
  const { showConsultCode, startCodeAnimation } = useCodeAnimation();

  const handleCodeComplete = () => {
    setCodeCompleted(true);
    setTimeout(() => {
      window.location.href = '/contact';
    }, 800);
  };

  const services = [
    {
      title: "포트폴리오 최적화",
      description: "데이터 기반 알고리즘으로 최적의 자산 구성을 설계하여 수익률을 극대화하고 리스크는 최소화합니다.",
      icon: <FaChartPie size={24} />,
      color: "blue",
      href: "/services/portfolio-optimization"
    },
    {
      title: "퀀트 전략",
      description: "빅데이터와 알고리즘 기반의 체계적인 투자 전략으로 감정을 배제한 합리적 투자 의사결정을 지원합니다.",
      icon: <FaRobot size={24} />,
      color: "purple",
      href: "/services/quant-strategy"
    },
    {
      title: "자산 배분",
      description: "과학적인 자산 배분 전략을 통해 장기적으로 안정적인 성과를 추구하는 투자 포트폴리오를 구성합니다.",
      icon: <FaBalanceScale size={24} />,
      color: "green",
      href: "/services/asset-allocation"
    },
    {
      title: "리스크 관리",
      description: "고급 위험 모델링과 확률론적 접근을 통해 포트폴리오 위험을 측정하고 관리하는 종합적인 솔루션을 제공합니다.",
      icon: <FaShieldAlt size={24} />,
      color: "orange",
      href: "/services/risk-management"
    },
    {
      title: "알고리즘 트레이딩",
      description: "자동화된 거래 알고리즘 개발과 백테스팅을 통해 검증된 트레이딩 전략을 실제 시장에 적용합니다.",
      icon: <FaChartLine size={24} />,
      color: "red",
      href: "/services/trading"
    }
  ];

  const testimonials = [
    {
      title: "알고리즘 매매로 운용 자산 30% 증가",
      quote: "알고포지의 김프 차익거래 시스템을 도입한 후, 24시간 안정적인 수익을 창출하고 있습니다. 특히 변동성이 큰 시장에서도 일관된 수익을 내는 것이 인상적입니다.",
      name: "김정훈",
      position: "이사",
      company: "크립토 에셋 운용사"
    },
    {
      title: "리스크 관리 시스템으로 손실 축소",
      quote: "알고포지의 리스크 관리 솔루션을 도입한 후, 다운사이드 리스크를 효과적으로 관리할 수 있게 되었습니다. 특히 시장 급변 상황에서 포트폴리오 방어가 탁월합니다.",
      name: "박소연",
      position: "투자 운용 본부장",
      company: "자산운용사"
    },
    {
      title: "최적화된 자산 배분으로 수익률 상승",
      quote: "알고포지의 포트폴리오 최적화 서비스는 정말 탁월합니다. 데이터 기반의 자산 배분 전략으로 리스크 대비 수익률이 크게 향상되었고, 고객 만족도도 높아졌습니다.",
      name: "이동훈",
      position: "대표",
      company: "독립 자문사"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-slate-950">
      {/* 히어로 섹션 */}
      <section className="w-full h-[60vh] min-h-[500px] relative flex items-center mb-16 overflow-hidden">
        <AnimatedGradientBg />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              금융의 미래를 위한 알고리즘 솔루션
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              최첨단 기술과 금융 전문성을 결합한 알고포지의 서비스로
              데이터 기반의 투자 의사결정을 경험하세요
            </motion.p>
            
            {showConsultCode ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto"
              >
                {!codeCompleted ? (
                  <CodeAnimation onComplete={handleCodeComplete} />
                ) : (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-600/20 text-green-500 p-6 rounded-lg font-bold"
                  >
                    상담 페이지로 이동합니다...
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button 
                  onClick={startCodeAnimation}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group mx-auto"
                >
                  상담 신청하기 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white inline-block relative">
              알고포지 서비스
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              데이터 과학과 금융공학의 결합으로 탄생한 혁신적인 솔루션
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 성공 사례 섹션 */}
      <AnimatedSection className="w-full py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/5 via-transparent to-transparent opacity-30"></div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-yellow-500/5 to-transparent"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [-5, 5, -5]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white inline-block relative">
              고객 성공 사례
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              알고포지의 솔루션을 도입한 고객들의 실제 성공 사례를 확인하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                title={testimonial.title}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/case-studies"
              className="px-8 py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2 group"
            >
              더 많은 사례 보기 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* 기술 강점 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                최첨단 기술로 구현하는 <br />
                <span className="text-blue-400">금융의 혁신</span>
              </h2>
              <p className="text-slate-400 mb-8">
                알고포지는 머신러닝, 딥러닝, 빅데이터 분석 등 최신 기술을 활용하여 
                금융 시장의 복잡성을 분석하고 의미 있는 통찰력을 제공합니다. 
                방대한 데이터 속에서 패턴을 발견하고, 과학적이고 체계적인 접근 방식으로
                투자 의사결정의 품질을 향상시킵니다.
              </p>
              
              <ul className="space-y-4">
                {[
                  { text: "빅데이터 분석과 머신러닝 기반 예측 모델", color: "blue" },
                  { text: "복잡한 시장 패턴을 포착하는 딥러닝 알고리즘", color: "purple" },
                  { text: "고성능 백테스팅 시스템으로 전략 검증", color: "green" },
                  { text: "실시간 모니터링 및 알림 시스템", color: "orange" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-${item.color}-500/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0`}>
                      <div className={`w-3 h-3 rounded-full bg-${item.color}-400`}></div>
                    </div>
                    <span className="text-slate-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <motion.div 
                className="w-full h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-slate-800 overflow-hidden relative"
                whileInView={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                {/* 배경 그리드 */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                
                {/* 뇌 시각화 영역 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative p-4">
                    {/* 뇌 외형 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-56 z-20">
                      {/* 뇌 외형 */}
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{
                          scale: [0.98, 1.02, 0.98]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {/* 좌측 대뇌 반구 */}
                        <motion.div
                          className="absolute w-[45%] h-[85%] left-0 top-[10%] rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30"
                          style={{
                            borderTopRightRadius: '40%',
                            borderBottomRightRadius: '40%'
                          }}
                          animate={{
                            boxShadow: [
                              'inset 0 0 20px 5px rgba(59, 130, 246, 0.1)',
                              'inset 0 0 30px 10px rgba(59, 130, 246, 0.2)',
                              'inset 0 0 20px 5px rgba(59, 130, 246, 0.1)'
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* 우측 대뇌 반구 */}
                        <motion.div
                          className="absolute w-[45%] h-[85%] right-0 top-[10%] rounded-full bg-gradient-to-bl from-purple-400/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30"
                          style={{
                            borderTopLeftRadius: '40%',
                            borderBottomLeftRadius: '40%'
                          }}
                          animate={{
                            boxShadow: [
                              'inset 0 0 20px 5px rgba(168, 85, 247, 0.1)',
                              'inset 0 0 30px 10px rgba(168, 85, 247, 0.2)',
                              'inset 0 0 20px 5px rgba(168, 85, 247, 0.1)'
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                        
                        {/* 소뇌 부분 */}
                        <motion.div
                          className="absolute w-[30%] h-[35%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-b-full bg-gradient-to-t from-green-400/20 to-blue-600/10 backdrop-blur-sm border border-green-500/30"
                          animate={{
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* 뇌간 */}
                        <div className="absolute w-[10%] h-[15%] left-1/2 transform -translate-x-1/2 bottom-0 bg-gradient-to-b from-blue-400/20 to-green-400/20 rounded-lg" />
                      </motion.div>
                      
                      {/* 뇌 내부 활동 - 시냅스 신경망 연결 */}
                      <div className="absolute inset-0">
                        {/* 좌측 반구 신경망 */}
                        {Array.from({ length: 12 }).map((_, i) => {
                          const x1 = 5 + Math.random() * 25;
                          const y1 = 15 + Math.random() * 70;
                          const x2 = 5 + Math.random() * 25;
                          const y2 = 15 + Math.random() * 70;
                          return (
                            <motion.div 
                              key={`left-neuron-${i}`}
                              className="absolute bg-blue-400/60"
                              style={{
                                width: '1px',
                                height: `${Math.random() * 15 + 10}px`,
                                top: `${y1}%`,
                                left: `${x1}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                              }}
                              animate={{
                                opacity: [0.2, 0.8, 0.2]
                              }}
                              transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                            />
                          );
                        })}
                        
                        {/* 우측 반구 신경망 */}
                        {Array.from({ length: 12 }).map((_, i) => {
                          const x1 = 70 + Math.random() * 25;
                          const y1 = 15 + Math.random() * 70;
                          const x2 = 70 + Math.random() * 25;
                          const y2 = 15 + Math.random() * 70;
                          return (
                            <motion.div 
                              key={`right-neuron-${i}`}
                              className="absolute bg-purple-400/60"
                              style={{
                                width: '1px',
                                height: `${Math.random() * 15 + 10}px`,
                                top: `${y1}%`,
                                left: `${x1}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                              }}
                              animate={{
                                opacity: [0.2, 0.8, 0.2]
                              }}
                              transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                            />
                          );
                        })}
                      </div>
                      
                      {/* 신경 전달 펄스 - 빛나는 점들이 뇌 전체를 이동 */}
                      <div className="absolute inset-0">
                        {Array.from({ length: 20 }).map((_, i) => {
                          const startX = Math.random() * 100;
                          const startY = Math.random() * 100;
                          const endX = Math.random() * 100;
                          const endY = Math.random() * 100;
                          return (
                            <motion.div
                              key={`pulse-${i}`}
                              className="absolute w-1.5 h-1.5 rounded-full"
                              style={{
                                backgroundColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)',
                                top: `${startY}%`,
                                left: `${startX}%`,
                                boxShadow: i % 2 === 0 ? '0 0 5px 2px rgba(59, 130, 246, 0.3)' : '0 0 5px 2px rgba(168, 85, 247, 0.3)'
                              }}
                              animate={{
                                top: [`${startY}%`, `${endY}%`, `${startY}%`],
                                left: [`${startX}%`, `${endX}%`, `${startX}%`],
                                scale: [1, 1.5, 1]
                              }}
                              transition={{
                                duration: Math.random() * 8 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                              }}
                            />
                          );
                        })}
                      </div>
                      
                      {/* 알고리즘 처리 시각화 */}
                      <div className="absolute inset-0">
                        {/* 알고리즘 코드 흐름 라인 */}
                        {Array.from({ length: 6 }).map((_, i) => {
                          const yPos = 10 + Math.random() * 80;
                          return (
                            <motion.div
                              key={`algo-line-${i}`}
                              className="absolute h-px rounded-full"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)'}, transparent)`,
                                top: `${yPos}%`,
                                left: '30%',
                                width: '40%'
                              }}
                              animate={{
                                scaleX: [0, 1, 0],
                                opacity: [0, 0.8, 0]
                              }}
                              transition={{
                                duration: Math.random() * 3 + 4,
                                repeat: Infinity,
                                delay: Math.random() * 3
                              }}
                            />
                          );
                        })}
                        
                        {/* 주요 알고리즘 노드 - 중요 알고리즘 처리 지점 */}
                        {Array.from({ length: 6 }).map((_, i) => {
                          const size = Math.random() * 6 + 4; // 4-10px
                          const xPos = 20 + Math.random() * 60; // 20%-80%
                          const yPos = 20 + Math.random() * 60; // 20%-80%
                          const isBlue = Math.random() > 0.5;
                          const color = isBlue ? 'rgba(59, 130, 246, 0.4)' : 'rgba(168, 85, 247, 0.4)';
                          const borderColor = isBlue ? 'rgba(59, 130, 246, 0.6)' : 'rgba(168, 85, 247, 0.6)';
                          
                          return (
                            <motion.div
                              key={`algo-node-${i}`}
                              className="absolute rounded-md backdrop-blur-sm"
                              style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                backgroundColor: color,
                                borderColor: borderColor,
                                borderWidth: '1px',
                                top: `${yPos}%`,
                                left: `${xPos}%`
                              }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6],
                                boxShadow: [
                                  `0 0 3px 1px ${color}`,
                                  `0 0 8px 3px ${color}`,
                                  `0 0 3px 1px ${color}`
                                ]
                              }}
                              transition={{
                                duration: Math.random() * 4 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                            />
                          );
                        })}
                      </div>
                      
                      {/* 중앙 연결 부분 - 뇌량 */}
                      <motion.div
                        className="absolute w-[30%] h-[8%] left-1/2 transform -translate-x-1/2 top-[40%] bg-gradient-to-r from-blue-500/20 via-purple-400/30 to-blue-500/20 rounded-full"
                        animate={{
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* 알고리즘 텍스트 라벨들 */}
                      <motion.div
                        className="absolute top-[10%] left-[45%] text-[8px] text-blue-400/70 font-mono"
                        animate={{
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        머신러닝
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-[30%] left-[70%] text-[8px] text-purple-400/70 font-mono"
                        animate={{
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1
                        }}
                      >
                        딥러닝
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-[60%] left-[25%] text-[8px] text-blue-400/70 font-mono"
                        animate={{
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 2
                        }}
                      >
                        예측모델
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-[80%] left-[55%] text-[8px] text-green-400/70 font-mono"
                        animate={{
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 3
                        }}
                      >
                        최적화
                      </motion.div>
                      
                      {/* 데이터 스트림 패스웨이 */}
                      <svg className="absolute inset-0 w-full h-full z-10 opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                          d="M30,30 Q50,50 70,30"
                          stroke="rgba(59, 130, 246, 0.5)"
                          strokeWidth="0.5"
                          fill="none"
                          animate={{
                            d: [
                              "M30,30 Q50,50 70,30",
                              "M30,40 Q50,60 70,40",
                              "M30,30 Q50,50 70,30"
                            ]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.path
                          d="M25,50 Q50,30 75,50"
                          stroke="rgba(168, 85, 247, 0.5)"
                          strokeWidth="0.5"
                          fill="none"
                          animate={{
                            d: [
                              "M25,50 Q50,30 75,50",
                              "M25,60 Q50,40 75,60",
                              "M25,50 Q50,30 75,50"
                            ]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                        
                        <motion.path
                          d="M20,70 Q50,80 80,70"
                          stroke="rgba(16, 185, 129, 0.5)"
                          strokeWidth="0.5"
                          fill="none"
                          animate={{
                            d: [
                              "M20,70 Q50,80 80,70",
                              "M20,65 Q50,75 80,65",
                              "M20,70 Q50,80 80,70"
                            ]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                          }}
                        />
                      </svg>
                    </div>
                    
                    {/* 3D 회전하는 데이터 구조 */}
                    <motion.div
                      className="absolute bottom-6 right-6 w-28 h-28"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="relative w-full h-full" style={{ perspective: '500px' }}>
                        <div className="absolute inset-0 rounded-lg flex items-center justify-center backdrop-blur-md bg-blue-500/10 border border-blue-400/30">
                          <div className="text-2xl font-bold text-blue-300">AI</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* 보조 데이터 시각화 */}
                    <div className="absolute top-8 left-8 h-24 flex items-end space-x-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={`bar-${i}`}
                          className="w-2 bg-gradient-to-t from-blue-500/30 to-purple-500/30 rounded-t-sm"
                          style={{ height: '10%' }}
                          animate={{
                            height: [`${Math.random() * 30 + 10}%`, `${Math.random() * 70 + 30}%`, `${Math.random() * 30 + 10}%`]
                          }}
                          transition={{
                            duration: Math.random() * 2 + 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA 섹션 */}
      <AnimatedSection className="w-full py-16 bg-gradient-to-b from-slate-950 to-blue-900/20 relative">
        <AnimatedGradientBg />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">맞춤형 금융 솔루션이 필요하신가요?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              알고포지의 전문가 팀이 귀하의 요구사항에 맞는 최적의 솔루션을 제안해 드립니다.
              지금 바로 상담을 신청하고 함께 미래를 준비하세요.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 group">
                무료 상담 신청하기 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
} 