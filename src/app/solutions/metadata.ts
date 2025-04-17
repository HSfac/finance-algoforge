import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '솔루션 | AlgoForge',
  description: 'AlgoForge가 제공하는 혁신적인 금융 알고리즘 솔루션을 살펴보세요. 기관 투자자, 자산 관리사, 헤지 펀드를 위한 맞춤형 솔루션을 제공합니다.',
  keywords: ['금융 솔루션', '기관 투자자', '자산 관리', '헤지 펀드', '알고리즘 솔루션', '금융 기술'],
  openGraph: {
    title: '솔루션 | AlgoForge',
    description: 'AlgoForge가 제공하는 혁신적인 금융 알고리즘 솔루션을 살펴보세요.',
    url: 'https://algoforge.io/solutions',
    images: [
      {
        url: '/images/solutions-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '솔루션 | AlgoForge',
    description: 'AlgoForge가 제공하는 혁신적인 금융 알고리즘 솔루션을 살펴보세요.',
    images: ['/images/solutions-twitter-image.jpg'],
  },
}; 