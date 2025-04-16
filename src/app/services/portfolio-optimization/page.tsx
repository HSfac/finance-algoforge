'use client';

import React from 'react';
import { FaChartLine, FaChartPie, FaShieldAlt, FaCog, FaCode, FaBrain, FaBalanceScale, FaLightbulb, FaSyncAlt } from 'react-icons/fa';
import ServiceTemplate from '../service-template';
import PortfolioChart from '@/components/visualizations/PortfolioChart';

export default function PortfolioOptimizationPage() {
  return (
    <ServiceTemplate
      // 페이지 기본 정보
      title="포트폴리오 최적화"
      description="데이터 기반 알고리즘으로 최적의 자산 구성을 설계하여 수익률을 극대화하고 리스크는 최소화합니다"
      primaryColor="blue"
      
      // 소개 섹션 정보
      introTitle="최적의 포트폴리오 구성"
      introDescription="효율적 프론티어(Efficient Frontier)와 현대 포트폴리오 이론(MPT)을 기반으로 최적의 자산 배분을 설계합니다. 개인의 위험 성향과 투자 목표에 맞춘 맞춤형 포트폴리오를 구성하여 리스크 대비 최대 수익을 추구합니다."
      introFeatures={[
        {
          icon: <FaChartLine className="text-blue-500" />,
          title: "마코위츠 최적화 모델",
          description: "노벨상 수상자 해리 마코위츠의 현대 포트폴리오 이론을 활용한 과학적인 자산 배분"
        },
        {
          icon: <FaCog className="text-blue-500" />,
          title: "개인화된 목표 설정",
          description: "개인의 투자 목표, 위험 허용 범위, 투자 기간에 맞춘 맞춤형 포트폴리오 구성"
        },
        {
          icon: <FaCode className="text-blue-500" />,
          title: "빅데이터 상관관계 분석",
          description: "방대한 금융 데이터를 분석하여 자산 간 상관관계를 파악하고 최적의 분산 투자 제안"
        }
      ]}
      introImage={<PortfolioChart />}
      
      // 주요 기능 목록
      features={[
        {
          icon: <FaChartPie className="text-blue-400 text-xl" />,
          title: "효율적 프론티어 최적화",
          description: "주어진 리스크 수준에서 최대 수익률 또는 주어진 수익률에서 최소 리스크를 갖는 최적의 포트폴리오를 구성합니다."
        },
        {
          icon: <FaBrain className="text-blue-400 text-xl" />,
          title: "인공지능 리밸런싱",
          description: "시장 상황과 자산 가격 변동에 따라 실시간으로 포트폴리오를 모니터링하고 최적의 리밸런싱 시점을 제안합니다."
        },
        {
          icon: <FaBalanceScale className="text-blue-400 text-xl" />,
          title: "위험 조정 성과 분석",
          description: "샤프 비율, 소르티노 비율 등 다양한 위험 조정 성과 지표를 통해 포트폴리오 성과를 다각도로 평가합니다."
        },
        {
          icon: <FaSyncAlt className="text-blue-400 text-xl" />,
          title: "동적 자산 배분",
          description: "경기 사이클과 시장 상황에 따라 동적으로 자산 배분 비중을 조정하여 시장 변화에 효과적으로 대응합니다."
        },
        {
          icon: <FaShieldAlt className="text-blue-400 text-xl" />,
          title: "다운사이드 리스크 관리",
          description: "하방 위험을 최소화하기 위한 테일 리스크 헤징 전략과 비대칭적 리스크 관리 기법을 적용합니다."
        },
        {
          icon: <FaLightbulb className="text-blue-400 text-xl" />,
          title: "시나리오 분석",
          description: "다양한 시장 상황을 가정한 스트레스 테스트와 시나리오 분석으로 불확실성에 대비한 포트폴리오를 구성합니다."
        }
      ]}
      
      // 서비스 프로세스
      process={[
        {
          number: "01",
          title: "투자 목표 설정",
          description: "고객의 투자 목표, 위험 성향, 투자 기간 등을 종합적으로 분석하여 투자 프로필을 수립합니다."
        },
        {
          number: "02",
          title: "데이터 분석 및 모델링",
          description: "글로벌 금융 자산의 수익률, 변동성, 상관관계 등을 심층 분석하고 최적화 모델을 설계합니다."
        },
        {
          number: "03",
          title: "포트폴리오 최적화",
          description: "효율적 프론티어 분석과 몬테카를로 시뮬레이션을 통해 최적의 자산 배분 비중을 도출합니다."
        },
        {
          number: "04",
          title: "리스크 관리 전략 적용",
          description: "테일 리스크 관리, 변동성 타겟팅 등 다양한 리스크 관리 전략을 포트폴리오에 적용합니다."
        },
        {
          number: "05",
          title: "실행 및 모니터링",
          description: "최적화된 포트폴리오를 실제 시장에 적용하고 실시간으로 성과를 모니터링합니다."
        },
        {
          number: "06",
          title: "정기적 리밸런싱",
          description: "시장 상황과 자산 가격 변동에 따라 포트폴리오를 정기적으로 리밸런싱하여 최적 상태를 유지합니다."
        }
      ]}
      
      // 사례 연구
      caseStudy={{
        title: "자산운용사 A사의 포트폴리오 최적화",
        description: "국내 대형 자산운용사 A사는 당사의 포트폴리오 최적화 엔진을 도입하여 기존 대비 연간 수익률을 2.7% 향상시키고, 변동성은 1.5% 감소시키는 성과를 달성했습니다. 특히 2022년 글로벌 증시 하락기에도 안정적인 성과를 유지하며 고객 자산을 보호했습니다.",
        stats: [
          {
            value: 2.7,
            prefix: "+",
            suffix: "%",
            label: "연간 수익률 향상"
          },
          {
            value: 1.5,
            prefix: "-",
            suffix: "%",
            label: "포트폴리오 변동성 감소"
          },
          {
            value: 32,
            suffix: "%",
            label: "다운사이드 리스크 감소"
          }
        ]
      }}
    />
  );
} 