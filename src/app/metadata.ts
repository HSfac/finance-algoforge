import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AlgoForge | 고급 금융 알고리즘 솔루션',
  description: '트레이딩 알고리즘, 포트폴리오 최적화, 리스크 관리를 위한 혁신적인 금융 솔루션을 제공합니다.',
  keywords: ['금융 알고리즘', '트레이딩', '포트폴리오 최적화', '리스크 관리', '퀀트 트레이딩'],
  authors: [{ name: 'AlgoForge Team' }],
  openGraph: {
    title: 'AlgoForge | 고급 금융 알고리즘 솔루션',
    description: '트레이딩 알고리즘, 포트폴리오 최적화, 리스크 관리를 위한 혁신적인 금융 솔루션을 제공합니다.',
    url: 'https://algoforge.io',
    siteName: 'AlgoForge',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlgoForge | 고급 금융 알고리즘 솔루션',
    description: '트레이딩 알고리즘, 포트폴리오 최적화, 리스크 관리를 위한 혁신적인 금융 솔루션을 제공합니다.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://algoforge.io'),
}; 