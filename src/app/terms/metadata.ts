import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용 약관 | AlgoForge',
  description: 'AlgoForge 서비스 이용 약관을 확인하세요. 당사의 서비스를 이용하기 위한 법적 조건과 사용자 책임에 대한 정보를 제공합니다.',
  keywords: ['이용 약관', '서비스 조건', '사용자 동의', '법적 정보', '서비스 이용 정책'],
  openGraph: {
    title: '이용 약관 | AlgoForge',
    description: 'AlgoForge 서비스 이용 약관을 확인하세요.',
    url: 'https://algoforge.io/terms',
    images: [
      {
        url: '/images/terms-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 이용 약관',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이용 약관 | AlgoForge',
    description: 'AlgoForge 서비스 이용 약관을 확인하세요.',
    images: ['/images/terms-twitter-image.jpg'],
  },
}; 