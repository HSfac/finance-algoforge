'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 리스크 히트맵 차트 컴포넌트
const RiskHeatmapChart = () => {
  // 위험 요소 데이터
  const riskData = [
    { id: 1, name: '시장 위험', likelihood: 0.8, impact: 0.9, category: '금융 위험' },
    { id: 2, name: '신용 위험', likelihood: 0.7, impact: 0.6, category: '금융 위험' },
    { id: 3, name: '유동성 위험', likelihood: 0.5, impact: 0.8, category: '금융 위험' },
    { id: 4, name: '운영 위험', likelihood: 0.4, impact: 0.5, category: '비금융 위험' },
    { id: 5, name: '정치 위험', likelihood: 0.3, impact: 0.7, category: '비금융 위험' },
    { id: 6, name: '규제 위험', likelihood: 0.6, impact: 0.4, category: '비금융 위험' },
    { id: 7, name: '평판 위험', likelihood: 0.2, impact: 0.6, category: '비금융 위험' },
    { id: 8, name: '기술 위험', likelihood: 0.5, impact: 0.3, category: '비금융 위험' },
  ];

  // 그래프 크기 및 여백 설정
  const width = 600;
  const height = 400;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // 위험 단계에 따른 색상 설정
  const getRiskColor = (likelihood, impact) => {
    const riskScore = likelihood * impact;
    
    if (riskScore >= 0.6) return '#EF4444'; // 높은 위험: 빨간색
    if (riskScore >= 0.3) return '#F59E0B'; // 중간 위험: 주황색
    return '#10B981'; // 낮은 위험: 녹색
  };
  
  // 데이터 스케일링 함수
  const scaleX = (x) => x * chartWidth;
  const scaleY = (y) => chartHeight - y * chartHeight;
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <radialGradient id="riskGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#EF4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* 그래프 영역 */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* 배경 그리드 */}
          <rect 
            x={0} 
            y={0} 
            width={chartWidth} 
            height={chartHeight} 
            fill="#1E293B" 
            stroke="#334155" 
            strokeWidth={1}
          />
          
          {/* 그리드 라인 */}
          {[0.2, 0.4, 0.6, 0.8].map(value => (
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
                {value.toFixed(1)}
              </text>
            </React.Fragment>
          ))}
          
          {[0.2, 0.4, 0.6, 0.8].map(value => (
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
                {value.toFixed(1)}
              </text>
            </React.Fragment>
          ))}
          
          {/* 영역 라벨 */}
          <rect 
            x={scaleX(0.6)} 
            y={0} 
            width={chartWidth - scaleX(0.6)} 
            height={scaleY(0.6)} 
            fill="#EF4444" 
            fillOpacity={0.1} 
          />
          <text 
            x={scaleX(0.8)} 
            y={scaleY(0.8)} 
            textAnchor="middle" 
            className="text-[12px] font-medium fill-red-400"
          >
            고위험
          </text>
          
          <rect 
            x={0} 
            y={0} 
            width={scaleX(0.6)} 
            height={scaleY(0.6)} 
            fill="#F59E0B" 
            fillOpacity={0.1} 
          />
          <text 
            x={scaleX(0.3)} 
            y={scaleY(0.8)} 
            textAnchor="middle" 
            className="text-[12px] font-medium fill-yellow-400"
          >
            중위험
          </text>
          
          <rect 
            x={scaleX(0.6)} 
            y={scaleY(0.6)} 
            width={chartWidth - scaleX(0.6)} 
            height={chartHeight - scaleY(0.6)} 
            fill="#F59E0B" 
            fillOpacity={0.1} 
          />
          <text 
            x={scaleX(0.8)} 
            y={scaleY(0.3)} 
            textAnchor="middle" 
            className="text-[12px] font-medium fill-yellow-400"
          >
            중위험
          </text>
          
          <rect 
            x={0} 
            y={scaleY(0.6)} 
            width={scaleX(0.6)} 
            height={chartHeight - scaleY(0.6)} 
            fill="#10B981" 
            fillOpacity={0.1} 
          />
          <text 
            x={scaleX(0.3)} 
            y={scaleY(0.3)} 
            textAnchor="middle" 
            className="text-[12px] font-medium fill-emerald-400"
          >
            저위험
          </text>
          
          {/* 위험 요소 데이터 포인트 */}
          {riskData.map((risk, i) => (
            <motion.g 
              key={i} 
              initial={{ opacity: 0, scale: 0 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
            >
              <circle 
                cx={scaleX(risk.likelihood)} 
                cy={scaleY(risk.impact)} 
                r={10 + (risk.likelihood * risk.impact) * 15} 
                fill={getRiskColor(risk.likelihood, risk.impact)}
                fillOpacity={0.6}
                stroke={getRiskColor(risk.likelihood, risk.impact)}
                strokeWidth={1}
              />
              <text 
                x={scaleX(risk.likelihood)} 
                y={scaleY(risk.impact) - 15} 
                textAnchor="middle" 
                className="text-xs fill-white font-medium"
              >
                {risk.name}
              </text>
              <text 
                x={scaleX(risk.likelihood)} 
                y={scaleY(risk.impact)} 
                textAnchor="middle" 
                className="text-[10px] fill-white"
              >
                {(risk.likelihood * risk.impact).toFixed(2)}
              </text>
            </motion.g>
          ))}
          
          {/* 축 레이블 */}
          <text 
            x={chartWidth / 2} 
            y={chartHeight + 35} 
            textAnchor="middle" 
            className="text-xs fill-slate-400"
          >
            발생 가능성
          </text>
          
          <text 
            x={-chartHeight / 2} 
            y={-30} 
            textAnchor="middle" 
            transform={`rotate(-90)`} 
            className="text-xs fill-slate-400"
          >
            영향도
          </text>
          
          {/* 그래프 제목 */}
          <text 
            x={chartWidth / 2} 
            y={-20} 
            textAnchor="middle" 
            className="text-sm fill-white font-semibold"
          >
            위험 요소 히트맵
          </text>
        </g>
      </svg>
    </div>
  );
};

export default RiskHeatmapChart; 