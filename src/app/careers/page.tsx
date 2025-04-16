'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaUsers, FaChartLine, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';

// 채용 공고 데이터
const jobOpenings = [
  {
    id: 1,
    title: '퀀트 전략가',
    department: '투자 전략팀',
    location: '서울',
    type: '정규직',
    requirements: [
      '퀀트 전략 또는 알고리즘 트레이딩 관련 3년 이상 경력',
      '금융공학, 통계학, 수학, 컴퓨터 공학 관련 학위',
      'Python, R, MATLAB 등을 활용한 금융 모델링 경험',
      '머신러닝 알고리즘에 대한 이해와 적용 능력'
    ],
    responsibilities: [
      '데이터 기반 투자 전략 개발 및 최적화',
      '금융 시장 데이터 분석 및 팩터 연구',
      '백테스팅 모델 구축 및 성과 평가',
      '포트폴리오 최적화 알고리즘 개발'
    ]
  },
  {
    id: 2,
    title: '풀스택 개발자',
    department: '기술개발팀',
    location: '서울',
    type: '정규직',
    requirements: [
      'React, Next.js, Vue.js 등의 프론트엔드 프레임워크 경험',
      'Node.js, Express, Django 등의 백엔드 개발 경험',
      '금융 또는 핀테크 분야 개발 경험 우대',
      'RESTful API 설계 및 개발 경험'
    ],
    responsibilities: [
      '투자 플랫폼 프론트엔드 및 백엔드 개발',
      '데이터 시각화 및 대시보드 구현',
      'API 설계, 개발 및 최적화',
      '지속적 통합 및 배포 파이프라인 구축'
    ]
  },
  {
    id: 3,
    title: '데이터 사이언티스트',
    department: '데이터 분석팀',
    location: '서울 / 원격 가능',
    type: '정규직',
    requirements: [
      '데이터 분석 및 머신러닝 관련 3년 이상 경력',
      '금융 데이터 분석 경험 우대',
      'Python, PyTorch, TensorFlow 등 머신러닝 프레임워크 활용 능력',
      '대용량 데이터 처리 및 분석 경험'
    ],
    responsibilities: [
      '금융 데이터 전처리 및 특성 추출',
      '머신러닝 및 딥러닝 모델 개발',
      '자연어 처리를 통한 금융 뉴스 분석',
      '시계열 예측 모델 구축 및 평가'
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      {/* 헤더 섹션 */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">
              알고포지와 함께하는 커리어
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              금융과 기술의 미래를 함께 만들어갈 탁월한 인재를 찾고 있습니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#job-openings" className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                채용 공고 보기 <FaArrowRight />
              </a>
              <a href="#why-join" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300">
                알고포지 문화 알아보기
              </a>
            </div>
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

      {/* 회사 소개 섹션 */}
      <AnimatedSection id="why-join" className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sky-400">알고포지에서 일하는 이유</h2>
            <p className="text-slate-300">
              알고포지는 금융과 기술의 경계를 허물고, 혁신적인 투자 솔루션을 개발하는 핀테크 기업입니다. 
              우리는 데이터 기반의 의사결정과 알고리즘 기술을 통해 투자 산업의 새로운 표준을 만들어 나가고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-all">
              <div className="w-12 h-12 bg-sky-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-sky-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">혁신적인 문화</h3>
              <p className="text-slate-300">
                수평적인 조직 문화 속에서 자유로운 아이디어 교환과 혁신을 장려합니다. 
                우리는 항상 새로운 도전을 환영합니다.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-all">
              <div className="w-12 h-12 bg-sky-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-sky-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">성장하는 산업</h3>
              <p className="text-slate-300">
                퀀트 투자와 알고리즘 트레이딩은 금융 산업의 미래입니다. 
                빠르게 성장하는 산업에서 전문성을 키우고 경력을 발전시키세요.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-all">
              <div className="w-12 h-12 bg-sky-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaLaptopCode className="text-sky-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">최신 기술 스택</h3>
              <p className="text-slate-300">
                머신러닝, 클라우드 컴퓨팅, 빅데이터 등 최신 기술을 활용하여 
                복잡한 문제를 해결하고 기술적 전문성을 쌓을 수 있습니다.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-800/80 transition-all">
              <div className="w-12 h-12 bg-sky-900/50 rounded-lg flex items-center justify-center mb-4">
                <FaGraduationCap className="text-sky-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">지속적인 학습</h3>
              <p className="text-slate-300">
                컨퍼런스 참가, 교육 프로그램, 세미나 등 다양한 학습 기회를 제공하여 
                팀원들의 지속적인 성장을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 채용 공고 섹션 */}
      <AnimatedSection id="job-openings" className="w-full py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">현재 채용 중인 포지션</h2>
            
            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500 transition-all">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-slate-400">{job.department} • {job.location} • {job.type}</p>
                      </div>
                      <span className="bg-sky-900/30 text-sky-400 text-xs px-3 py-1 rounded-full">채용중</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">자격 요건</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-slate-300 flex items-start gap-2">
                              <span className="text-sky-400 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">주요 업무</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="text-slate-300 flex items-start gap-2">
                              <span className="text-sky-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link href={`/careers/apply?job=${job.id}`} className="inline-flex items-center text-sky-400 hover:text-sky-300 font-medium">
                        지원하기 <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 직원 생활 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sky-400">알고포지 생활</h2>
            <p className="text-slate-300">
              우리는 유연한 근무 환경과 다양한 복지 혜택을 통해 직원들의 행복과 성장을 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-white">근무 환경</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>유연한 근무 시간 및 재택근무 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>최신 장비 및 개발 도구 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>쾌적한 사무실 환경 및 카페테리아</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>자율적인 업무 문화</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-white">복리후생</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>경쟁력 있는 급여 및 성과 보상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>스톡옵션 및 인센티브 제도</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>종합 건강검진 및 의료보험 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>점심 및 저녁 식대 지원</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-white">성장 지원</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>도서 구입비 및 교육비 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>국내외 컨퍼런스 참가 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>사내 스터디 및 기술 세미나</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1">•</span>
                  <span>멘토링 및 커리어 개발 프로그램</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 채용 프로세스 섹션 */}
      <AnimatedSection className="w-full py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-400">채용 프로세스</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-900 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-white mb-2">서류 전형</h3>
                    <p className="text-slate-300">
                      이력서와 포트폴리오를 검토하여 지원자의 기술적 배경과 경험을 평가합니다.
                      서류 검토는 약 1-2주 소요됩니다.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 z-10 bg-sky-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 order-2 md:order-1"></div>
                  <div className="order-1 md:order-2 z-10 bg-sky-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="md:w-1/2 order-3 md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">기술 면접</h3>
                    <p className="text-slate-300">
                      실무 관련 질문과 문제 해결 능력을 평가하기 위한 기술적 면접을 진행합니다.
                      온라인 또는 오프라인으로 약 1-2시간 소요됩니다.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-white mb-2">과제 전형 (선택적)</h3>
                    <p className="text-slate-300">
                      일부 직무의 경우 실제 업무와 유사한 과제를 수행하여 실무 능력을 평가합니다.
                      과제 수행 기간은 약 3-5일이 주어집니다.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 z-10 bg-sky-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 order-2 md:order-1"></div>
                  <div className="order-1 md:order-2 z-10 bg-sky-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="md:w-1/2 order-3 md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">임원 면접</h3>
                    <p className="text-slate-300">
                      회사 문화적 적합성과 직무 적합성을 평가하기 위한 임원진과의 면접입니다.
                      약 1시간 정도 소요됩니다.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-white mb-2">최종 합격</h3>
                    <p className="text-slate-300">
                      모든 전형을 통과한 지원자에게는 합격 통보와 함께 입사 제안을 드립니다.
                      입사 일정 및 조건에 대해 협의합니다.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 z-10 bg-sky-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">5</div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA 섹션 */}
      <AnimatedSection className="w-full py-16 bg-gradient-to-b from-slate-950 to-sky-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">금융의 미래를 함께 만들어가세요</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            알고포지는 항상 열정적이고 창의적인 인재를 환영합니다.
            현재 공고에 맞는 포지션이 없더라도 자유롭게 지원해 주세요.
          </p>
          <Link href="/careers/apply" className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
            지금 지원하기 <FaArrowRight />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
} 