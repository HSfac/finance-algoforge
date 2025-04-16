'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function CookiePolicyPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      {/* 헤더 섹션 */}
      <section className="w-full py-20 bg-gradient-to-b from-blue-900/30 to-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
              쿠키 정책
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              알고포지 웹사이트에서 사용되는 쿠키에 관한 정보 및 개인정보 보호 방침
            </p>
          </div>
        </div>

        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
              }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 쿠키 정책 내용 */}
      <section className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">쿠키란 무엇인가요?</h2>
              <p className="text-slate-300 mb-6">
                쿠키는 사용자가 웹사이트를 방문할 때 사용자의 컴퓨터나 모바일 장치에 저장되는 작은 텍스트 파일입니다. 
                이 파일들은 웹사이트가 사용자의 행동이나 선호도를 기억하고, 보다 효율적이고 맞춤화된 서비스를 제공하는 데 도움을 줍니다.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-blue-400">알고포지에서 사용하는 쿠키 유형</h2>
              <p className="text-slate-300 mb-6">
                알고포지 웹사이트는 다음과 같은 유형의 쿠키를 사용합니다:
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-8 text-white">필수 쿠키</h3>
              <p className="text-slate-300 mb-6">
                이 쿠키는 웹사이트의 기본적인 기능을 제공하기 위해 필요합니다. 이러한 쿠키가 없으면 웹사이트가 제대로 작동하지 않을 수 있습니다. 
                여기에는 로그인 세션 유지, 보안 인증, 웹사이트 기능 활성화 등이 포함됩니다.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-8 text-white">분석 쿠키</h3>
              <p className="text-slate-300 mb-6">
                이 쿠키는 사용자가 웹사이트를 어떻게 이용하는지에 대한 정보를 수집합니다. 예를 들어, 어떤 페이지를 가장 자주 방문하는지, 
                어떤 오류 메시지가 표시되는지 등의 정보를 수집하여 웹사이트의 성능을 개선하는 데 사용됩니다. 
                이러한 쿠키는 개인을 직접 식별하지 않습니다.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-8 text-white">기능 쿠키</h3>
              <p className="text-slate-300 mb-6">
                이 쿠키는 사용자의 선호도(예: 언어 설정)를 기억하여 더 개인화된 환경을 제공합니다. 
                이러한 쿠키를 통해 사용자가 웹사이트를 더 편리하게 이용할 수 있습니다.
              </p>

              <h3 className="text-2xl font-bold mb-3 mt-8 text-white">마케팅 쿠키</h3>
              <p className="text-slate-300 mb-6">
                이 쿠키는 사용자의 관심사에 기반한 광고를 제공하기 위해 사용됩니다. 마케팅 쿠키는 사용자가 방문한 웹사이트를 추적하고, 
                사용자의 관심 분야에 맞는 맞춤형 광고를 제공하는 데 도움을 줍니다.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-blue-400">쿠키 관리 방법</h2>
              <p className="text-slate-300 mb-6">
                대부분의 웹 브라우저는 쿠키 사용을 제어할 수 있는 기능을 제공합니다. 브라우저 설정을 통해 쿠키를 차단하거나 삭제할 수 있습니다. 
                쿠키를 차단하면 일부 웹사이트 기능이 제대로 작동하지 않을 수 있습니다.
              </p>
              <p className="text-slate-300 mb-6">
                다음은 주요 브라우저에서 쿠키를 관리하는 방법에 대한 링크입니다:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 pl-4">
                <li className="mb-2">
                  <a href="https://support.google.com/chrome/answer/95647?hl=ko" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Chrome
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.mozilla.org/ko/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Firefox
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.microsoft.com/ko-kr/microsoft-edge/microsoft-edge%EC%97%90%EC%84%9C-%EC%BF%A0%ED%82%A4-%EC%82%AD%EC%A0%9C-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Edge
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.apple.com/ko-kr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Safari
                  </a>
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-blue-400">개인정보 보호</h2>
              <p className="text-slate-300 mb-6">
                알고포지는 사용자의 개인정보 보호를 중요하게 생각합니다. 쿠키를 통해 수집된 정보는 당사의 개인정보 처리방침에 따라 처리됩니다. 
                자세한 내용은 <Link href="/privacy" className="text-blue-400 hover:text-blue-300">개인정보 처리방침</Link>을 참조하시기 바랍니다.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-blue-400">쿠키 정책 변경</h2>
              <p className="text-slate-300 mb-6">
                알고포지는 필요에 따라 본 쿠키 정책을 업데이트할 수 있습니다. 변경 사항이 있을 경우, 웹사이트를 통해 공지하며, 
                중요한 변경사항에 대해서는 별도의 공지를 할 수 있습니다. 정기적으로 본 페이지를 확인하여 최신 정보를 확인하시기 바랍니다.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-blue-400">문의하기</h2>
              <p className="text-slate-300 mb-6">
                쿠키 사용에 관한 질문이나 의견이 있으시면 다음 연락처로 문의하시기 바랍니다:
              </p>
              <p className="text-slate-300 mb-10">
                이메일: <a href="mailto:privacy@algoforge.ai" className="text-blue-400 hover:text-blue-300">privacy@algoforge.ai</a><br />
                전화: 02-123-4567
              </p>

              <div className="border-t border-slate-800 pt-10">
                <p className="text-slate-400 italic mb-4">최종 업데이트: 2023년 9월 15일</p>
                <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  추가 질문이 있으신가요? 문의하기 <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 