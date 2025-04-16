'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import { FaChartLine, FaRobot, FaArrowRight } from 'react-icons/fa6';

const CATEGORIES = [
  { id: 'all', name: '전체' },
  { id: 'dex', name: 'DEX' },
  { id: 'futures', name: '선물' },
  { id: 'kimchi', name: '김프' },
  { id: 'options', name: '옵션' },
  { id: 'stocks', name: '주식' },
];

const SOLUTIONS = [
  {
    id: 1,
    title: '유니스왑 유동성 자동화 시스템',
    target: 'DEX / 이더리움',
    duration: '2개월',
    features: [
      '최적 가격 범위 자동 설정',
      '가스비 최적화 재배치 로직',
      '수익률 추적 및 리밸런싱',
    ],
    returns: '연 32%+',
    category: 'dex',
    stack: ['Python', 'Web3.py', 'Node.js', 'React'],
  },
  {
    id: 2,
    title: '바이낸스 퓨처스 추세 매매 봇',
    target: '암호화폐 선물',
    duration: '1.5개월',
    features: [
      '멀티 타임프레임 분석',
      '변동성 기반 포지션 사이징',
      '트레일링 스탑 최적화',
    ],
    returns: '월 5-15%',
    category: 'futures',
    stack: ['Python', 'CCXT', 'Pandas', 'TA-Lib'],
  },
  {
    id: 3,
    title: '업비트-바이낸스 김프 트레이딩 시스템',
    target: '한국 프리미엄',
    duration: '2.5개월',
    features: [
      '실시간 스프레드 모니터링',
      '최적 진입/청산 포인트 감지',
      '멀티스레드 주문 처리',
    ],
    returns: '월 3-8%',
    category: 'kimchi',
    stack: ['Python', 'CCXT', 'Redis', 'FastAPI'],
  },
  {
    id: 4,
    title: '옵션 변동성 차익거래 시스템',
    target: '비트코인, 이더리움 옵션',
    duration: '3개월',
    features: [
      'Black-Scholes 모델 기반 분석',
      'IV 서페이스 실시간 매핑',
      '그릭스 중립 포지션 구성',
    ],
    returns: '월 2-6%',
    category: 'options',
    stack: ['Python', 'NumPy', 'SciPy', 'React'],
  },
  {
    id: 5,
    title: '국내 주식 퀀트 스크리너',
    target: 'KOSPI/KOSDAQ',
    duration: '2개월',
    features: [
      '재무제표 기반 가치주 필터링',
      '모멘텀 지표 분석',
      '섹터별 성과 비교',
    ],
    returns: '연 25%+',
    category: 'stocks',
    stack: ['Python', 'Pandas', 'Django', 'React'],
  },
  {
    id: 6,
    title: '메이커-테이커 마진 차익거래',
    target: 'DEX / CEX 통합',
    duration: '2개월',
    features: [
      '멀티 거래소 주문장 분석',
      '플래시론 활용 무위험 차익거래',
      'MEV 보호 기능',
    ],
    returns: '월 4-10%',
    category: 'dex',
    stack: ['Solidity', 'Web3.js', 'Python', 'PostgreSQL'],
  },
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSolutions = activeCategory === 'all' 
    ? SOLUTIONS 
    : SOLUTIONS.filter(solution => solution.category === activeCategory);
  
  return (
    <div className="flex flex-col">
      {/* 페이지 헤더 */}
      <section className="relative bg-gradient-to-b from-black via-blue-800/80 to-black text-white py-20 md:py-28 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        
        {/* 데이터 라인 효과 */}
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
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-500/40 mb-6 shadow-lg text-sm">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="font-medium text-white">검증된 알고리즘 트레이딩 솔루션</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg leading-tight">
              당신의 <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">투자 전략</span>을<br />
              <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">코드</span>로 구현합니다
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] mb-8">
              AlgoForge가 개발한 다양한 금융 알고리즘 매매 솔루션을 살펴보세요. 
              각 솔루션은 철저한 백테스트와 실전 검증을 거쳐 안정적인 수익을 제공합니다.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-black/40 backdrop-blur-sm text-white/80 hover:bg-blue-600/30 border border-white/10'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 솔루션 카드 그리드 */}
      <AnimatedSection className="section bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container">
          <AnimatedItem>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.id} className="bg-black/50 backdrop-blur-lg rounded-2xl border border-blue-500/20 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                  <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                    {/* 배경 디자인 */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-blue-500/10 inline-block px-2 py-1 rounded text-sm text-blue-400 mb-3 font-medium">
                        {solution.target}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/80">
                            <div className="mt-1 text-blue-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-white/60">평균 수익률</p>
                          <p className="text-xl font-bold text-blue-400">{solution.returns}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">개발 기간</p>
                          <p className="text-lg font-medium text-white">{solution.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {solution.stack.map((tech, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-black/50 text-white/70 rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link href="/contact">
                        <Button variant="outline" size="sm" className="w-full group bg-black/30 border-blue-500/30 text-white hover:bg-blue-500/20">
                          <span className="flex items-center justify-center gap-2">
                            문의하기
                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredSolutions.length === 0 && (
              <div className="text-center py-16 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-xl text-white/70">
                  해당 카테고리의 솔루션이 없습니다.
                </p>
              </div>
            )}
          </AnimatedItem>
        </div>
      </AnimatedSection>
      
      {/* 맞춤형 솔루션 CTA */}
      <AnimatedSection className="bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
          <div className="data-line absolute top-1/2 left-0 right-0 h-px"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="bg-blue-500/20 inline-block px-3 py-1 rounded-full text-sm text-blue-400 mb-4 font-medium">
                    맞춤형 개발
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 font-heading text-white leading-tight">
                    나에게 딱 맞는 솔루션을 찾지 못하셨나요?
                  </h2>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    AlgoForge는 고객의 요구에 맞춘 커스텀 솔루션을 개발합니다. 
                    귀하의 투자 전략과 목표를 알려주시면 최적의 시스템을 설계해 드립니다.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 flex-shrink-0">
                        <FaChartLine size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">전략 분석 및 최적화</h3>
                        <p className="text-white/70 text-sm">투자 아이디어를 알고리즘으로 변환하는 전문 컨설팅</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 flex-shrink-0">
                        <FaRobot size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">완전 자동화 시스템</h3>
                        <p className="text-white/70 text-sm">24시간 무중단 운영되는 고신뢰성 트레이딩 시스템</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-black/70 backdrop-blur-md rounded-xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold mb-4 text-white text-center">상담 신청</h3>
                    
                    <Link href="/contact">
                      <Button 
                        variant="accent" 
                        size="lg"
                        className="w-full shadow-xl shadow-blue-600/20 transform hover:scale-105 transition-all duration-300 font-bold bg-blue-600 text-white h-14 text-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          맞춤형 솔루션 문의하기
                          <FaArrowRight className="text-sm" />
                        </span>
                      </Button>
                    </Link>
                    
                    <div className="text-center mt-4">
                      <p className="text-white/60 text-sm">
                        영업일 기준 24시간 이내 답변
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
} 