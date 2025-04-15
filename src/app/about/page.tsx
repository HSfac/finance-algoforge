'use client';

import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Image from 'next/image';

// 아이콘 컴포넌트 직접 정의
const ChartLineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary text-2xl">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 7.09-4-4L2 16l1.5 2.5z"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-secondary text-2xl">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-accent text-2xl">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary text-2xl">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
  </svg>
);

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* 헤더 섹션 */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 to-primary/70 z-0"></div>
        
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }} />
        </div>
        
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            알고리즘으로 <span className="text-accent">미래</span>를 만드는 기업
          </h1>
          <p className="text-xl max-w-3xl opacity-90 leading-relaxed">
            정교한 알고리즘으로 정확한 수익을 창출하는 금융 기술 파트너, 알고포지
          </p>
        </div>
      </section>

      {/* 회사 비전 미션 */}
      <AnimatedSection className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem>
              <div className="bg-background p-8 rounded-xl shadow-xl text-center border-t-4 border-primary hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6 font-heading">비전</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "금융 시장의 복잡성을 알고리즘으로 해석하여 누구나 안정적인 수익을 창출할 수 있는 세상을 만든다"
                </p>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-background p-8 rounded-xl shadow-xl text-center border-t-4 border-secondary hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6 font-heading">미션</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "최첨단 기술로 개인과 기관 투자자의 트레이딩 전략을 구현하고 자동화하여 효율적인 자산 운용을 지원한다"
                </p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 창업자 이야기 */}
      <AnimatedSection className="section bg-background">
        <div className="container">
          <AnimatedItem>
            <h2 className="section-title text-center">창업자의 이야기</h2>
            <p className="section-subtitle text-center">
              알고리즘 매매로 인생이 바뀐 진솔한 경험
            </p>
          </AnimatedItem>

          <div className="mt-12">
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg bg-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary font-heading">박진솔</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold font-heading">박진솔</h3>
                    <p className="text-primary font-medium">공동창업자 & 트레이딩 디렉터</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-primary/5 p-6 rounded-xl relative mb-8">
                    <svg className="absolute -top-4 -left-4 text-primary opacity-20 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="relative z-10">
                      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        <span className="font-bold text-primary text-xl">"</span>
                        저는 10년 동안 전업 트레이더로 일하며 다양한 시장을 경험했습니다. 초반에는 제법 좋은 수익을 냈지만, 시간이 지날수록 감정과 편향에 흔들려 점점 더 큰 손실을 보게 되었습니다.
                      </p>
                      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        특히 2018년 암호화폐 시장 붕괴 당시에는 감정적 대응으로 인해 자산의 40%를 잃었고, 이때 깨달았습니다. <span className="font-bold text-primary">인간의 감정은 일관된 투자의 가장 큰 적</span>이라는 것을요.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        그 후 데이터 기반의 알고리즘 매매 시스템을 개발하기 시작했고, 6개월 만에 놀라운 변화를 경험했습니다. 감정이 아닌 데이터가 의사결정을 하니 수익은 안정적으로 쌓여갔고, MDD는 현저히 줄었습니다. 이 경험이 알고포지를 창업하게 된 계기입니다.
                        <span className="font-bold text-primary text-xl">"</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                      <p className="text-gray-500 text-sm">투자 경력</p>
                      <p className="text-3xl font-bold text-primary">10+<span className="text-sm">년</span></p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                      <p className="text-gray-500 text-sm">감정 매매 시기 MDD</p>
                      <p className="text-3xl font-bold text-red-500">42%</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                      <p className="text-gray-500 text-sm">알고리즘 매매 MDD</p>
                      <p className="text-3xl font-bold text-secondary">8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedItem delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-3 font-heading text-gray-800">뇌동매매의 함정</h3>
                  <p className="text-gray-600">
                    감정에 휘둘려 시장 바닥과 천장에서 잘못된 결정을 내립니다. 두려움과 탐욕이 번갈아 나타나며 자산을 갉아먹습니다.
                  </p>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold mb-3 font-heading text-gray-800">전환점</h3>
                  <p className="text-gray-600">
                    감정을 배제한 시스템이 필요하다는 깨달음. 데이터와 알고리즘이 인간의 편향을 극복할 수 있는 유일한 방법입니다.
                  </p>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-3 font-heading text-gray-800">알고리즘의 힘</h3>
                  <p className="text-gray-600">
                    24시간 감정 없이 작동하는 시스템. 일관된 규칙으로 매매하며 시장 변화에 객관적으로 대응합니다.
                  </p>
                </div>
              </AnimatedItem>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <AnimatedItem>
                <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 font-heading text-center">알고리즘 매매의 결과</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
                      <div className="w-full sm:w-1/2">
                        <div className="h-64 w-full relative bg-red-50 rounded-lg overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-20 bg-red-100 flex flex-col items-center justify-center">
                              <p className="text-sm text-red-700">감정 기반 매매</p>
                              <div className="w-full h-12 mt-2 px-4">
                                <svg viewBox="0 0 300 50" className="w-full h-full">
                                  <path d="M0,25 L20,20 L40,30 L60,15 L80,35 L100,25 L120,30 L140,10 L160,15 L180,5 L200,30 L220,20 L240,40 L260,25 L280,45 L300,20" fill="none" stroke="#EF4444" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-xl font-bold text-red-700">불안정한 수익 곡선</p>
                            <p className="text-sm text-red-600">높은 변동성, 큰 낙폭</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full sm:w-1/2">
                        <div className="h-64 w-full relative bg-green-50 rounded-lg overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-20 bg-green-100 flex flex-col items-center justify-center">
                              <p className="text-sm text-green-700">알고리즘 기반 매매</p>
                              <div className="w-full h-12 mt-2 px-4">
                                <svg viewBox="0 0 300 50" className="w-full h-full">
                                  <path d="M0,40 L20,38 L40,35 L60,33 L80,30 L100,28 L120,25 L140,22 L160,18 L180,16 L200,14 L220,12 L240,10 L260,8 L280,5 L300,3" fill="none" stroke="#10B981" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-xl font-bold text-green-700">안정적인 성장 곡선</p>
                            <p className="text-sm text-green-600">낮은 변동성, 꾸준한 상승</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-700 italic">
                        "알고리즘은 감정이 아닌 <span className="font-bold text-primary">데이터</span>로 결정하기 때문에 장기적으로 더 나은 결과를 만듭니다."
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 회사 연혁 */}
      <AnimatedSection className="section bg-background">
        <div className="container">
          <AnimatedItem>
            <h2 className="section-title text-center">회사 연혁</h2>
            <p className="section-subtitle text-center">
              혁신적인 금융 알고리즘으로 성장해온 알고포지의 발자취
            </p>
          </AnimatedItem>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* 연혁 라인 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
              
              {/* 연혁 아이템들 */}
              <AnimatedItem delay={0.1}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading">2020년</h3>
                    <p className="text-sm text-primary font-medium mb-2">1월</p>
                    <p className="text-gray-700">
                      알고포지 설립, 3명의 퀀트 트레이더와 개발자로 시작
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.2}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold font-heading">2020년</h3>
                    <p className="text-sm text-primary font-medium mb-2">6월</p>
                    <p className="text-gray-700">
                      첫 번째 김프 차익거래 알고리즘 출시 및 베타 서비스 시작
                    </p>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.3}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading">2021년</h3>
                    <p className="text-sm text-primary font-medium mb-2">3월</p>
                    <p className="text-gray-700">
                      첫 번째 유료 고객사 계약 체결 및 수익화 달성
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.4}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold font-heading">2022년</h3>
                    <p className="text-sm text-primary font-medium mb-2">2월</p>
                    <p className="text-gray-700">
                      엔터프라이즈급 자동매매 플랫폼 'AlgoForge Pro' 출시
                    </p>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.5}>
                <div className="relative z-10 flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading">2023년</h3>
                    <p className="text-sm text-primary font-medium mb-2">8월</p>
                    <p className="text-gray-700">
                      월간 유료 고객 100곳 돌파, 부트스트랩 방식으로 성장 지속
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 핵심 가치 */}
      <AnimatedSection className="section bg-white">
        <div className="container">
          <AnimatedItem>
            <h2 className="section-title text-center">핵심 가치</h2>
            <p className="section-subtitle text-center">
              알고포지가 추구하는 가치와 원칙
            </p>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedItem delay={0.1}>
              <div className="bg-background rounded-lg overflow-hidden shadow-card text-center p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ChartLineIcon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">데이터 기반 의사결정</h3>
                <p className="text-gray-600">
                  모든 결정은 철저한 데이터 분석과 검증을 기반으로 합니다.
                </p>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-background rounded-lg overflow-hidden shadow-card text-center p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <UsersIcon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">팀워크</h3>
                <p className="text-gray-600">
                  다양한 배경과 전문성을 가진 인재들이 협력하여 최고의 결과를 만듭니다.
                </p>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-background rounded-lg overflow-hidden shadow-card text-center p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">혁신</h3>
                <p className="text-gray-600">
                  끊임없는 연구와 실험을 통해 금융 시장의 새로운 기회를 발견합니다.
                </p>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.4}>
              <div className="bg-background rounded-lg overflow-hidden shadow-card text-center p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HandshakeIcon />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">고객 신뢰</h3>
                <p className="text-gray-600">
                  고객의 자산과 데이터를 최우선으로 보호하며 장기적인 관계를 구축합니다.
                </p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 팀 소개 */}
      <AnimatedSection className="section bg-background">
        <div className="container">
          <AnimatedItem>
            <h2 className="section-title text-center">경영진 소개</h2>
            <p className="section-subtitle text-center">
              전문성과 열정으로 알고포지를 이끄는 리더십
            </p>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedItem delay={0.1}>
              <div className="bg-white rounded-lg overflow-hidden shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-square relative bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                    프로필 이미지
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">김대표</h3>
                  <p className="text-primary font-medium mb-3">CEO & 공동창업자</p>
                  <p className="text-gray-600 text-sm mb-4">
                    전 골드만삭스 퀀트 애널리스트, 금융공학 박사
                  </p>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-white rounded-lg overflow-hidden shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-square relative bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                    프로필 이미지
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">이개발</h3>
                  <p className="text-primary font-medium mb-3">CTO & 공동창업자</p>
                  <p className="text-gray-600 text-sm mb-4">
                    전 네이버 AI 연구소 책임 연구원, 컴퓨터과학 박사
                  </p>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-white rounded-lg overflow-hidden shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-square relative bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                    프로필 이미지
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">박전략</h3>
                  <p className="text-primary font-medium mb-3">CSO</p>
                  <p className="text-gray-600 text-sm mb-4">
                    전 한국투자증권 퀀트팀장, 10년 트레이딩 경력
                  </p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 오시는 길 */}
      <AnimatedSection className="section bg-white">
        <div className="container">
          <AnimatedItem>
            <h2 className="section-title text-center">오시는 길</h2>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <AnimatedItem delay={0.1}>
              <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-500">
                지도 영역 (카카오맵 또는 구글맵 임베드)
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">주소</h3>
                  <p className="text-gray-700">서울특별시 강남구 테헤란로 123, 알고포지 빌딩 8층</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">연락처</h3>
                  <p className="text-gray-700">02-123-4567</p>
                  <p className="text-gray-700">contact@algoforge.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">대중교통 이용</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">지하철</span>: 2호선 강남역 3번 출구에서 도보 5분
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">버스</span>: 강남역 정류장 하차 (140, 144, 360번)
                  </p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage; 