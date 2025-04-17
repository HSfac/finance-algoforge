import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '리스크 관리 | AlgoForge',
  description: '고급 리스크 관리 솔루션으로 투자 위험을 분석하고 제어하세요. VaR, 스트레스 테스트, 시나리오 분석 등 다양한 리스크 모델링 도구를 제공합니다.',
  keywords: ['리스크 관리', '위험 분석', 'VaR', '스트레스 테스트', '시나리오 분석', '위험 모델링'],
  openGraph: {
    title: '리스크 관리 | AlgoForge',
    description: '고급 리스크 관리 솔루션으로 투자 위험을 분석하고 제어하세요.',
    url: 'https://algoforge.io/services/risk-management',
    images: [
      {
        url: '/images/risk-management-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '리스크 관리 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '리스크 관리 | AlgoForge',
    description: '고급 리스크 관리 솔루션으로 투자 위험을 분석하고 제어하세요.',
    images: ['/images/risk-management-twitter-image.jpg'],
  },
}; 