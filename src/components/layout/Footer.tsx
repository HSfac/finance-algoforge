import Link from 'next/link';

// 단순한 SVG 아이콘 컴포넌트
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <TwitterIcon />, url: "https://twitter.com", hoverColor: '#1DA1F2' },
    { icon: <GithubIcon />, url: "https://github.com", hoverColor: '#6e5494' },
    { icon: <LinkedinIcon />, url: "https://linkedin.com", hoverColor: '#0077B5' }
  ];
  
  const serviceLinks = [
    { name: '포트폴리오 최적화', path: '/solutions?filter=portfolio' },
    { name: '위험 관리', path: '/solutions?filter=risk' },
    { name: '자산 배분', path: '/solutions?filter=allocation' },
    { name: '퀀트 전략', path: '/solutions?filter=quant' }
  ];
  
  const companyLinks = [
    { name: '회사소개', path: '/about' },
    { name: '팀', path: '/about#team' },
    { name: '블로그', path: '/blog' },
    { name: '채용', path: '/careers' }
  ];
  
  const legalLinks = [
    { name: '이용약관', path: '/terms' },
    { name: '개인정보 정책', path: '/privacy' },
    { name: '쿠키 정책', path: '/cookies' }
  ];
  
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="space-y-4 md:col-span-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-1">◀︎</span> 알고포지
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              금융 전문가들을 위한 혁신적인 알고리즘 솔루션 제공. 
              데이터 기반 분석부터 자동화 시스템까지 맞춤형 서비스를 경험하세요.
            </p>
            <div className="flex space-x-5 pt-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white/90">서비스</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="text-gray-400 hover:text-white text-sm flex items-center transition-colors">
                    <span className="mr-1">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white/90">회사</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="text-gray-400 hover:text-white text-sm flex items-center transition-colors">
                    <span className="mr-1">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white/90">법적 정보</h3>
            <ul className="space-y-3">
              {legalLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="text-gray-400 hover:text-white text-sm flex items-center transition-colors">
                    <span className="mr-1">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white/90">문의하기</h3>
            <p className="text-gray-400 text-sm">
              서울특별시 강남구 테헤란로 123<br />
              알고포지 타워 15층
            </p>
            <p className="text-gray-400 text-sm">
              이메일: contact@algoforge.kr<br />
              전화: 02-1234-5678
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} 알고포지. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 