'use client';

import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="flex flex-col">
      {/* 헤더 섹션 */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 to-primary/70 z-0"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">이용약관</h1>
          <p className="text-xl max-w-3xl opacity-90">
            알고포지 서비스 이용에 관한 약관입니다
          </p>
        </div>
      </section>

      {/* 이용약관 본문 */}
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
                  주식회사 알고포지(이하 &apos;회사&apos;라 함)가 제공하는 서비스를 이용해 주셔서 감사합니다. 본 약관은 회사가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정합니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 목차 */}
            <AnimatedItem delay={0.1}>
              <div className="bg-background p-6 rounded-lg mb-12">
                <h2 className="text-xl font-bold mb-4 font-heading">목차</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#section1" className="text-primary hover:underline">제1조 (목적)</a>
                  </li>
                  <li>
                    <a href="#section2" className="text-primary hover:underline">제2조 (용어의 정의)</a>
                  </li>
                  <li>
                    <a href="#section3" className="text-primary hover:underline">제3조 (약관의 효력 및 변경)</a>
                  </li>
                  <li>
                    <a href="#section4" className="text-primary hover:underline">제4조 (서비스의 제공 및 변경)</a>
                  </li>
                  <li>
                    <a href="#section5" className="text-primary hover:underline">제5조 (서비스 이용계약의 성립)</a>
                  </li>
                  <li>
                    <a href="#section6" className="text-primary hover:underline">제6조 (회원정보의 변경)</a>
                  </li>
                  <li>
                    <a href="#section7" className="text-primary hover:underline">제7조 (개인정보보호 의무)</a>
                  </li>
                  <li>
                    <a href="#section8" className="text-primary hover:underline">제8조 (회사와 회원의 의무)</a>
                  </li>
                  <li>
                    <a href="#section9" className="text-primary hover:underline">제9조 (저작권의 귀속 및 이용제한)</a>
                  </li>
                  <li>
                    <a href="#section10" className="text-primary hover:underline">제10조 (분쟁해결)</a>
                  </li>
                </ul>
              </div>
            </AnimatedItem>

            {/* 제1조 (목적) */}
            <AnimatedItem delay={0.2}>
              <div id="section1" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제1조 (목적)</h2>
                <p className="text-gray-700">
                  이 약관은 회사가 제공하는 금융 알고리즘 개발, 자동매매 시스템 구축, API 연동, 리스크 관리 툴 등의 서비스(이하 '서비스'라 함)의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제2조 (용어의 정의) */}
            <AnimatedItem delay={0.3}>
              <div id="section2" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제2조 (용어의 정의)</h2>
                <p className="text-gray-700 mb-4">
                  이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                </p>
                
                <div className="pl-4">
                  <h3 className="text-lg font-bold mb-2 font-heading">1. &apos;서비스&apos;</h3>
                  <p className="text-gray-700 mb-4">
                    이용자가 회사의 웹사이트 또는 애플리케이션을 통해 이용할 수 있는 금융 알고리즘 개발, 자동매매 시스템, API 연동, 리스크 관리 툴 등 회사가 제공하는 모든 서비스를 말합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">2. &apos;회원&apos;</h3>
                  <p className="text-gray-700 mb-4">
                    회사와 서비스 이용계약을 체결하고 회원 아이디(ID)를 부여받아 서비스를 이용하는 자를 말합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">3. &apos;아이디(ID)&apos;</h3>
                  <p className="text-gray-700 mb-4">
                    회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">4. &apos;비밀번호&apos;</h3>
                  <p className="text-gray-700 mb-4">
                    회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 설정한 문자 또는 숫자의 조합을 말합니다.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2 font-heading">5. &apos;게시물&apos;</h3>
                  <p className="text-gray-700">
                    회원이 서비스를 이용하면서 게시한 글, 사진, 동영상, 파일, 링크, 댓글 등의 정보를 말합니다.
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* 제3조 (약관의 효력 및 변경) */}
            <AnimatedItem delay={0.4}>
              <div id="section3" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제3조 (약관의 효력 및 변경)</h2>
                <p className="text-gray-700 mb-4">
                  1. 회사는 이 약관의 내용을 회원이 알 수 있도록 서비스 초기화면에 게시하거나 기타의 방법으로 공지합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  2. 회사는 &quot;약관의 규제에 관한 법률&quot;, &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot; 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                </p>
                <p className="text-gray-700 mb-4">
                  3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리한 약관의 개정의 경우에는 적용일자 30일 이전부터 공지합니다.
                </p>
                <p className="text-gray-700">
                  4. 회원은 개정된 약관에 동의하지 않을 경우 회원 탈퇴(해지)를 요청할 수 있으며, 개정된 약관의 효력 발생일로부터 7일 이후에도 거부의사를 표시하지 않고 서비스를 계속 이용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제4조 (서비스의 제공 및 변경) */}
            <AnimatedItem delay={0.5}>
              <div id="section4" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제4조 (서비스의 제공 및 변경)</h2>
                <p className="text-gray-700 mb-4">
                  1. 회사는 다음과 같은 서비스를 제공합니다.
                </p>
                
                <div className="pl-4 mb-4">
                  <p className="text-gray-700">
                    ① 금융 알고리즘 및 퀀트 전략 개발 서비스<br />
                    ② 자동매매 시스템 구축 서비스<br />
                    ③ 거래소 API 연동 서비스<br />
                    ④ 리스크 관리 툴 제공 서비스<br />
                    ⑤ 기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스
                  </p>
                </div>
                
                <p className="text-gray-700 mb-4">
                  2. 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용가능시간, 이용 가능한 회원 등을 설정할 수 있습니다. 이 경우 그 내용을 사전에 공지합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  3. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 회사는 사전에 통지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
                </p>
                <p className="text-gray-700">
                  4. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제5조 (서비스 이용계약의 성립) */}
            <AnimatedItem delay={0.6}>
              <div id="section5" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제5조 (서비스 이용계약의 성립)</h2>
                <p className="text-gray-700 mb-4">
                  1. 서비스 이용계약은 회원이 되고자 하는 자(이하 '가입신청자')가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                </p>
                <p className="text-gray-700 mb-4">
                  2. 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
                </p>
                
                <div className="pl-4 mb-4">
                  <p className="text-gray-700">
                    ① 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우<br />
                    ② 실명이 아니거나 타인의 명의를 이용한 경우<br />
                    ③ 허위의 정보를 기재하거나, 회사가 요구하는 정보를 제공하지 않은 경우<br />
                    ④ 가입신청자가 만 14세 미만인 경우<br />
                    ⑤ 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우
                  </p>
                </div>
                
                <p className="text-gray-700">
                  3. 서비스 이용계약의 성립 시기는 회사가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제6조 (회원정보의 변경) */}
            <AnimatedItem delay={0.7}>
              <div id="section6" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제6조 (회원정보의 변경)</h2>
                <p className="text-gray-700">
                  1. 회원은 개인정보 관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 아이디, 실명 등은 수정이 제한될 수 있습니다.<br />
                  2. 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 또는 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.<br />
                  3. 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임을 지지 않습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제7조 (개인정보보호 의무) */}
            <AnimatedItem delay={0.8}>
              <div id="section7" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제7조 (개인정보보호 의무)</h2>
                <p className="text-gray-700">
                  회사는 "정보통신망 이용촉진 및 정보보호 등에 관한 법률", "개인정보 보호법" 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제8조 (회사와 회원의 의무) */}
            <AnimatedItem delay={0.9}>
              <div id="section8" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제8조 (회사와 회원의 의무)</h2>
                <p className="text-gray-700 mb-4">
                  1. 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는데 최선을 다하여야 합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 회원의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  3. 회원은 다음 행위를 하여서는 안 됩니다.
                </p>
                
                <div className="pl-4 mb-4">
                  <p className="text-gray-700">
                    ① 신청 또는 변경시 허위 내용의 등록<br />
                    ② 타인의 정보 도용<br />
                    ③ 회사가 게시한 정보의 변경<br />
                    ④ 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시<br />
                    ⑤ 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해<br />
                    ⑥ 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위<br />
                    ⑦ 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위<br />
                    ⑧ 회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위<br />
                    ⑨ 기타 불법적이거나 부당한 행위
                  </p>
                </div>
                
                <p className="text-gray-700">
                  4. 회원은 관계법, 이 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제9조 (저작권의 귀속 및 이용제한) */}
            <AnimatedItem delay={1.0}>
              <div id="section9" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제9조 (저작권의 귀속 및 이용제한)</h2>
                <p className="text-gray-700 mb-4">
                  1. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  2. 회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
                </p>
                <p className="text-gray-700 mb-4">
                  3. 회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다. 회원이 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 회원은 언제든지 고객센터 또는 서비스 내 관리기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 제10조 (분쟁해결) */}
            <AnimatedItem delay={1.1}>
              <div id="section10" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">제10조 (분쟁해결)</h2>
                <p className="text-gray-700 mb-4">
                  1. 회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 고객센터를 설치·운영합니다.
                </p>
                <p className="text-gray-700 mb-4">
                  2. 회사는 회원으로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 통보해 드립니다.
                </p>
                <p className="text-gray-700 mb-4">
                  3. 회사와 회원 간에 발생한 전자상거래 분쟁과 관련하여 회원의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
                </p>
                <p className="text-gray-700">
                  4. 이 약관에 명시되지 않은 사항은 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관련법령의 규정을 준용합니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 부칙 */}
            <AnimatedItem delay={1.2}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">부칙</h2>
                <p className="text-gray-700 mb-4">
                  1. 이 약관은 2024년 4월 15일부터 적용됩니다.
                </p>
                <p className="text-gray-700">
                  2. 이 약관 시행 전에 가입한 회원도 이 약관의 적용을 받습니다.
                </p>
              </div>
            </AnimatedItem>

            {/* 이전 버전 보기 */}
            <AnimatedItem delay={1.3}>
              <div className="flex flex-col items-center">
                <Link href="/terms" className="text-primary hover:underline">
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

export default TermsPage; 