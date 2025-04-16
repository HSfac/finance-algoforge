'use client';

import React from 'react';
import { motion } from 'framer-motion';

// VaR(Value at Risk) 차트 컴포넌트
const RiskVaRChart = () => {
  // VaR 분포 데이터 (정규 분포)
  const generateNormalDistribution = (mean, stdDev, count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const x = mean - stdDev * 3 + (i / count) * stdDev * 6;
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * 
                Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
      data.push({ x, y });
    }
    return data;
  };

  const mean = 0.02; // 평균 수익률 2%
  const stdDev = 0.08; // 표준편차 8%
  // 95% 신뢰수준의 VaR 값 (1.645는 표준정규분포에서 95% 신뢰수준에 해당하는 Z값)
  const varValue = mean - stdDev * 1.645; // 95% 신뢰수준의 VaR 값
  
  const distributionData = generateNormalDistribution(mean, stdDev, 100);
  
  // 그래프 크기 및 여백 설정
  const width = 600;
  const height = 400;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // 데이터 스케일링 함수
  const maxY = Math.max(...distributionData.map(d => d.y));
  const scaleX = (x) => ((x - (mean - stdDev * 3)) / (stdDev * 6)) * chartWidth;
  const scaleY = (y) => chartHeight - (y / maxY) * chartHeight;
  
  // 곡선 경로 생성
  const pathData = distributionData
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(point.x)} ${scaleY(point.y)}`)
    .join(' ');
  
  // VaR 영역 경로 (왼쪽 꼬리)
  const varAreaData = [
    `M ${scaleX(mean - stdDev * 3)} ${chartHeight}`,
    ...distributionData
      .filter(point => point.x <= varValue)
      .map(point => `L ${scaleX(point.x)} ${scaleY(point.y)}`),
    `L ${scaleX(varValue)} ${chartHeight}`,
    'Z'
  ].join(' ');
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* 그래프 영역 */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* X축 */}
          <line 
            x1={0} 
            y1={chartHeight} 
            x2={chartWidth} 
            y2={chartHeight} 
            stroke="#64748B" 
            strokeWidth={1}
          />
          
          {/* Y축 */}
          <line 
            x1={0} 
            y1={0} 
            x2={0} 
            y2={chartHeight} 
            stroke="#64748B" 
            strokeWidth={1}
          />
          
          {/* X축 레이블 */}
          {[-0.20, -0.10, 0, 0.10, 0.20].map(value => (
            <React.Fragment key={`label-x-${value}`}>
              <line 
                x1={scaleX(value)} 
                y1={chartHeight} 
                x2={scaleX(value)} 
                y2={chartHeight + 5} 
                stroke="#64748B" 
                strokeWidth={1}
              />
              <text 
                x={scaleX(value)} 
                y={chartHeight + 20} 
                textAnchor="middle" 
                className="text-[10px] fill-slate-400"
              >
                {(value * 100).toFixed(0)}%
              </text>
            </React.Fragment>
          ))}
          
          {/* 그리드 라인 */}
          {[-0.20, -0.10, 0, 0.10, 0.20].map(value => (
            <line 
              key={`grid-x-${value}`}
              x1={scaleX(value)} 
              y1={0} 
              x2={scaleX(value)} 
              y2={chartHeight} 
              stroke="#334155" 
              strokeWidth={0.5} 
              strokeDasharray="3,3"
            />
          ))}
          
          {/* VaR 영역 */}
          <motion.path 
            d={varAreaData} 
            fill="url(#areaGradient)" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* VaR 기준선 */}
          <motion.line 
            x1={scaleX(varValue)} 
            y1={0} 
            x2={scaleX(varValue)} 
            y2={chartHeight} 
            stroke="#DC2626" 
            strokeWidth={2} 
            strokeDasharray="5,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* VaR 라벨 */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <rect 
              x={scaleX(varValue) - 30} 
              y={chartHeight - 80} 
              width={60} 
              height={30} 
              rx={5} 
              fill="#7F1D1D" 
            />
            <text 
              x={scaleX(varValue)} 
              y={chartHeight - 60} 
              textAnchor="middle" 
              className="text-[10px] fill-white font-medium"
            >
              VaR (95%): {(Math.abs(varValue) * 100).toFixed(2)}%
            </text>
          </motion.g>
          
          {/* 분포 곡선 */}
          <motion.path 
            d={pathData} 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* 축 레이블 */}
          <text 
            x={chartWidth / 2} 
            y={chartHeight + 40} 
            textAnchor="middle" 
            className="text-xs fill-slate-400"
          >
            수익률 (%)
          </text>
          
          <text 
            x={-chartHeight / 2} 
            y={-30} 
            textAnchor="middle" 
            transform={`rotate(-90)`} 
            className="text-xs fill-slate-400"
          >
            확률 밀도
          </text>
          
          {/* 그래프 제목 */}
          <text 
            x={chartWidth / 2} 
            y={-20} 
            textAnchor="middle" 
            className="text-sm fill-white font-semibold"
          >
            포트폴리오 VaR (Value at Risk) 분석
          </text>
          
          {/* 평균선 */}
          <motion.line 
            x1={scaleX(mean)} 
            y1={0} 
            x2={scaleX(mean)} 
            y2={chartHeight} 
            stroke="#818CF8" 
            strokeWidth={1.5} 
            strokeDasharray="5,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* 평균 레이블 */}
          <motion.text 
            x={scaleX(mean)} 
            y={20} 
            textAnchor="middle" 
            className="text-[10px] fill-indigo-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            평균: {(mean * 100).toFixed(1)}%
          </motion.text>
        </g>
      </svg>
    </div>
  );
};

export default RiskVaRChart; 