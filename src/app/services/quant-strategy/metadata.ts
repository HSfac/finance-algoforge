import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '퀀트 전략 | AlgoForge',
  description: '데이터 기반 퀀트 전략으로 시장 분석과 투자 의사 결정을 최적화하세요. 알고리즘 트레이딩 시스템 및 백테스팅 툴을 제공합니다.',
  keywords: ['퀀트 전략', '알고리즘 트레이딩', '시장 분석', '백테스팅', '데이터 기반 투자'],
  openGraph: {
    title: '퀀트 전략 | AlgoForge',
    description: '데이터 기반 퀀트 전략으로 시장 분석과 투자 의사 결정을 최적화하세요.',
    url: 'https://algoforge.io/services/quant-strategy',
    images: [
      {
        url: '/images/quant-strategy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '퀀트 전략 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '퀀트 전략 | AlgoForge',
    description: '데이터 기반 퀀트 전략으로 시장 분석과 투자 의사 결정을 최적화하세요.',
    images: ['/images/quant-strategy-twitter-image.jpg'],
  },
}; 