import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 | AlgoForge',
  description: 'AlgoForge에 문의하세요. 금융 알고리즘 솔루션에 관한 질문이나 협업 제안을 환영합니다.',
  keywords: ['AlgoForge 문의', '고객 지원', '연락처', '금융 솔루션 상담', '협업 제안'],
  openGraph: {
    title: '문의하기 | AlgoForge',
    description: 'AlgoForge에 문의하세요. 금융 알고리즘 솔루션에 관한 질문이나 협업 제안을 환영합니다.',
    url: 'https://algoforge.io/contact',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 문의하기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '문의하기 | AlgoForge',
    description: 'AlgoForge에 문의하세요. 금융 알고리즘 솔루션에 관한 질문이나 협업 제안을 환영합니다.',
    images: ['/images/contact-twitter-image.jpg'],
  },
}; 