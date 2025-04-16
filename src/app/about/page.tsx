'use client';

import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { FaChartLine, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa6';

// 아이콘 컴포넌트 직접 정의
const ChartLineIcon = () => (
  <FaChartLine className="h-8 w-8" />
);

const UsersIcon = () => (
  <FaUsers className="h-8 w-8" />
);

const LightbulbIcon = () => (
  <FaLightbulb className="h-8 w-8" />
);

const HandshakeIcon = () => (
  <FaHandshake className="h-8 w-8" />
);

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* 페이지 헤더 */}
      <section className="relative bg-gradient-to-b from-black via-blue-800/80 to-black text-white py-20 md:py-28 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        
        {/* 데이터 라인 효과 */}
        <div className="absolute top-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute left-1/4 h-full w-px opacity-20">
          <div className="data-line h-full w-full"></div>
        </div>
        <div className="absolute right-1/4 h-full w-px opacity-20">
          <div className="data-line h-full w-full"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-500/40 mb-6 shadow-lg text-sm">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="font-medium text-white">알고포지의 철학과 이야기</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg leading-tight">
              데이터와 <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">알고리즘</span>으로<br />
              <span className="text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">금융의 미래</span>를 열어갑니다
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] mb-8">
              알고포지는 데이터 기반 알고리즘 매매로 안정적인 수익을 추구하는 핀테크 기업입니다.
              감정을 배제한 100% 데이터 기반의 투자 철학으로 미래 금융 시장을 선도합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 회사 비전 및 미션 */}
      <AnimatedSection className="section bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem>
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-blue-500/20 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-blue-500/20 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <FaChartLine className="h-8 w-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 font-heading text-center text-white">비전</h2>
                    <p className="text-lg text-white/80 leading-relaxed text-center">
                      "금융 시장의 복잡성을 알고리즘으로 해석하여 누구나 안정적인 수익을 창출할 수 있는 세상을 만든다"
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className="h-full w-2/3 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-blue-400/20 p-0.5 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-blue-400/20 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-400/10 flex items-center justify-center mx-auto mb-4">
                      <FaLightbulb className="h-8 w-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 font-heading text-center text-white">미션</h2>
                    <p className="text-lg text-white/80 leading-relaxed text-center">
                      "최첨단 기술로 개인과 기관 투자자의 트레이딩 전략을 구현하고 자동화하여 효율적인 자산 운용을 지원한다"
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className="h-full w-2/3 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 창업자 이야기 */}
      <AnimatedSection className="section bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
          <div className="data-line absolute top-1/3 left-0 right-0 h-px"></div>
          <div className="data-line absolute bottom-1/3 left-0 right-0 h-px"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  창업자의 이야기
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-white">
                알고리즘 매매로 <span className="text-blue-400">인생</span>이 바뀐 경험
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                데이터 기반 접근방식이 트레이딩 성과를 어떻게 혁신적으로 바꾸는지 직접 경험한 이야기
              </p>
            </div>
          </AnimatedItem>

          <div className="mt-12">
            <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="md:w-1/3">
                    <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg bg-blue-500/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <span className="text-5xl font-bold text-blue-400 font-heading">박진솔</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold font-heading text-white">박진솔</h3>
                      <p className="text-blue-400 font-medium">공동창업자 & 트레이딩 디렉터</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-black/50 p-6 rounded-xl relative mb-8 border border-white/10">
                      <svg className="absolute -top-4 -left-4 text-blue-400 opacity-20 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div className="relative z-10">
                        <p className="text-white/80 text-lg mb-4 leading-relaxed">
                          <span className="font-bold text-blue-400 text-xl">"</span>
                          저는 10년 동안 전업 트레이더로 일하며 다양한 시장을 경험했습니다. 초반에는 제법 좋은 수익을 냈지만, 시간이 지날수록 감정과 편향에 흔들려 점점 더 큰 손실을 보게 되었습니다.
                        </p>
                        <p className="text-white/80 text-lg mb-4 leading-relaxed">
                          특히 2018년 암호화폐 시장 붕괴 당시에는 감정적 대응으로 인해 자산의 40%를 잃었고, 이때 깨달았습니다. <span className="font-bold text-blue-400">인간의 감정은 일관된 투자의 가장 큰 적</span>이라는 것을요.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed">
                          그 후 데이터 기반의 알고리즘 매매 시스템을 개발하기 시작했고, 6개월 만에 놀라운 변화를 경험했습니다. 감정이 아닌 데이터가 의사결정을 하니 수익은 안정적으로 쌓여갔고, MDD는 현저히 줄었습니다. 이 경험이 알고포지를 창업하게 된 계기입니다.
                          <span className="font-bold text-blue-400 text-xl">"</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-black/50 border border-white/10 rounded-lg p-4 text-center shadow-lg">
                        <p className="text-white/60 text-sm">투자 경력</p>
                        <p className="text-3xl font-bold text-blue-400">10+<span className="text-sm">년</span></p>
                      </div>
                      <div className="bg-black/50 border border-white/10 rounded-lg p-4 text-center shadow-lg">
                        <p className="text-white/60 text-sm">감정 매매 시기 MDD</p>
                        <p className="text-3xl font-bold text-red-500">42%</p>
                      </div>
                      <div className="bg-black/50 border border-white/10 rounded-lg p-4 text-center shadow-lg">
                        <p className="text-white/60 text-sm">알고리즘 매매 MDD</p>
                        <p className="text-3xl font-bold text-blue-400">8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedItem delay={0.1}>
                <div className="bg-black/50 backdrop-blur-md p-0.5 rounded-xl border border-red-500/20 overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 font-heading text-white">뇌동매매의 함정</h3>
                      <p className="text-white/70">
                        감정에 휘둘려 시장 바닥과 천장에서 잘못된 결정을 내립니다. 두려움과 탐욕이 번갈아 나타나며 자산을 갉아먹습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.2}>
                <div className="bg-black/50 backdrop-blur-md p-0.5 rounded-xl border border-yellow-500/20 overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 font-heading text-white">전환점</h3>
                      <p className="text-white/70">
                        감정을 배제한 시스템이 필요하다는 깨달음. 데이터와 알고리즘이 인간의 편향을 극복할 수 있는 유일한 방법입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.3}>
                <div className="bg-black/50 backdrop-blur-md p-0.5 rounded-xl border border-green-500/20 overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 font-heading text-white">알고리즘의 힘</h3>
                      <p className="text-white/70">
                        24시간 감정 없이 작동하는 시스템. 일관된 규칙으로 매매하며 시장 변화에 객관적으로 대응합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <AnimatedItem>
                <div className="bg-black/50 backdrop-blur-lg p-6 rounded-xl overflow-hidden relative border border-white/10 shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 font-heading text-center text-white">알고리즘 매매의 결과</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
                      <div className="w-full sm:w-1/2">
                        <div className="h-64 w-full relative bg-black/40 rounded-lg overflow-hidden border border-red-500/20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-20 bg-red-500/10 flex flex-col items-center justify-center">
                              <p className="text-sm text-red-400">감정 기반 매매</p>
                              <div className="w-full h-12 mt-2 px-4">
                                <svg viewBox="0 0 300 50" className="w-full h-full">
                                  <path d="M0,25 L20,20 L40,30 L60,15 L80,35 L100,25 L120,30 L140,10 L160,15 L180,5 L200,30 L220,20 L240,40 L260,25 L280,45 L300,20" fill="none" stroke="#EF4444" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-xl font-bold text-red-400">불안정한 수익 곡선</p>
                            <p className="text-sm text-red-300">높은 변동성, 큰 낙폭</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full sm:w-1/2">
                        <div className="h-64 w-full relative bg-black/40 rounded-lg overflow-hidden border border-green-500/20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-20 bg-green-500/10 flex flex-col items-center justify-center">
                              <p className="text-sm text-green-400">알고리즘 기반 매매</p>
                              <div className="w-full h-12 mt-2 px-4">
                                <svg viewBox="0 0 300 50" className="w-full h-full">
                                  <path d="M0,40 L20,38 L40,35 L60,33 L80,30 L100,28 L120,25 L140,22 L160,18 L180,16 L200,14 L220,12 L240,10 L260,8 L280,5 L300,3" fill="none" stroke="#10B981" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-xl font-bold text-green-400">안정적인 성장 곡선</p>
                            <p className="text-sm text-green-300">낮은 변동성, 꾸준한 상승</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-white/80 italic">
                        "알고리즘은 감정이 아닌 <span className="font-bold text-blue-400">데이터</span>로 결정하기 때문에 장기적으로 더 나은 결과를 만듭니다."
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
      <AnimatedSection className="section bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        </div>
        
        {/* 데이터 라인 효과 */}
        <div className="absolute top-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  성장의 발자취
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">알고포지</span>의 여정
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                혁신적인 금융 알고리즘으로 성장해온 알고포지의 발자취
              </p>
            </div>
          </AnimatedItem>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* 연혁 라인 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20 z-0"></div>
              
              {/* 연혁 아이템들 */}
              <AnimatedItem delay={0.1}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading text-white">2020년</h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">1월</p>
                    <p className="text-white/70">
                      알고포지 설립, 3명의 퀀트 트레이더와 개발자로 시작
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.2}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold font-heading text-white">2020년</h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">6월</p>
                    <p className="text-white/70">
                      첫 번째 김프 차익거래 알고리즘 출시 및 베타 서비스 시작
                    </p>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.3}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading text-white">2021년</h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">3월</p>
                    <p className="text-white/70">
                      첫 번째 유료 고객사 계약 체결 및 수익화 달성
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12"></div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.4}>
                <div className="relative z-10 flex items-center mb-12">
                  <div className="w-1/2 pr-12"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold font-heading text-white">2022년</h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">2월</p>
                    <p className="text-white/70">
                      엔터프라이즈급 자동매매 플랫폼 'AlgoForge Pro' 출시
                    </p>
                  </div>
                </div>
              </AnimatedItem>
              
              <AnimatedItem delay={0.5}>
                <div className="relative z-10 flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold font-heading text-white">2023년</h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">8월</p>
                    <p className="text-white/70">
                      월간 유료 고객 100곳 돌파, 부트스트랩 방식으로 성장 지속
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-20">
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
      <AnimatedSection className="section bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-40 right-10 w-32 h-32 rounded-full border border-blue-500/40 animate-pulse-slow"></div>
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  우리의 원칙
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">핵심</span> 가치
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                알고포지가 추구하는 가치와 원칙
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                  {/* 배경 디자인 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">
                      <FaChartLine className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-center text-white">데이터 기반 의사결정</h3>
                    <p className="text-white/70 text-center">
                      모든 결정은 철저한 데이터 분석과 검증을 기반으로 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                  {/* 배경 디자인 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">
                      <FaUsers className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-center text-white">팀워크</h3>
                    <p className="text-white/70 text-center">
                      다양한 배경과 전문성을 가진 인재들이 협력하여 최고의 결과를 만듭니다.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                  {/* 배경 디자인 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">
                      <FaLightbulb className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-center text-white">혁신</h3>
                    <p className="text-white/70 text-center">
                      끊임없는 연구와 실험을 통해 금융 시장의 새로운 기회를 발견합니다.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.4}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                  {/* 배경 디자인 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">
                      <FaHandshake className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-center text-white">고객 신뢰</h3>
                    <p className="text-white/70 text-center">
                      고객의 자산과 데이터를 최우선으로 보호하며 장기적인 관계를 구축합니다.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 팀 소개 */}
      <AnimatedSection className="section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  알고포지의 전문가들
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">경영진</span> 소개
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                전문성과 열정으로 알고포지를 이끄는 리더십
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl overflow-hidden">
                  <div className="aspect-square relative bg-black/50">
                    <div className="w-full h-full flex items-center justify-center text-blue-400 text-lg">
                      프로필 이미지
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-white">김대표</h3>
                    <p className="text-blue-400 font-medium mb-3">CEO & 공동창업자</p>
                    <p className="text-white/70 text-sm mb-4">
                      전 골드만삭스 퀀트 애널리스트, 금융공학 박사
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl overflow-hidden">
                  <div className="aspect-square relative bg-black/50">
                    <div className="w-full h-full flex items-center justify-center text-blue-400 text-lg">
                      프로필 이미지
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-white">이개발</h3>
                    <p className="text-blue-400 font-medium mb-3">CTO & 공동창업자</p>
                    <p className="text-white/70 text-sm mb-4">
                      전 네이버 AI 연구소 책임 연구원, 컴퓨터과학 박사
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] group">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl overflow-hidden">
                  <div className="aspect-square relative bg-black/50">
                    <div className="w-full h-full flex items-center justify-center text-blue-400 text-lg">
                      프로필 이미지
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-white">박전략</h3>
                    <p className="text-blue-400 font-medium mb-3">CSO</p>
                    <p className="text-white/70 text-sm mb-4">
                      전 한국투자증권 퀀트팀장, 10년 트레이딩 경력
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* 오시는 길 */}
      <AnimatedSection className="section bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 algo-grid opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full border border-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full border border-blue-500/20 animate-pulse-slow"></div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 mb-4 text-sm font-medium text-blue-400 shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  알고포지 본사
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">오시는</span> 길
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                  <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-500">
                    지도 영역 (카카오맵 또는 구글맵 임베드)
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-black h-full rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-2 text-white">주소</h3>
                      <p className="text-white/70">서울특별시 강남구 테헤란로 123, 알고포지 빌딩 8층</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-2 text-white">연락처</h3>
                      <p className="text-white/70">02-123-4567</p>
                      <p className="text-white/70">contact@algoforge.com</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-2 text-white">대중교통 이용</h3>
                      <p className="text-white/70 mb-2">
                        <span className="font-medium text-blue-400">지하철</span>: 2호선 강남역 3번 출구에서 도보 5분
                      </p>
                      <p className="text-white/70">
                        <span className="font-medium text-blue-400">버스</span>: 강남역 정류장 하차 (140, 144, 360번)
                      </p>
                    </div>
                  </div>
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