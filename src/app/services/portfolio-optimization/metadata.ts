import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포트폴리오 최적화 | AlgoForge',
  description: '첨단 포트폴리오 최적화 알고리즘으로 수익률을 극대화하고 위험을 최소화하세요. 효율적 프론티어 분석과 다요소 최적화 모델을 활용한 맞춤형 솔루션을 제공합니다.',
  keywords: ['포트폴리오 최적화', '효율적 프론티어', '위험 조정 수익률', '마코위츠 모델', '다요소 최적화'],
  openGraph: {
    title: '포트폴리오 최적화 | AlgoForge',
    description: '첨단 포트폴리오 최적화 알고리즘으로 수익률을 극대화하고 위험을 최소화하세요.',
    url: 'https://algoforge.io/services/portfolio-optimization',
    images: [
      {
        url: '/images/portfolio-optimization-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '포트폴리오 최적화 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '포트폴리오 최적화 | AlgoForge',
    description: '첨단 포트폴리오 최적화 알고리즘으로 수익률을 극대화하고 위험을 최소화하세요.',
    images: ['/images/portfolio-optimization-twitter-image.jpg'],
  },
}; 