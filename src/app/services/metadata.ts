import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 | AlgoForge',
  description: 'AlgoForge에서 제공하는 다양한 금융 알고리즘 솔루션과 서비스를 살펴보세요. 퀀트 전략, 자산 배분, 리스크 관리, 포트폴리오 최적화 등 다양한 서비스를 제공합니다.',
  keywords: ['금융 서비스', '퀀트 전략', '자산 배분', '리스크 관리', '포트폴리오 최적화', '금융 알고리즘'],
  openGraph: {
    title: '서비스 | AlgoForge',
    description: 'AlgoForge에서 제공하는 다양한 금융 알고리즘 솔루션과 서비스를 살펴보세요.',
    url: 'https://algoforge.io/services',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '서비스 | AlgoForge',
    description: 'AlgoForge에서 제공하는 다양한 금융 알고리즘 솔루션과 서비스를 살펴보세요.',
    images: ['/images/services-twitter-image.jpg'],
  },
}; 