'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 포트폴리오 최적화 효율적 프론티어 차트 컴포넌트
const PortfolioChart = () => {
  // 효율적 프론티어 데이터 포인트
  const efficientFrontierPoints = [
    { x: 5, y: 3 },
    { x: 6, y: 4 },
    { x: 7, y: 5 },
    { x: 8.5, y: 6.5 },
    { x: 10, y: 8 },
    { x: 12, y: 10 },
    { x: 14, y: 12 },
    { x: 16.5, y: 14.5 },
    { x: 19, y: 17 },
    { x: 22, y: 20 }
  ];
  
  // 포트폴리오 데이터 포인트
  const portfolioPoints = [
    { x: 7, y: 4, size: 8, label: "채권" },
    { x: 12, y: 7, size: 12, label: "주식" },
    { x: 18, y: 13, size: 10, label: "대체투자" },
    { x: 14, y: 11, size: 14, label: "최적 포트폴리오", optimal: true },
    { x: 9, y: 5, size: 9, label: "원자재" }
  ];

  // 그래프 크기 및 여백 설정
  const width = 600;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // 데이터 스케일링 함수
  const scaleX = (x: number) => (x / 25) * chartWidth;
  const scaleY = (y: number) => chartHeight - (y / 25) * chartHeight;
  
  // 효율적 프론티어 곡선 생성
  const pathData = efficientFrontierPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(point.x)} ${scaleY(point.y)}`)
    .join(' ');
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <linearGradient id="efficientFrontierGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="optimal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* 그래프 좌표축 */}
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
          <text 
            x={chartWidth / 2} 
            y={chartHeight + 35} 
            textAnchor="middle" 
            className="text-xs fill-slate-400"
          >
            리스크 (표준편차 %)
          </text>
          
          {/* Y축 레이블 */}
          <text 
            x={-chartHeight / 2} 
            y={-30} 
            textAnchor="middle" 
            transform={`rotate(-90)`} 
            className="text-xs fill-slate-400"
          >
            기대 수익률 (%)
          </text>
          
          {/* 격자 */}
          {[0, 5, 10, 15, 20].map(value => (
            <React.Fragment key={`grid-x-${value}`}>
              <line 
                x1={scaleX(value)} 
                y1={0} 
                x2={scaleX(value)} 
                y2={chartHeight} 
                stroke="#334155" 
                strokeWidth={0.5} 
                strokeDasharray="3,3"
              />
              <text 
                x={scaleX(value)} 
                y={chartHeight + 15} 
                textAnchor="middle" 
                className="text-[10px] fill-slate-500"
              >
                {value}
              </text>
            </React.Fragment>
          ))}
          
          {[0, 5, 10, 15, 20].map(value => (
            <React.Fragment key={`grid-y-${value}`}>
              <line 
                x1={0} 
                y1={scaleY(value)} 
                x2={chartWidth} 
                y2={scaleY(value)} 
                stroke="#334155" 
                strokeWidth={0.5} 
                strokeDasharray="3,3"
              />
              <text 
                x={-10} 
                y={scaleY(value) + 4} 
                textAnchor="end" 
                className="text-[10px] fill-slate-500"
              >
                {value}
              </text>
            </React.Fragment>
          ))}
          
          {/* 효율적 프론티어 곡선 */}
          <motion.path 
            d={pathData} 
            fill="none" 
            stroke="url(#efficientFrontierGradient)" 
            strokeWidth={3} 
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* 포트폴리오 데이터 포인트 */}
          {portfolioPoints.map((point, i) => (
            <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}>
              <circle 
                cx={scaleX(point.x)} 
                cy={scaleY(point.y)} 
                r={point.size} 
                fill={point.optimal ? "url(#optimal)" : "#60A5FA"}
                fillOpacity={point.optimal ? 0.9 : 0.6}
                stroke={point.optimal ? "#4F46E5" : "#3B82F6"}
                strokeWidth={point.optimal ? 2 : 1}
                className={point.optimal ? "animate-pulse-slow" : ""}
              />
              <text 
                x={scaleX(point.x)} 
                y={scaleY(point.y) - point.size - 5} 
                textAnchor="middle" 
                className="text-xs fill-slate-300 font-medium"
              >
                {point.label}
              </text>
            </motion.g>
          ))}
          
          {/* 그래프 제목 */}
          <text 
            x={chartWidth / 2} 
            y={-15} 
            textAnchor="middle" 
            className="text-sm fill-white font-semibold"
          >
            효율적 프론티어 & 최적 포트폴리오
          </text>
        </g>
      </svg>
    </div>
  );
};

export default PortfolioChart; 