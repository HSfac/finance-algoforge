'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaLightbulb } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CounterAnimation from '@/components/ui/CounterAnimation';
import Image from 'next/image';

// 움직이는 그라데이션 배경 컴포넌트
const AnimatedGradientBg = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute -inset-[10px] opacity-30">
      <div className="absolute top-0 -left-4 w-3/4 h-full bg-gradient-to-r from-primary/20 via-blue-500/10 to-purple-500/20 blur-3xl animate-slowpulse opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-l from-primary/20 via-indigo-500/10 to-blue-500/20 blur-3xl animate-slowpulse2 opacity-50"></div>
    </div>
  </div>
);

// 3D 카드 컴포넌트
const TiltCard = ({ children, className = "" }) => (
  <motion.div 
    className={`bg-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-800 shadow-xl ${className}`}
    whileHover={{ 
      scale: 1.03, 
      rotateX: 5, 
      rotateY: 5, 
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" 
    }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.div>
);

// 수치 표시 컴포넌트
const StatCard = ({ value, label, suffix = "", prefix = "", color = "blue" }) => (
  <div className="text-center">
    <div className={`text-3xl md:text-4xl font-bold mb-2 text-${color}-500 flex items-center justify-center`}>
      <span>{prefix}</span>
      <CounterAnimation end={value} duration={2.5} />
      <span>{suffix}</span>
    </div>
    <p className="text-slate-400 text-sm md:text-base">{label}</p>
  </div>
);

// 포트폴리오 최적화 페이지 템플릿
const ServiceTemplate = ({ 
  // 페이지 기본 정보
  title = "서비스 타이틀",
  description = "서비스 설명을 입력해주세요.",
  primaryColor = "blue",
  
  // 섹션 콘텐츠
  introTitle = "서비스 소개 타이틀",
  introDescription = "서비스 소개 내용을 입력해주세요.",
  introFeatures = [],
  introImage = "/placeholder.jpg",
  
  // 기능 목록
  features = [],
  
  // 프로세스 단계
  process = [],
  
  // 사례 연구
  caseStudy = {
    title: "사례 연구 타이틀",
    description: "사례 연구 내용을 입력해주세요.",
    stats: []
  }
}) => {
  // 색상 그라데이션 매핑
  const colorMap = {
    blue: "from-blue-400 to-purple-600",
    purple: "from-purple-400 to-pink-600",
    green: "from-green-400 to-teal-600",
    orange: "from-orange-400 to-red-600",
    teal: "from-teal-400 to-blue-600"
  };
  
  // introImage가 문자열인지 컴포넌트인지 확인
  const isImageComponent = typeof introImage !== 'string';
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      {/* 헤더 섹션 - 유려한 애니메이션 배경 */}
      <section className={`w-full py-24 bg-gradient-to-b from-${primaryColor}-900/30 to-slate-950 relative overflow-hidden`}>
        {/* 애니메이션 배경 */}
        <AnimatedGradientBg />
        
        {/* 움직이는 파티클 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {[...Array(30)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  background: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.6)'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorMap[primaryColor]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" 
                className={`px-8 py-3 bg-${primaryColor}-600 hover:bg-${primaryColor}-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group`}>
                상담 신청하기 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300">
                서비스 둘러보기
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 - 유리 모피즘 디자인 */}
      <AnimatedSection className="w-full py-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-radial from-slate-900/50 to-slate-950 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 text-${primaryColor}-400`}>{introTitle}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {introDescription}
              </p>
              <ul className="space-y-6">
                {introFeatures.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${primaryColor}-900/50 flex items-center justify-center flex-shrink-0 mt-1`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* 3D 기울기 효과 이미지 또는 컴포넌트 */}
            <motion.div 
              className={`rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative group`}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {isImageComponent ? (
                // React 컴포넌트 렌더링
                <div className="w-full h-full">
                  {introImage}
                </div>
              ) : (
                // 이미지 URL 렌더링
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Image 
                    src={introImage} 
                    alt={title} 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent">
                    <p className="text-sm text-white/80">최신 알고리즘 기반 분석 시스템</p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* 통계 하이라이트 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-950 relative border-y border-slate-800/50">
        <AnimatedGradientBg className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <StatCard value={95} suffix="%" label="고객 만족도" color={primaryColor} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <StatCard value={24} suffix="%" label="평균 수익률 향상" color={primaryColor} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <StatCard value={35} prefix="+" label="금융기관 협력사" color={primaryColor} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true, margin: "-150px" }}
            >
              <StatCard value={15} prefix="+" suffix="조원" label="운용 자산 규모" color={primaryColor} />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* 주요 기능 섹션 - 호버 효과 카드 */}
      <AnimatedSection className="w-full py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 text-${primaryColor}-400 inline-block relative`}>
              주요 기능
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              최신 기술과 금융 알고리즘을 결합하여 차별화된 서비스를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <TiltCard key={idx}>
                <div className={`w-14 h-14 bg-${primaryColor}-900/50 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${primaryColor}-900/10`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 프로세스 섹션 - 인터랙티브 타임라인 */}
      <AnimatedSection className="w-full py-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 text-${primaryColor}-400`}>서비스 진행 프로세스</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              체계적이고 효율적인 프로세스로 최적의 결과를 도출합니다
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex mb-8 last:mb-0 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* 타임라인 선 */}
                {index < process.length - 1 && (
                  <div className={`absolute left-8 top-14 w-0.5 h-[calc(100%_-_1rem)] bg-gradient-to-b from-${primaryColor}-500 to-slate-800`}></div>
                )}
                
                {/* 숫자 원형 */}
                <div className="w-16 flex-shrink-0 flex items-start justify-center pt-2">
                  <div className={`w-12 h-12 bg-${primaryColor}-900/50 rounded-full flex items-center justify-center border border-${primaryColor}-500 shadow-lg shadow-${primaryColor}-900/20`}>
                    <span className={`text-${primaryColor}-400 font-bold`}>{step.number}</span>
                  </div>
                </div>
                
                {/* 내용 */}
                <motion.div 
                  className="flex-1 ml-4 p-6 rounded-xl bg-slate-950/70 backdrop-blur-sm border border-slate-800 shadow-xl"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 사례 연구 섹션 */}
      <AnimatedSection className="w-full py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 text-${primaryColor}-400`}>사례 연구</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              실제 고객사의 성공 사례를 통해 서비스의 효과를 확인하세요
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TiltCard className="p-8 backdrop-blur-md bg-gradient-to-br from-slate-900 to-slate-950">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-${primaryColor}-900/50 flex items-center justify-center`}>
                  <FaLightbulb className={`text-${primaryColor}-400 text-xl`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
              </div>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {caseStudy.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {caseStudy.stats.map((stat, idx) => (
                  <div key={idx} className={`p-4 rounded-lg bg-slate-900/50 border border-slate-800`}>
                    <div className={`text-3xl font-bold mb-2 text-${primaryColor}-500`}>
                      {stat.prefix || ""}{stat.value}{stat.suffix || ""}
                    </div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA 섹션 - 화려한 그라데이션 */}
      <AnimatedSection className={`w-full py-20 bg-gradient-to-b from-slate-950 to-${primaryColor}-900/30 relative`}>
        <AnimatedGradientBg />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{`지금 바로 ${title} 서비스를 경험하세요`}</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              알고포지의 전문적인 솔루션으로 금융 투자의 새로운 지평을 열어보세요.
              지금 바로 상담을 신청하고 맞춤형 서비스를 경험해보세요.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className={`px-10 py-4 bg-${primaryColor}-600 hover:bg-${primaryColor}-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-${primaryColor}-900/20 group`}>
                무료 상담 신청하기 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default ServiceTemplate; 