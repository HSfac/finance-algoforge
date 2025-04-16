'use client';

import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <div className="flex flex-col">
      {/* 헤더 섹션 */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 to-primary/70 z-0"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">개인정보처리방침</h1>
          <p className="text-xl max-w-3xl opacity-90">
            알고포지는 고객님의 개인정보를 소중히 여기며 관련 법규를 준수합니다
          </p>
        </div>
      </section>

      {/* 개인정보처리방침 본문 */}
      <AnimatedSection className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedItem>
              <div className="mb-12">
                <div className="bg-background rounded-lg p-6 mb-8">
                  <p className="text-gray-700">
                    <span className="font-bold">최종 개정일</span>: 2024년 4월 15일
                  </p>
                </div>
                <p className="text-gray-700 mb-6">
                  주식회사 알고포지(이하 &apos;회사&apos;라 함)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 목차 */}
            <AnimatedItem delay={0.1}>
              <div className="bg-background p-6 rounded-lg mb-12">
                <h2 className="text-xl font-bold mb-4 font-heading">목차</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#section1" className="text-primary hover:underline">1. 개인정보의 처리 목적</a>
                  </li>
                  <li>
                    <a href="#section2" className="text-primary hover:underline">2. 개인정보의 처리 및 보유 기간</a>
                  </li>
                  <li>
                    <a href="#section3" className="text-primary hover:underline">3. 개인정보의 제3자 제공</a>
                  </li>
                  <li>
                    <a href="#section4" className="text-primary hover:underline">4. 개인정보처리 위탁</a>
                  </li>
                  <li>
                    <a href="#section5" className="text-primary hover:underline">5. 정보주체와 법정대리인의 권리·의무 및 행사방법</a>
                  </li>
                  <li>
                    <a href="#section6" className="text-primary hover:underline">6. 개인정보의 안전성 확보조치</a>
                  </li>
                  <li>
                    <a href="#section7" className="text-primary hover:underline">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</a>
                  </li>
                  <li>
                    <a href="#section8" className="text-primary hover:underline">8. 개인정보 보호책임자</a>
                  </li>
                  <li>
                    <a href="#section9" className="text-primary hover:underline">9. 개인정보 처리방침 변경</a>
                  </li>
                </ul>
              </div>
            </AnimatedItem>

            {/* 1. 개인정보의 처리 목적 */}
            <AnimatedItem delay={0.2}>
              <div id="section1" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">1. 개인정보의 처리 목적</h2>
                <p className="text-gray-700 mb-4">
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                
                <div className="pl-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">1) 서비스 제공</h3>
                  <p className="text-gray-700 mb-4">
                    금융 알고리즘 개발, 자동매매 시스템 구축, API 연동, 리스크 관리 툴 제공 등 서비스 제공과 관련한 목적으로 개인정보를 처리합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">2) 회원 가입 및 관리</h3>
                  <p className="text-gray-700 mb-4">
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 등을 목적으로 개인정보를 처리합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">3) 마케팅 및 광고에의 활용</h3>
                  <p className="text-gray-700 mb-4">
                    신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* 2. 개인정보의 처리 및 보유 기간 */}
            <AnimatedItem delay={0.3}>
              <div id="section2" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">2. 개인정보의 처리 및 보유 기간</h2>
                <p className="text-gray-700 mb-4">
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                
                <div className="pl-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">1) 서비스 이용 관련 정보</h3>
                  <p className="text-gray-700 mb-4">
                    - 보존 기간: 서비스 이용계약 종료 후 3개월<br />
                    - 보존 근거: 서비스 이용 정보 확인 및 민원 대응
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">2) 회원 정보</h3>
                  <p className="text-gray-700 mb-4">
                    - 보존 기간: 회원 탈퇴 후 3개월<br />
                    - 보존 근거: 불량 회원 재가입 방지, 민원 대응
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">3) 법령에 따른 보존 기간</h3>
                  <p className="text-gray-700 mb-4">
                    - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록: 5년 (전자상거래법)<br />
                    - 소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)<br />
                    - 표시/광고에 관한 기록: 6개월 (전자상거래법)<br />
                    - 로그인 기록: 3개월 (통신비밀보호법)
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* 3. 개인정보의 제3자 제공 */}
            <AnimatedItem delay={0.4}>
              <div id="section3" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">3. 개인정보의 제3자 제공</h2>
                <p className="text-gray-700 mb-4">
                  회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                </p>
                <p className="text-gray-700">
                  회사는 현재 정보주체의 개인정보를 제3자에게 제공하지 않습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 4. 개인정보처리 위탁 */}
            <AnimatedItem delay={0.5}>
              <div id="section4" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">4. 개인정보처리 위탁</h2>
                <p className="text-gray-700 mb-4">
                  회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">위탁받는 자(수탁자)</th>
                        <th className="px-4 py-2 border">위탁하는 업무의 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">AWS Inc.</td>
                        <td className="px-4 py-2 border">서비스 인프라 제공 및 운영</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">(주)이니시스</td>
                        <td className="px-4 py-2 border">결제 처리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">(주)메일침프</td>
                        <td className="px-4 py-2 border">이메일 마케팅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700 mb-4">
                  회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                </p>
                
                <p className="text-gray-700">
                  위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 나머지 섹션들... */}
            <AnimatedItem delay={0.6}>
              <div id="section5" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">5. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
                <p className="text-gray-700 mb-4">
                  정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="text-gray-700 mb-4">
                  권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="text-gray-700 mb-4">
                  권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 &quot;개인정보 처리 방법에 관한 고시(제2020-7호)&quot; 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>
                <p className="text-gray-700">
                  개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.
                </p>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.7}>
              <div id="section6" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">6. 개인정보의 안전성 확보조치</h2>
                <p className="text-gray-700 mb-4">
                  회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                </p>
                
                <div className="pl-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">1) 관리적 조치</h3>
                  <p className="text-gray-700 mb-4">
                    내부관리계획 수립·시행, 정기적 직원 교육 등
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">2) 기술적 조치</h3>
                  <p className="text-gray-700 mb-4">
                    개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">3) 물리적 조치</h3>
                  <p className="text-gray-700 mb-4">
                    전산실, 자료보관실 등의 접근통제
                  </p>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.8}>
              <div id="section7" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
                <p className="text-gray-700 mb-4">
                  회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.
                </p>
                
                <div className="pl-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">1) 쿠키의 사용 목적</h3>
                  <p className="text-gray-700 mb-4">
                    이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">2) 쿠키의 설치·운영 및 거부</h3>
                  <p className="text-gray-700 mb-4">
                    웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다. 다만, 쿠키 설치를 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
                  </p>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.9}>
              <div id="section8" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">8. 개인정보 보호책임자</h2>
                <p className="text-gray-700 mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                
                <div className="bg-background p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">▶ 개인정보 보호책임자</h3>
                  <p className="text-gray-700">
                    성명: 이개발<br />
                    직책: CTO<br />
                    연락처: 02-123-4567, privacy@algoforge.com
                  </p>
                </div>
                
                <p className="text-gray-700">
                  정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={1.0}>
              <div id="section9" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">9. 개인정보 처리방침 변경</h2>
                <p className="text-gray-700 mb-4">
                  이 개인정보처리방침은 2024년 4월 15일부터 적용됩니다.
                </p>
                <p className="text-gray-700">
                  이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 이전 버전 보기 */}
            <AnimatedItem delay={1.1}>
              <div className="flex flex-col items-center">
                <Link href="/privacy" className="text-primary hover:underline">
                  2023년 1월 1일 ~ 2024년 4월 14일 적용
                </Link>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PrivacyPage; 