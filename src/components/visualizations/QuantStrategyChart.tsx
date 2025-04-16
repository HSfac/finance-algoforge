'use client';

import React from 'react';
import { motion } from 'framer-motion';

const QuantStrategyChart = () => {
  // 시계열 데이터
  const timeSeriesData = Array.from({ length: 120 }, (_, i) => {
    const trend = 20 + i / 5;
    const seasonal = Math.sin(i / 10) * 5;
    const noise = (Math.random() - 0.5) * 8;
    return trend + seasonal + noise;
  });
  
  // 신호 데이터 (이동평균 또는 전략 신호)
  const signalData = timeSeriesData.map((point, i, arr) => {
    if (i < 20) return null;
    return arr.slice(i - 20, i).reduce((sum, val) => sum + val, 0) / 20;
  });
  
  // 매매 신호
  const tradeSignals = [];
  for (let i = 25; i < timeSeriesData.length; i++) {
    const current = timeSeriesData[i];
    const signal = signalData[i] || 0;
    const prevSignal = signalData[i - 1] || 0;
    
    // 매수 시그널 - 가격이 이동평균을 상향 돌파
    if (timeSeriesData[i - 1] < signalData[i - 1] && current > signal) {
      tradeSignals.push({ index: i, type: 'buy', value: current });
    }
    // 매도 시그널 - 가격이 이동평균을 하향 돌파
    else if (timeSeriesData[i - 1] > signalData[i - 1] && current < signal) {
      tradeSignals.push({ index: i, type: 'sell', value: current });
    }
  }
  
  // 그래프 크기 설정
  const width = 600;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // 데이터 스케일링
  const minValue = Math.min(...timeSeriesData) - 5;
  const maxValue = Math.max(...timeSeriesData) + 5;
  const xScale = (index: number) => (index / (timeSeriesData.length - 1)) * chartWidth;
  const yScale = (value: number) => chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
  
  // 라인 생성
  const timeSeriesLine = timeSeriesData
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(point)}`)
    .join(' ');
    
  const signalLine = signalData
    .map((point, i) => {
      if (point === null) return '';
      return `${point === signalData.find(p => p !== null) ? 'M' : 'L'} ${xScale(i)} ${yScale(point)}`;
    })
    .join(' ');

  const annotationTexts = [
    { text: "주가 추세 반전 감지", x: xScale(35), y: yScale(timeSeriesData[35]) - 20 },
    { text: "변동성 증가 구간", x: xScale(65), y: yScale(timeSeriesData[65]) - 20 },
    { text: "모멘텀 신호", x: xScale(95), y: yScale(timeSeriesData[95]) - 20 }
  ];
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <linearGradient id="priceLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="signalLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glowPurple" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* 화살표 마커 */}
          <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 7 L 5 2 L 10 7" fill="none" stroke="#22C55E" strokeWidth="2" />
          </marker>
          <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 3 L 5 8 L 10 3" fill="none" stroke="#EF4444" strokeWidth="2" />
          </marker>
        </defs>
        
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* 배경 그리드 */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line 
              key={`grid-y-${i}`}
              x1={0} 
              y1={chartHeight * (i / 5)} 
              x2={chartWidth} 
              y2={chartHeight * (i / 5)} 
              stroke="#334155" 
              strokeWidth={0.5} 
              strokeDasharray="3,3"
            />
          ))}
          
          {Array.from({ length: 7 }).map((_, i) => (
            <line 
              key={`grid-x-${i}`}
              x1={chartWidth * (i / 6)} 
              y1={0} 
              x2={chartWidth * (i / 6)} 
              y2={chartHeight} 
              stroke="#334155" 
              strokeWidth={0.5} 
              strokeDasharray="3,3"
            />
          ))}
          
          {/* Y축 레이블 */}
          {Array.from({ length: 6 }).map((_, i) => {
            const value = Math.round(minValue + (maxValue - minValue) * (1 - i / 5));
            return (
              <text 
                key={`y-label-${i}`}
                x={-10} 
                y={chartHeight * (i / 5)} 
                dy="0.3em" 
                textAnchor="end" 
                className="text-[10px] fill-slate-500"
              >
                {value}
              </text>
            );
          })}
          
          {/* X축 레이블 */}
          {Array.from({ length: 7 }).map((_, i) => {
            const month = ['1월', '2월', '3월', '4월', '5월', '6월', '7월'];
            return (
              <text 
                key={`x-label-${i}`}
                x={chartWidth * (i / 6)} 
                y={chartHeight + 15} 
                textAnchor="middle" 
                className="text-[10px] fill-slate-500"
              >
                {month[i]}
              </text>
            );
          })}
          
          {/* 시계열 데이터 라인 */}
          <motion.path 
            d={timeSeriesLine} 
            fill="none" 
            stroke="url(#priceLineGradient)" 
            strokeWidth={2.5} 
            filter="url(#glowPurple)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* 시그널 라인 */}
          <motion.path 
            d={signalLine} 
            fill="none" 
            stroke="url(#signalLineGradient)" 
            strokeWidth={2} 
            strokeDasharray="5,3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* 트레이딩 신호 */}
          {tradeSignals.map((signal, i) => (
            <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 + i * 0.1, duration: 0.3 }}>
              {signal.type === 'buy' ? (
                <circle 
                  cx={xScale(signal.index)} 
                  cy={yScale(signal.value)} 
                  r={5} 
                  fill="#22C55E" 
                  stroke="#134E4A" 
                  strokeWidth={1.5} 
                  className="animate-pulse-slow"
                />
              ) : (
                <circle 
                  cx={xScale(signal.index)} 
                  cy={yScale(signal.value)} 
                  r={5} 
                  fill="#EF4444" 
                  stroke="#7F1D1D" 
                  strokeWidth={1.5} 
                  className="animate-pulse-slow"
                />
              )}
            </motion.g>
          ))}
          
          {/* 주석 */}
          {annotationTexts.map((annotation, i) => (
            <motion.g 
              key={i} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 2.5 + i * 0.2 }}
            >
              <line 
                x1={annotation.x} 
                y1={annotation.y + 15} 
                x2={annotation.x} 
                y2={annotation.y + 5} 
                stroke="#94A3B8" 
                strokeWidth={1} 
                strokeDasharray="2,2"
              />
              <rect 
                x={annotation.x - 50} 
                y={annotation.y - 15} 
                width={100} 
                height={20} 
                rx={4} 
                fill="#1E293B" 
                fillOpacity={0.7}
              />
              <text 
                x={annotation.x} 
                y={annotation.y} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="text-[10px] fill-slate-300"
              >
                {annotation.text}
              </text>
            </motion.g>
          ))}
          
          {/* 범례 */}
          <g transform="translate(20, 20)">
            <rect width={180} height={45} rx={5} fill="#1E293B" fillOpacity={0.5} />
            <line x1={10} y1={15} x2={30} y2={15} stroke="url(#priceLineGradient)" strokeWidth={2} />
            <text x={40} y={15} alignmentBaseline="middle" className="text-[10px] fill-slate-300">주가 데이터</text>
            <line x1={10} y1={30} x2={30} y2={30} stroke="url(#signalLineGradient)" strokeWidth={2} strokeDasharray="5,3" />
            <text x={40} y={30} alignmentBaseline="middle" className="text-[10px] fill-slate-300">이동평균 신호</text>
          </g>
          
          {/* 차트 제목 */}
          <text 
            x={chartWidth / 2} 
            y={-15} 
            textAnchor="middle" 
            className="text-sm fill-white font-semibold"
          >
            퀀트 전략 신호 시각화
          </text>
          
          {/* 축 제목 */}
          <text 
            x={chartWidth / 2} 
            y={chartHeight + 30} 
            textAnchor="middle" 
            className="text-xs fill-slate-400"
          >
            시간
          </text>
          <text 
            x={-chartHeight / 2} 
            y={-30} 
            textAnchor="middle" 
            transform="rotate(-90)" 
            className="text-xs fill-slate-400"
          >
            가격
          </text>
        </g>
      </svg>
    </div>
  );
};

export default QuantStrategyChart; 