import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '쿠키 정책 | AlgoForge',
  description: 'AlgoForge의 쿠키 정책을 확인하세요. 당사 웹사이트에서 쿠키를 어떻게 사용하는지와 관련된 정보를 제공합니다.',
  keywords: ['쿠키 정책', '쿠키 사용', '웹사이트 쿠키', '개인정보', '사용자 추적'],
  openGraph: {
    title: '쿠키 정책 | AlgoForge',
    description: 'AlgoForge의 쿠키 정책을 확인하세요.',
    url: 'https://algoforge.io/services/cookie-policy',
    images: [
      {
        url: '/images/cookie-policy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 쿠키 정책',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '쿠키 정책 | AlgoForge',
    description: 'AlgoForge의 쿠키 정책을 확인하세요.',
    images: ['/images/cookie-policy-twitter-image.jpg'],
  },
}; 