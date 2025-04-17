import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보 처리방침 | AlgoForge',
  description: 'AlgoForge의 개인정보 처리방침을 확인하세요. 당사의 개인정보 수집, 사용, 보호 정책에 대한 중요한 정보를 제공합니다.',
  keywords: ['개인정보 처리방침', '개인정보 보호', '데이터 보안', '정보 수집', '개인정보 정책'],
  openGraph: {
    title: '개인정보 처리방침 | AlgoForge',
    description: 'AlgoForge의 개인정보 처리방침을 확인하세요.',
    url: 'https://algoforge.io/privacy',
    images: [
      {
        url: '/images/privacy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 개인정보 처리방침',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '개인정보 처리방침 | AlgoForge',
    description: 'AlgoForge의 개인정보 처리방침을 확인하세요.',
    images: ['/images/privacy-twitter-image.jpg'],
  },
}; 