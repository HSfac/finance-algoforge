import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '채용 정보 | AlgoForge',
  description: 'AlgoForge와 함께 금융 기술의 미래를 만들어갈 인재를 찾습니다. 현재 채용 중인 포지션과 우리 회사의 문화를 알아보세요.',
  keywords: ['채용 정보', '경력 기회', '금융 기술 직업', '핀테크 채용', '퀀트 개발자', '직무 포지션'],
  openGraph: {
    title: '채용 정보 | AlgoForge',
    description: 'AlgoForge와 함께 금융 기술의 미래를 만들어갈 인재를 찾습니다.',
    url: 'https://algoforge.io/careers',
    images: [
      {
        url: '/images/careers-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlgoForge 채용',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '채용 정보 | AlgoForge',
    description: 'AlgoForge와 함께 금융 기술의 미래를 만들어갈 인재를 찾습니다.',
    images: ['/images/careers-twitter-image.jpg'],
  },
}; 