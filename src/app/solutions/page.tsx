'use client';

import { useState } from 'react';
import SolutionCard from '@/components/ui/SolutionCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

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
      <section className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">솔루션</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            AlgoForge가 개발한 다양한 금융 알고리즘 매매 솔루션을 살펴보세요. 
            각 솔루션은 철저한 백테스트와 실전 검증을 거쳐 안정적인 수익을 제공합니다.
          </p>
        </div>
      </section>
      
      {/* 필터 섹션 */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* 솔루션 카드 그리드 */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                title={solution.title}
                target={solution.target}
                duration={solution.duration}
                features={solution.features}
                returns={solution.returns}
                stack={solution.stack}
              />
            ))}
          </div>
          
          {filteredSolutions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                해당 카테고리의 솔루션이 없습니다.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* 맞춤형 솔루션 CTA */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            나에게 딱 맞는 솔루션을 찾지 못하셨나요?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            AlgoForge는 고객의 요구에 맞춘 커스텀 솔루션을 개발합니다. 
            귀하의 투자 전략과 목표를 알려주시면 최적의 시스템을 설계해 드립니다.
          </p>
          <Link href="/contact">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              맞춤형 솔루션 문의하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 