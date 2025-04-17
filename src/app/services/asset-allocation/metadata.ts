import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '자산 배분 | AlgoForge',
  description: '최신 자산 배분 알고리즘으로 다양한 시장 환경에서 최적의 포트폴리오 구성을 도출합니다. 고객의 투자 목표와 위험 성향에 맞는 맞춤형 자산 배분 전략을 제공합니다.',
  keywords: ['자산 배분', '포트폴리오 구성', '투자 전략', '분산 투자', '전략적 자산 배분'],
  openGraph: {
    title: '자산 배분 | AlgoForge',
    description: '최신 자산 배분 알고리즘으로 다양한 시장 환경에서 최적의 포트폴리오 구성을 도출합니다.',
    url: 'https://algoforge.io/services/asset-allocation',
    images: [
      {
        url: '/images/asset-allocation-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '자산 배분 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '자산 배분 | AlgoForge',
    description: '최신 자산 배분 알고리즘으로 다양한 시장 환경에서 최적의 포트폴리오 구성을 도출합니다.',
    images: ['/images/asset-allocation-twitter-image.jpg'],
  },
}; 