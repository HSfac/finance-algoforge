'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaChartLine, FaArrowRight, FaCogs, FaCode, FaBrain, FaChartArea, FaRegLightbulb, FaSearch, FaDatabase, FaNetworkWired, FaTable } from 'react-icons/fa';
import ServiceTemplate from '../service-template';
import QuantStrategyChart from '@/components/visualizations/QuantStrategyChart';

export default function QuantStrategyPage() {
  return (
    <ServiceTemplate
      // 페이지 기본 정보
      title="퀀트 전략"
      description="빅데이터와 알고리즘 기반의 체계적인 투자 전략으로 감정을 배제한 합리적 투자 의사결정을 지원합니다"
      primaryColor="purple"
      
      // 소개 섹션 정보
      introTitle="알고리즘 기반 투자 전략"
      introDescription="방대한 금융 데이터를 분석하여 시장의 비효율성을 포착하고, 수학적 모델과 알고리즘을 통해 체계적으로 투자 의사결정을 내리는 퀀트 투자 전략을 개발합니다. 감정을 배제한 규칙 기반 접근 방식으로 일관된 투자 성과를 추구합니다."
      introFeatures={[
        {
          icon: <FaRobot className="text-purple-500" />,
          title: "팩터 기반 투자 모델",
          description: "가치, 모멘텀, 퀄리티 등 다양한 팩터를 분석하여 초과 수익을 창출하는 투자 모델 개발"
        },
        {
          icon: <FaChartLine className="text-purple-500" />,
          title: "트렌드 추종 및 역추세 전략",
          description: "시장 흐름을 분석하여 추세를 따르거나 반전을 포착하는 다양한 기술적 전략 구현"
        },
        {
          icon: <FaBrain className="text-purple-500" />,
          title: "머신러닝 기반 예측 모델",
          description: "인공지능 기술을 활용한 가격 예측 및 패턴 인식으로 시장 기회 포착"
        }
      ]}
      introImage={<QuantStrategyChart />}
      
      // 주요 기능 목록
      features={[
        {
          icon: <FaRegLightbulb className="text-purple-400 text-xl" />,
          title: "팩터 투자",
          description: "가치, 모멘텀, 퀄리티, 저변동성, 성장 등 다양한 팩터를 분석하여 초과 수익을 추구하는 전략을 개발합니다."
        },
        {
          icon: <FaChartLine className="text-purple-400 text-xl" />,
          title: "통계적 차익거래",
          description: "가격 이상 현상, 평균 회귀, 상관관계 변화 등 통계적 패턴을 활용하여 시장 비효율성을 포착하는 전략을 구현합니다."
        },
        {
          icon: <FaBrain className="text-purple-400 text-xl" />,
          title: "머신러닝 예측",
          description: "딥러닝, 강화학습 등 첨단 AI 기술을 활용하여 시장 움직임을 예측하고 최적의 투자 결정을 내리는 전략을 개발합니다."
        },
        {
          icon: <FaDatabase className="text-purple-400 text-xl" />,
          title: "대체 데이터 분석",
          description: "위성 이미지, 소셜 미디어 감성, 신용카드 소비 데이터 등 비전통적인 데이터를 분석하여 새로운 투자 기회를 발굴합니다."
        },
        {
          icon: <FaNetworkWired className="text-purple-400 text-xl" />,
          title: "시스템 트레이딩",
          description: "규칙 기반의 자동화된 트레이딩 시스템으로 감정을 배제하고 일관된 투자 규율을 유지하며 거래를 실행합니다."
        },
        {
          icon: <FaTable className="text-purple-400 text-xl" />,
          title: "백테스팅 시스템",
          description: "과거 데이터를 바탕으로 전략의 성과를 검증하고 최적화하여 실제 시장 적용 전 철저한 검증을 수행합니다."
        }
      ]}
      
      // 서비스 프로세스
      process={[
        {
          number: "01",
          title: "데이터 수집 및 전처리",
          description: "방대한 금융 데이터를 수집하고 정제하여 분석에 적합한 형태로 가공합니다."
        },
        {
          number: "02",
          title: "알파 팩터 연구",
          description: "시장에서 초과 수익을 창출할 수 있는 팩터와 신호를 발굴하고 검증합니다."
        },
        {
          number: "03",
          title: "모델 개발 및 백테스팅",
          description: "투자 모델을 개발하고 과거 데이터를 통해 성능을 철저히 검증합니다."
        },
        {
          number: "04",
          title: "위험 관리 적용",
          description: "다양한 위험 지표를 통해 모델의 리스크를 측정하고 관리 방안을 적용합니다."
        },
        {
          number: "05",
          title: "최적화 및 견고성 테스트",
          description: "다양한 시장 환경에서 전략의 견고성을 테스트하고 파라미터를 최적화합니다."
        },
        {
          number: "06",
          title: "실시간 실행 및 모니터링",
          description: "개발된 전략을 실제 시장에 적용하고 성과를 지속적으로 모니터링합니다."
        }
      ]}
      
      // 사례 연구
      caseStudy={{
        title: "대형 헤지펀드의 퀀트 전략 혁신",
        description: "글로벌 헤지펀드 D사는 당사의 퀀트 전략 서비스를 도입하여 멀티팩터 모델을 개발하고 머신러닝 기반 신호 최적화 시스템을 구축했습니다. 결과적으로 샤프 비율이 0.8에서 1.4로 크게 향상되었고, 최대 낙폭(Maximum Drawdown)은 32% 감소했습니다. 특히 변동성이 큰 시장 환경에서도 안정적인 성과를 유지했습니다.",
        stats: [
          {
            value: 75,
            suffix: "%",
            label: "샤프 비율 개선"
          },
          {
            value: 32,
            prefix: "-",
            suffix: "%",
            label: "최대 낙폭 감소"
          },
          {
            value: 3.2,
            prefix: "x",
            label: "알파 생성 효율성"
          }
        ]
      }}
    />
  );
} 