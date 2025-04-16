'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaChartLine, FaArrowRight, FaBell, FaChartBar, FaExclamationTriangle } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import RiskHeatmapChart from '@/components/visualizations/RiskHeatmapChart';
import RiskVaRChart from '@/components/visualizations/RiskVaRChart';

export default function RiskManagementPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      {/* 헤더 섹션 */}
      <section className="w-full py-20 bg-gradient-to-b from-indigo-900/30 to-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              위험 관리
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              고급 리스크 모델링을 통해 시장 변동성에 선제적으로 대응하고 안정적인 자산 가치를 보호합니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                상담 신청하기 <FaArrowRight />
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300">
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>

        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
              }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">종합적인 위험 분석</h2>
              <p className="text-slate-300 mb-6">
                시장 위험, 신용 위험, 유동성 위험 등 다양한 위험 요소를 종합적으로 분석하여 
                잠재적 리스크를 사전에 식별하고 체계적인 관리 방안을 제시합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaShieldAlt className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">VaR, CVaR 등 고급 위험 측정 지표 활용</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChartBar className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">스트레스 테스트 및 시나리오 분석</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">위험 조기 경보 시스템 구축</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800">
              <RiskHeatmapChart />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 주요 기능 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-400">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-indigo-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">리스크 모니터링</h3>
              <p className="text-slate-400">
                실시간으로 포트폴리오 리스크를 모니터링하여 위험 지표가 임계치를 넘어설 경우 즉시 알림을 제공합니다.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaBell className="text-indigo-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">위험 대응 자동화</h3>
              <p className="text-slate-400">
                사전 설정된 위험 대응 프로토콜에 따라 자동으로 포트폴리오 조정 및 헤지 전략을 실행합니다.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-indigo-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">테일 리스크 관리</h3>
              <p className="text-slate-400">
                극단적 시장 상황에서 발생할 수 있는 테일 리스크를 분석하고 효과적인 대비책을 마련합니다.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* VaR 분석 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">VaR(Value at Risk) 분석</h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
            포트폴리오의 잠재적 손실 규모를 정량적으로 측정하여 특정 신뢰수준에서 최대 예상 손실액을 산출합니다.
            다양한 시장 시나리오에 대한 스트레스 테스트를 통해 극단적 상황에서의 리스크를 평가합니다.
          </p>
          <div className="max-w-4xl mx-auto bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-lg">
            <RiskVaRChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
            <div className="bg-slate-900/60 p-5 rounded-lg text-center">
              <p className="text-2xl font-bold text-red-500 mb-2">-11.2%</p>
              <p className="text-slate-400 text-sm">일별 VaR (95%)</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-lg text-center">
              <p className="text-2xl font-bold text-red-500 mb-2">-15.7%</p>
              <p className="text-slate-400 text-sm">일별 CVaR (95%)</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-500 mb-2">92.3%</p>
              <p className="text-slate-400 text-sm">스트레스 테스트 통과율</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 위험 관리 프로세스 */}
      <AnimatedSection className="w-full py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-400">위험 관리 프로세스</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900"></div>
            
            {/* 프로세스 단계 */}
            {[
              {
                title: "위험 식별",
                description: "포트폴리오에 영향을 미칠 수 있는 모든 잠재적 위험 요소를 체계적으로 식별합니다."
              },
              {
                title: "위험 측정",
                description: "정교한 통계 모델을 사용하여 식별된 위험의 규모와 영향을 정량적으로 측정합니다."
              },
              {
                title: "위험 완화",
                description: "최적의 헤지 전략과 위험 분산 방법을 통해 식별된 위험을 효과적으로 완화합니다."
              },
              {
                title: "모니터링 및 보고",
                description: "지속적인 위험 모니터링과 체계적인 보고를 통해 위험 관리 프로세스의 효과성을 검증합니다."
              }
            ].map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className={`bg-slate-950 p-6 rounded-xl border border-slate-800 inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-8 h-8 bg-indigo-600 rounded-full border-4 border-slate-900 z-10"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 사례 연구 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-400">사례 연구</h2>
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl p-8 border border-slate-800">
            <h3 className="text-xl font-semibold mb-4 text-white">글로벌 투자은행의 리스크 관리 혁신</h3>
            <p className="text-slate-400 mb-6">
              글로벌 투자은행 B사는 당사의 위험 관리 시스템을 도입한 후 시장 급변 상황에서도 손실을 34% 줄이고, 
              운영 효율성은 28% 향상시켰습니다. 특히 코로나19와 같은 블랙스완 이벤트에서 안정적인 성과를 유지했습니다.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-red-500 mb-2">-34%</p>
                <p className="text-slate-400">시장 급변 시 손실 감소</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500 mb-2">+28%</p>
                <p className="text-slate-400">운영 효율성 향상</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA 섹션 */}
      <AnimatedSection className="w-full py-16 bg-gradient-to-b from-slate-950 to-indigo-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">더 안전한 투자를 위한 첫걸음</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            알고포지의 위험 관리 서비스로 불확실한 시장 환경에서도 안정적인 자산 성장을 이루세요.
            지금 바로 상담을 신청하고 맞춤형 위험 관리 솔루션을 경험해보세요.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
            무료 상담 신청하기 <FaArrowRight />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
} 