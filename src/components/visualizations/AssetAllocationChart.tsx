'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AssetAllocationChart = () => {
  // 자산 배분 데이터
  const assetData = [
    { name: "국내주식", value: 25, color: "#10B981" },
    { name: "해외주식", value: 30, color: "#22D3EE" },
    { name: "채권", value: 20, color: "#8B5CF6" },
    { name: "대체투자", value: 15, color: "#F59E0B" },
    { name: "현금성", value: 10, color: "#6B7280" }
  ];
  
  // 리스크 기여도 데이터
  const riskContributionData = [
    { name: "국내주식", value: 40, color: "#10B981" },
    { name: "해외주식", value: 35, color: "#22D3EE" },
    { name: "채권", value: 10, color: "#8B5CF6" },
    { name: "대체투자", value: 12, color: "#F59E0B" },
    { name: "현금성", value: 3, color: "#6B7280" }
  ];
  
  // 지역별 배분 데이터
  const regionData = [
    { name: "국내", value: 35, color: "#059669" },
    { name: "북미", value: 25, color: "#2563EB" },
    { name: "유럽", value: 15, color: "#7C3AED" },
    { name: "아시아", value: 15, color: "#DC2626" },
    { name: "이머징", value: 10, color: "#D97706" }
  ];

  // 그래프 설정
  const width = 650;
  const height = 450;
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // 도넛 차트 설정
  const donutWidth = 60;
  const radius = Math.min(chartWidth, chartHeight) / 3 - 10;
  const innerRadius = radius - donutWidth;
  
  // 파이 차트 계산 함수
  const calculatePieSlices = (data: Array<{name: string, value: number, color: string}>) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    
    return data.map(item => {
      const angle = (item.value / total) * 2 * Math.PI;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;
      
      const startX = radius * Math.sin(startAngle);
      const startY = -radius * Math.cos(startAngle);
      const endX = radius * Math.sin(endAngle);
      const endY = -radius * Math.cos(endAngle);
      
      const largeArcFlag = angle > Math.PI ? 1 : 0;
      
      // 내부 호 (도넛 차트)
      const innerStartX = innerRadius * Math.sin(startAngle);
      const innerStartY = -innerRadius * Math.cos(startAngle);
      const innerEndX = innerRadius * Math.sin(endAngle);
      const innerEndY = -innerRadius * Math.cos(endAngle);
      
      const path = [
        `M ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L ${innerEndX} ${innerEndY}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}`,
        'Z'
      ].join(' ');
      
      // 라벨 위치 계산
      const labelAngle = startAngle + angle / 2;
      const labelRadius = radius + 20;
      const labelX = labelRadius * Math.sin(labelAngle);
      const labelY = -labelRadius * Math.cos(labelAngle);
      
      // 퍼센트 위치 계산
      const percentRadius = (radius + innerRadius) / 2;
      const percentX = percentRadius * Math.sin(labelAngle);
      const percentY = -percentRadius * Math.cos(labelAngle);
      
      // 라벨 텍스트 앵커
      const textAnchor = labelX > 0 ? "start" : labelX < 0 ? "end" : "middle";
      
      return {
        ...item,
        path,
        labelX,
        labelY,
        percentX,
        percentY,
        textAnchor,
        percent: Math.round(item.value)
      };
    });
  };
  
  const assetSlices = calculatePieSlices(assetData);
  const riskSlices = calculatePieSlices(riskContributionData);
  const regionSlices = calculatePieSlices(regionData);
  
  // 바 차트 설정
  const barHeight = 30;
  const barGap = 15;
  const barGroupHeight = assetData.length * (barHeight + barGap) - barGap;
  const barMaxWidth = chartWidth / 2 - 40;
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          {/* 글로우 필터 */}
          <filter id="glowAsset" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* 그라데이션 */}
          {assetData.map((asset, i) => (
            <linearGradient key={`grad-${i}`} id={`grad-${asset.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={asset.color} stopOpacity="0.7" />
              <stop offset="100%" stopColor={asset.color} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
        
        <g transform={`translate(${margin.left + chartWidth / 4}, ${margin.top + chartHeight / 2})`}>
          {/* 자산 배분 도넛 차트 */}
          <text 
            textAnchor="middle" 
            className="text-sm fill-white font-medium" 
            y={-radius - 20}
          >
            자산 배분 비중
          </text>
          
          {assetSlices.map((slice, i) => (
            <motion.g key={i}>
              <motion.path 
                d={slice.path} 
                fill={`url(#grad-${slice.name})`}
                stroke="#1E293B"
                strokeWidth={1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              <motion.text 
                x={slice.percentX} 
                y={slice.percentY} 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-xs fill-white font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                {slice.percent}%
              </motion.text>
              <motion.g 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
                <line 
                  x1={slice.percentX * 1.1} 
                  y1={slice.percentY * 1.1} 
                  x2={slice.labelX * 0.9} 
                  y2={slice.labelY * 0.9} 
                  stroke="#64748B" 
                  strokeWidth={0.5} 
                />
                <text 
                  x={slice.labelX} 
                  y={slice.labelY} 
                  textAnchor={slice.textAnchor} 
                  dominantBaseline="middle" 
                  className="text-xs fill-slate-300"
                >
                  {slice.name}
                </text>
              </motion.g>
            </motion.g>
          ))}
          
          {/* 중앙 텍스트 */}
          <circle r={innerRadius * 0.8} fill="#1E293B" fillOpacity={0.8} />
          <text 
            textAnchor="middle" 
            dominantBaseline="middle" 
            className="text-xs fill-slate-300"
          >
            수익-위험
          </text>
          <text 
            textAnchor="middle" 
            dominantBaseline="middle" 
            y={14}
            className="text-xs fill-slate-300"
          >
            최적화
          </text>
        </g>
        
        {/* 리스크 기여도 바 차트 */}
        <g transform={`translate(${margin.left + chartWidth * 3/4}, ${margin.top + 30})`}>
          <text 
            textAnchor="middle" 
            className="text-sm fill-white font-medium" 
            x={0}
            y={-20}
          >
            리스크 기여도
          </text>
          
          {riskContributionData.map((item, i) => (
            <motion.g 
              key={i} 
              transform={`translate(0, ${i * (barHeight + barGap)})`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <text 
                x={-5} 
                y={barHeight / 2} 
                textAnchor="end" 
                dominantBaseline="middle" 
                className="text-xs fill-slate-300"
              >
                {item.name}
              </text>
              <motion.rect 
                x={0} 
                y={0} 
                height={barHeight} 
                width={5}
                rx={2}
                fill={item.color}
                initial={{ width: 0 }}
                animate={{ width: (item.value / 100) * barMaxWidth }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
              <motion.text 
                x={(item.value / 100) * barMaxWidth + 5} 
                y={barHeight / 2} 
                dominantBaseline="middle" 
                className="text-xs fill-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
                {item.value}%
              </motion.text>
            </motion.g>
          ))}
        </g>
        
        {/* 지역별 배분 파이 차트 */}
        <g transform={`translate(${margin.left + chartWidth * 3/4}, ${margin.top + chartHeight * 3/4})`}>
          <text 
            textAnchor="middle" 
            className="text-sm fill-white font-medium" 
            y={-radius / 1.5 - 15}
          >
            지역별 배분
          </text>
          
          {regionSlices.map((slice, i) => (
            <motion.g key={i}>
              <motion.path 
                d={slice.path} 
                fill={slice.color}
                fillOpacity={0.8}
                stroke="#1E293B"
                strokeWidth={1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              <motion.text 
                x={slice.percentX * 0.6} 
                y={slice.percentY * 0.6} 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-[8px] fill-white font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                {slice.percent}%
              </motion.text>
            </motion.g>
          ))}
          
          {/* 범례 */}
          <g transform={`translate(${-radius / 1.5}, ${radius + 30})`}>
            {regionData.map((item, i) => (
              <g key={i} transform={`translate(${i * 60}, 0)`}>
                <rect 
                  width={10} 
                  height={10} 
                  fill={item.color}
                  rx={2}
                />
                <text 
                  x={15} 
                  y={5} 
                  dominantBaseline="middle" 
                  className="text-[8px] fill-slate-300"
                >
                  {item.name}
                </text>
              </g>
            ))}
          </g>
        </g>
        
        {/* 효율적 프론티어 곡선 - 작은 미니맵 */}
        <g transform={`translate(${margin.left + chartWidth / 4}, ${margin.top + 30})`}>
          <rect 
            x={-80} 
            y={-20} 
            width={160} 
            height={100} 
            fill="#1E293B" 
            fillOpacity={0.5}
            rx={5}
          />
          <text 
            textAnchor="middle" 
            className="text-[10px] fill-white font-medium" 
            y={-5}
          >
            효율적 프론티어
          </text>
          
          <motion.path 
            d="M -60 50 Q -40 40, -20 35 T 0 30 T 20 20 T 40 0 T 60 -10" 
            fill="none" 
            stroke="#4ADE80" 
            strokeWidth={2} 
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <motion.circle 
            cx={20} 
            cy={20} 
            r={5} 
            fill="#F59E0B" 
            stroke="#7C2D12" 
            strokeWidth={1}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="animate-pulse-slow"
          />
          
          <text 
            x={20} 
            y={35} 
            textAnchor="middle" 
            className="text-[8px] fill-slate-300"
          >
            최적포트폴리오
          </text>
        </g>
      </svg>
    </div>
  );
};

export default AssetAllocationChart; 