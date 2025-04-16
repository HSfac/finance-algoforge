'use client';

import React from 'react';
import ServiceTemplate from '../service-template';
import AssetAllocationChart from '@/components/visualizations/AssetAllocationChart';

export default function AssetAllocationPage() {
  return (
    <ServiceTemplate
      // 페이지 기본 정보
      title="자산 배분"
      description="과학적인 자산 배분 전략으로 분산 투자의 효과를 극대화하고 장기적으로 안정적인 수익을 추구합니다"
      primaryColor="green"
      
      // 소개 섹션 정보
      introTitle="전략적 자산 배분"
      introDescription="수십 년간의 학술 연구와 실증 분석을 바탕으로 투자 성과에 가장 큰 영향을 미치는 자산 배분 전략을 수립합니다. 시장 환경, 경제 사이클, 투자자 특성을 종합적으로 고려한 최적의 자산 배분으로 장기적인 수익을 추구합니다."
      introFeatures={[
        {
          icon: <FaChartPie className="text-green-500" />,
          title: "멀티 애셋 포트폴리오",
          description: "주식, 채권, 대체투자, 원자재 등 다양한 자산군을 활용한 최적의 분산 투자 실현"
        },
        {
          icon: <FaGlobe className="text-green-500" />,
          title: "글로벌 분산 투자",
          description: "국내외 다양한 시장에 분산 투자하여 지역적 위험을 분산하고 글로벌 성장 기회 포착"
        },
        {
          icon: <FaSyncAlt className="text-green-500" />,
          title: "동적 자산 배분",
          description: "시장 환경 변화에 따라 최적의 자산 배분 비중을 조정하는 전략적 리밸런싱"
        }
      ]}
      introImage={<AssetAllocationChart />}
      
      // 주요 기능 목록
      features={[
        {
          icon: <FaLayerGroup className="text-green-400 text-xl" />,
          title: "전략적 자산 배분",
          description: "장기적인 시장 전망과 자산별 기대 수익률, 위험, 상관관계를 고려한 최적의 자산 배분 전략을 수립합니다."
        },
        {
          icon: <FaChartLine className="text-green-400 text-xl" />,
          title: "전술적 자산 배분",
          description: "단기 시장 전망과 상대적 밸류에이션을 바탕으로 전략적 자산 배분에서의 비중을 조정하여 수익 기회를 포착합니다."
        },
        {
          icon: <FaBriefcase className="text-green-400 text-xl" />,
          title: "코어-새틀라이트 접근법",
          description: "안정적인 코어 포트폴리오와 수익 추구형 새틀라이트 전략을 결합하여 리스크 관리와 수익 극대화를 동시에 추구합니다."
        },
        {
          icon: <FaShieldAlt className="text-green-400 text-xl" />,
          title: "경기 사이클 전략",
          description: "경기 사이클 단계별로 강세를 보이는 자산에 선제적으로 배분하여 시장 환경 변화에 효과적으로 대응합니다."
        },
        {
          icon: <FaRegLightbulb className="text-green-400 text-xl" />,
          title: "대체투자 통합",
          description: "부동산, 인프라, 사모펀드, 헤지펀드 등 전통 자산과 낮은 상관관계를 가진 대체투자를 포트폴리오에 통합합니다."
        },
        {
          icon: <FaBalanceScale className="text-green-400 text-xl" />,
          title: "위험 기반 자산 배분",
          description: "자산의 명목 비중이 아닌 위험 기여도를 균등하게 분배하여 더욱 효과적인 위험 분산 효과를 추구합니다."
        }
      ]}
      
      // 서비스 프로세스
      process={[
        {
          number: "01",
          title: "투자 목표 및 제약 분석",
          description: "고객의 투자 목표, 위험 감수 성향, 유동성 요구, 투자 기간 등을 종합적으로 분석합니다."
        },
        {
          number: "02",
          title: "자산군 선정",
          description: "투자 목표와 제약 조건에 적합한 주식, 채권, 대체투자 등 투자 가능한 자산군을 선정합니다."
        },
        {
          number: "03",
          title: "자산별 기대 수익률 추정",
          description: "각 자산군의 장기 기대 수익률, 위험, 상관관계 등을 추정합니다."
        },
        {
          number: "04",
          title: "최적 자산 배분 도출",
          description: "최신 포트폴리오 이론과 최적화 기법을 활용하여 최적의 자산 배분 비중을 도출합니다."
        },
        {
          number: "05",
          title: "시나리오 분석",
          description: "다양한 시장 상황을 가정한 스트레스 테스트와 시나리오 분석을 통해 포트폴리오의 견고성을 검증합니다."
        },
        {
          number: "06",
          title: "실행 및 모니터링",
          description: "자산 배분 전략을 실행하고 시장 환경 변화와 포트폴리오 성과를 지속적으로 모니터링합니다."
        }
      ]}
      
      // 사례 연구
      caseStudy={{
        title: "국내 연기금의 자산 배분 최적화",
        description: "국내 주요 연기금 B사는 당사의 자산 배분 서비스를 통해 전통 자산과 대체투자를 아우르는 종합적인 자산 배분 전략을 재설계했습니다. 그 결과 포트폴리오의 장기 연평균 수익률이 1.8% 상승했으며, 변동성은 유사한 수준을 유지하여 위험 대비 수익률이 크게 개선되었습니다. 특히 코로나19와 같은 시장 충격 상황에서 하방 방어 효과가 뛰어났습니다.",
        stats: [
          {
            value: 1.8,
            prefix: "+",
            suffix: "%",
            label: "연평균 수익률 개선"
          },
          {
            value: 22,
            suffix: "%",
            label: "샤프 비율 향상"
          },
          {
            value: 35,
            prefix: "-",
            suffix: "%",
            label: "시장 충격 하방 방어"
          }
        ]
      }}
    />
  );
} 