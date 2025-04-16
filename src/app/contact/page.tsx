'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

// SVG 아이콘 컴포넌트 직접 정의
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-secondary text-2xl">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const EnvelopeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const MapMarkerIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const STRATEGY_TYPES = [
  { id: 'quant', label: '퀀트 전략' },
  { id: 'trend', label: '추세 추종' },
  { id: 'arbitrage', label: '차익거래' },
  { id: 'market_making', label: '마켓 메이킹' },
  { id: 'options', label: '옵션 전략' },
  { id: 'custom', label: '커스텀 개발' },
];

const BUDGET_OPTIONS = [
  { id: 'under_5m', label: '500만원 미만' },
  { id: '5m_10m', label: '500만원 - 1000만원' },
  { id: '10m_30m', label: '1000만원 - 3000만원' },
  { id: 'over_30m', label: '3000만원 이상' },
  { id: 'discuss', label: '협의 필요' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    strategyTypes: [] as string[],
    budget: '',
    timeframe: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (id: string) => {
    if (formData.strategyTypes.includes(id)) {
      setFormData({
        ...formData,
        strategyTypes: formData.strategyTypes.filter(type => type !== id),
      });
    } else {
      setFormData({
        ...formData,
        strategyTypes: [...formData.strategyTypes, id],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    
    // 여기에 실제 폼 제출 로직이 들어갑니다 (API 호출 등)
    // 현재는 성공적으로 제출됐다고 가정합니다.
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };
  
  return (
    <div className="flex flex-col">
      {/* 페이지 헤더 */}
      <section className="relative bg-gradient-to-b from-black via-blue-800/80 to-black text-white py-20 md:py-28 overflow-hidden">
        {/* 고급 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        
        {/* 코드 배경 효과 추가 */}
        <div className="absolute inset-0 z-0 opacity-5">
          <pre className="text-white font-mono text-[10px] leading-tight p-8 overflow-hidden" style={{ whiteSpace: 'pre-wrap' }}>
{"function optimizeConsultation(client) {\n  // 클라이언트 데이터 분석\n  const preferences = analyzeClientPreferences(client.data);\n  const riskProfile = calculateRiskProfile(preferences);\n  \n  // 최적 솔루션 탐색\n  const solutions = findOptimalSolutions(riskProfile);\n  \n  // 개인화된 전략 생성\n  return {\n    strategies: solutions.map(solution => {\n      return new Strategy({\n        type: solution.type,\n        parameters: solution.parameters,\n        backtest: runBacktest(solution, client.constraints),\n        implementation: generateImplementationPlan(solution)\n      });\n    }),\n    presentation: createCustomPresentation(solutions, client)\n  };\n}\n\nfunction analyzeClientPreferences(data) {\n  // 고객 성향 및 선호도 분석\n  const preferences = {\n    riskTolerance: evaluateRiskTolerance(data.answers),\n    investmentHorizon: data.timeframe,\n    priorityFactors: extractPriorityFactors(data.answers),\n    constraints: extractConstraints(data.answers)\n  };\n  \n  return preferences;\n}\n\nfunction findOptimalSolutions(riskProfile) {\n  // 알고리즘 기반 최적 솔루션 탐색\n  const candidateSolutions = STRATEGY_DATABASE\n    .filter(strategy => matchesRiskProfile(strategy, riskProfile))\n    .map(strategy => ({ \n      ...strategy, \n      score: calculateStrategyScore(strategy, riskProfile)\n    }));\n    \n  return candidateSolutions\n    .sort((a, b) => b.score - a.score)\n    .slice(0, 3); // 상위 3개 솔루션 반환\n}"}
          </pre>
        </div>
        
        {/* 3D 그래픽 요소 추가 */}
        <div className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 opacity-20 z-0">
          <div className="animate-spin-slow absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
          <div className="animate-spin-reverse-slow absolute inset-8 border-4 border-blue-300/20 rounded-full"></div>
          <div className="animate-pulse-slow absolute inset-16 border-4 border-blue-400/10 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent"></div>
        </div>
        
        {/* 데이터 라인 효과 향상 */}
        <div className="absolute top-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute left-1/4 h-full w-px opacity-20">
          <div className="data-line h-full w-full"></div>
        </div>
        <div className="absolute right-1/4 h-full w-px opacity-20">
          <div className="data-line h-full w-full"></div>
        </div>
        
        {/* 부유하는 데이터 포인트 추가 */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={`data-point-${i}`}
              className="absolute rounded-full bg-blue-400/30"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-500/40 mb-6 shadow-lg text-sm animate-pulse-slow">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="font-medium text-white">맞춤형 알고리즘 트레이딩 솔루션</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg leading-tight text-white">
                <span className="text-white">전문가와</span> 
                <span className="relative inline-block mx-2">
                  <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">상담</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/70 rounded-full"></span>
                </span>
                <span className="text-white">하고</span><br />
                <span className="relative inline-block mr-2">
                  <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">맞춤형 솔루션</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/70 rounded-full"></span>
                </span>
                <span className="text-white">을 경험하세요</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] mb-8">
                전략이 있으신가요? 기술은 저희가 맡겠습니다.
                <span className="block mt-2">당신의 트레이딩 아이디어를 현실로 구현하는 첫 걸음을 함께 시작하세요.</span>
              </p>
              
              {/* 상담 버튼 추가 */}
              <div className="mb-8">
                <button
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 
                    hover:from-blue-600 hover:to-blue-700 rounded-full transition-all duration-300 
                    shadow-[0_4px_15px_rgba(59,130,246,0.3)] gap-2 transform hover:scale-105"
                >
                  <span className="relative">
                    지금 바로 문의하기
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 rounded-full"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
              
              {/* 통계 지표 추가 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-300">98%</div>
                  <div className="text-sm text-white/70">고객 만족도</div>
                </div>
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-300">24h</div>
                  <div className="text-sm text-white/70">평균 응답 시간</div>
                </div>
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-300">200+</div>
                  <div className="text-sm text-white/70">성공 프로젝트</div>
                </div>
              </div>
            </div>
            
            {/* 우측 일러스트레이션 영역 */}
            <div className="hidden md:block md:col-span-1">
              <div className="relative p-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/10 rounded-2xl blur-xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl bg-black/50 backdrop-blur-lg">
                  <div className="terminal-header flex items-center justify-between bg-gray-800 p-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">consultation.js</div>
                  </div>
                  <div className="p-4 font-mono text-sm text-green-400">
                    <div className="typing-algorithm">
                      <span style={{ animationDelay: '0.1s' }}>{'>'} 고객 맞춤형 알고리즘 설계 중...</span>
                      <div className="mt-2">
                        <span style={{ animationDelay: '0.3s' }}>{'>'} 리스크 프로파일 분석:</span>
                      </div>
                      <div className="ml-4 mt-1 text-blue-300">
                        <span style={{ animationDelay: '0.5s' }}>const riskScore = 72; // 중간 위험 수용도</span>
                      </div>
                      <div className="ml-4">
                        <span style={{ animationDelay: '0.7s' }}>const timeHorizon = "medium";</span>
                      </div>
                      <div className="mt-2">
                        <span style={{ animationDelay: '0.9s' }}>{'>'} 최적 전략:</span>
                      </div>
                      <div className="ml-4 text-yellow-300">
                        <span style={{ animationDelay: '1.1s' }}>return ["TREND_FOLLOWING", "MOMENTUM", "MEAN_REVERSION"];</span>
                      </div>
                      <div className="mt-2">
                        <span style={{ animationDelay: '1.3s' }}>{'>'} 예상 성과: <span className="text-blue-300">ROI 32.4%</span></span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-white/70">{'>'}</span>
                      <span className="ml-2 inline-block h-4 w-2 bg-green-500 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
          <div className="data-line absolute top-1/3 left-0 right-0 h-px"></div>
          <div className="data-line absolute bottom-1/3 left-0 right-0 h-px"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 폼 섹션 */}
            <div className="lg:col-span-2">
              <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20 shadow-2xl">
                {!isSubmitted ? (
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 font-heading text-white">문의 양식</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                          이름 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                          회사명
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                          연락처 *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        관심 전략 유형 (다중 선택 가능)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {STRATEGY_TYPES.map((type) => (
                          <div key={type.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={type.id}
                              checked={formData.strategyTypes.includes(type.id)}
                              onChange={() => handleCheckboxChange(type.id)}
                              className="w-4 h-4 text-blue-500 border-blue-500/30 bg-black/70 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={type.id} className="ml-2 text-sm text-white/80">
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-1">
                          예산
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="" disabled>예산을 선택하세요</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium text-white/80 mb-1">
                          희망 기간
                        </label>
                        <input
                          type="text"
                          id="timeframe"
                          name="timeframe"
                          placeholder="예: 2개월 이내, 6개월 이내"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                        상세 문의 내용 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="개발하고자 하는 시스템, 적용하고 싶은 전략, 특별한 요구사항 등을 자유롭게 작성해주세요."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/70 border border-blue-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full shadow-lg shadow-blue-600/20 transform hover:scale-105 transition-all duration-300 font-bold bg-blue-600 text-white"
                      >
                        문의하기
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                      <CheckIcon />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 font-heading text-white">문의가 접수되었습니다!</h2>
                    <p className="text-white/80 mb-8">
                      소중한 문의에 감사드립니다. 담당자가 검토 후 영업일 기준 1-2일 내에 
                      입력하신 연락처로 회신드리겠습니다.
                    </p>
                    <Button
                      variant="outline"
                      className="border-blue-500/50 text-white hover:bg-blue-500/20"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          strategyTypes: [],
                          budget: '',
                          timeframe: '',
                          message: '',
                        });
                      }}
                    >
                      새로운 문의하기
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* 연락처 정보 섹션 */}
            <div>
              {/* 지도 시각화 */}
              <div className="bg-black/50 backdrop-blur-lg p-1 rounded-2xl border border-blue-500/20 shadow-2xl mb-8 overflow-hidden">
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-blue-900/10">
                    {/* 지도 배경 효과 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-blue-500/30 rounded-full blur-2xl animate-pulse-slow"></div>
                    </div>
                    
                    {/* 가상 지도 그리드 */}
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-6">
                      {Array(60).fill(0).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-blue-500/10"></div>
                      ))}
                    </div>
                    
                    {/* 위치 마커 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full animate-ping-slow absolute"></div>
                        <div className="w-8 h-8 bg-blue-500/40 rounded-full absolute top-4 left-4"></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-6 left-6 shadow-lg"></div>
                      </div>
                    </div>
                    
                    {/* 텍스트 오버레이 */}
                    <div className="absolute bottom-4 left-4 text-white bg-black/70 px-3 py-1 rounded-lg text-sm font-mono">
                      <span className="text-blue-400">알고포지</span> 본사
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20 shadow-2xl mb-8">
                <h2 className="text-xl font-bold mb-6 font-heading text-white">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400">
                      <MapMarkerIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">주소</h3>
                      <p className="text-white/70">
                        서울특별시 강남구 테헤란로 123<br />
                        알고포지 빌딩 8층
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400">
                      <EnvelopeIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">이메일</h3>
                      <p className="text-blue-400">contact@algoforge.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">전화</h3>
                      <p className="text-blue-400">02-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black/70 to-blue-900/30 text-white p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
                <h2 className="text-xl font-bold mb-4 font-heading">업무 시간</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>월요일 - 금요일:</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>토요일 - 일요일:</span>
                    <span>휴무</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    긴급한 문의는 이메일로 연락 주시면 최대한 빠르게 답변드리겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 