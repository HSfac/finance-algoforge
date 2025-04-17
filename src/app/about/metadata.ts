import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사 소개 | AlgoForge',
  description: 'AlgoForge는 혁신적인 금융 알고리즘 솔루션을 제공하는 선도적인 기업입니다. 우리 팀과 비전에 대해 알아보세요.',
  keywords: ['AlgoForge 소개', '금융 기술 회사', '핀테크', '회사 연혁', '비전 및 미션'],
  openGraph: {
    title: '회사 소개 | AlgoForge',
    description: 'AlgoForge는 혁신적인 금융 알고리즘 솔루션을 제공하는 선도적인 기업입니다. 우리 팀과 비전에 대해 알아보세요.',
    url: 'https://algoforge.io/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 소개',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '회사 소개 | AlgoForge',
    description: 'AlgoForge는 혁신적인 금융 알고리즘 솔루션을 제공하는 선도적인 기업입니다. 우리 팀과 비전에 대해 알아보세요.',
    images: ['/images/about-twitter-image.jpg'],
  },
}; 