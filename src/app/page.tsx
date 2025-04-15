'use client';

import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import CounterAnimation from '@/components/ui/CounterAnimation';
import ChartCard from '@/components/ui/ChartCard';
import HeroBackground from '@/components/ui/HeroBackground';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import { FaChartLine, FaRobot, FaDatabase, FaDesktop, FaArrowRight, FaUsers } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// 아이콘 컴포넌트 정의
const ChartLineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 7.09-4-4L2 16l1.5 2.5z"/>
  </svg>
);

const RobotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);

const DesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

const ArrowRightIcon = ({ className = "text-sm" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// 샘플 차트 데이터
const PERFORMANCE_DATA = {
  labels: Array.from({ length: 24 }, (_, i) => `${i + 1}월`),
  data: [100, 112, 119, 123, 130, 127, 135, 142, 148, 155, 149, 157, 165, 170, 177, 183, 190, 187, 195, 205, 212, 220, 230, 242],
};

const DAILY_RETURN_DATA = {
  labels: Array.from({ length: 30 }, (_, i) => `${i + 1}일`),
  data: [0.12, 0.05, 0.21, -0.08, 0.15, 0.30, 0.18, -0.05, 0.10, 0.22, 0.15, 0.19, -0.10, 0.25, 0.33, 0.12, 0.18, 0.27, -0.07, 0.22, 0.16, 0.20, 0.11, 0.28, -0.05, 0.19, 0.23, 0.15, 0.21, 0.30],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero 섹션 */}
      <section className="relative bg-gradient-to-b from-black via-primary/80 to-black text-white py-28 md:py-40 lg:py-48 overflow-hidden algo-grid">
        <HeroBackground />
        
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70 z-0"></div>
          <div className="absolute inset-0 opacity-30 z-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* 코드 효과 배경 */}
          <div className="absolute inset-0 z-0 opacity-10">
            <pre className="text-white font-mono text-[10px] leading-tight p-8 overflow-hidden" style={{ whiteSpace: 'pre-wrap' }}>
{`function initAlgorithmicTrading() {
  // 초기화 설정
  const CONFIG = {
    apiEndpoint: "wss://market-data-stream.finance",
    timeframe: "1m",
    symbols: ["BTC/USDT", "ETH/USDT", "XRP/USDT"],
    riskLevel: 0.2,
    useML: true,
    maxPositions: 5
  };

  // 데이터 스트림 연결
  const dataStream = new MarketDataStream(CONFIG.apiEndpoint);
  dataStream.connect().then(() => {
    console.log("실시간 데이터 스트림 연결 성공");
    CONFIG.symbols.forEach(symbol => {
      dataStream.subscribe(symbol, CONFIG.timeframe);
    });
  });

  // 시그널 생성기 초기화
  const signalGenerator = new SignalGenerator({
    indicators: [
      new MovingAverage({ period: 20, type: "ema" }),
      new RSI({ period: 14, overbought: 70, oversold: 30 }),
      new MACD({ fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 })
    ],
    ml: CONFIG.useML ? new MLModel("/models/price-prediction-v3.onnx") : null
  });

  // 리스크 관리 모듈 초기화
  const riskManager = new RiskManager({
    maxDrawdown: 10,
    maxPositionSize: CONFIG.riskLevel,
    stopLossPercent: 2.5,
    takeProfitPercent: 7.5
  });

  // 주문 실행기 초기화
  const orderExecutor = new OrderExecutor({
    apiKey: process.env.EXCHANGE_API_KEY,
    apiSecret: process.env.EXCHANGE_API_SECRET,
    testMode: false
  });

  // 메인 트레이딩 루프
  return {
    start() {
      console.log("알고리즘 트레이딩 시스템 시작");
      dataStream.onData(marketData => {
        // 시그널 생성
        const signals = signalGenerator.analyze(marketData);
        
        // 리스크 확인
        const validatedSignals = riskManager.validateSignals(signals);
        
        // 주문 실행
        for (const signal of validatedSignals) {
          if (signal.action === "BUY") {
            orderExecutor.placeBuyOrder(signal);
          } else if (signal.action === "SELL") {
            orderExecutor.placeSellOrder(signal);
          }
        }
      });
    },
    
    stop() {
      console.log("알고리즘 트레이딩 시스템 중지");
      dataStream.disconnect();
    }
  };
}`}
            </pre>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-primary/40 mb-6 shadow-lg text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="font-medium text-white">24시간 완전 자동화 알고리즘 매매</span>
                </span>
              </motion.div>
              
              {/* 프로세스 라인 추가 */}
              <div className="h-1 w-32 mb-8 overflow-hidden rounded-full">
                <div className="animate-process h-full rounded-full"></div>
              </div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-heading leading-tight text-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="leading-tight">
                  <span className="relative inline-block text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    데이터<span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400"></span>
                  </span>로&nbsp;
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">수익</span>을
                </div>
                <div className="leading-tight mt-2">
                  <span className="relative inline-block text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    알고리즘<span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400"></span>
                  </span>으로&nbsp;
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">안정성</span>을
                </div>
                <div className="text-sm font-mono text-yellow-200 mt-3">
                  // 데이터 + 알고리즘 = 최적화된 투자전략
                </div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl leading-relaxed drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                트레이더의 감정을 배제한 <span className="algo-number text-yellow-200 bg-black/40">100%</span> 데이터 기반 알고리즘으로
                <span className="block mt-1">시간과 장소에 구애받지 않는 <strong className="text-yellow-300 font-bold">안정적 수익</strong>을 실현하세요.</span>
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact">
                  <Button variant="accent" size="lg" className="shadow-lg shadow-accent/20 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto font-bold bg-yellow-400 text-black">
                    <span className="flex items-center gap-2">
                      무료 상담 신청 <ArrowRightIcon className="text-sm" />
                    </span>
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 w-full sm:w-auto text-white">
                    솔루션 살펴보기
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                className="mt-12 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="hidden md:flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-black/70 flex items-center justify-center text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-white/90">
                    <span className="font-bold text-xl text-white">200+</span> 고객 사례
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-white/90 ml-1">평균 98% 만족도</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="md:col-span-5 hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                
                <div className="bg-black/40 p-8 rounded-2xl backdrop-blur-md shadow-2xl border border-primary/20 transform rotate-2 algo-grid">
                  <div className="transform -rotate-2">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold font-heading">실시간 성과 모니터링</h3>
                      <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                        <span className="text-xs text-white/90">라이브</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-primary/10">
                        <h4 className="text-xs mb-1 font-heading text-white/80">연간 수익률</h4>
                        <p className="text-2xl font-bold text-accent">
                          <CounterAnimation end={142} suffix="%" />
                        </p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-primary/10">
                        <h4 className="text-xs mb-1 font-heading text-white/80">평균 수익기간</h4>
                        <p className="text-2xl font-bold text-white">
                          <CounterAnimation end={3.2} decimals={1} suffix="개월" />
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-primary/10">
                      <div className="h-40 w-full relative">
                        <Line 
                          data={{
                            labels: PERFORMANCE_DATA.labels,
                            datasets: [{
                              label: '누적 수익률',
                              data: PERFORMANCE_DATA.data,
                              borderColor: '#F1C40F', // accent 색상
                              backgroundColor: 'rgba(241, 196, 15, 0.1)',
                              fill: true,
                              tension: 0.4,
                              pointRadius: 0,
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { 
                              legend: { display: false },
                              tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleFont: { size: 12 },
                                bodyFont: { size: 11 },
                                padding: 8,
                                cornerRadius: 4
                              }
                            },
                            scales: {
                              x: { 
                                display: false,
                                grid: { display: false } 
                              },
                              y: { 
                                display: false,
                                grid: { display: false } 
                              }
                            },
                            elements: {
                              line: {
                                borderWidth: 2
                              }
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-primary/10">
                        <p className="text-xs text-white/80 mb-1">승률</p>
                        <p className="text-lg font-bold text-white">78%</p>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-primary/10">
                        <p className="text-xs text-white/80 mb-1">거래횟수</p>
                        <p className="text-lg font-bold text-white">142회</p>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center border border-primary/10">
                        <p className="text-xs text-white/80 mb-1">MDD</p>
                        <p className="text-lg font-bold text-white">8.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-accent px-4 py-2 rounded-lg font-bold shadow-xl rotate-6 z-20 text-sm text-black">
                  24/7 자동화
                </div>
                
                <div className="absolute -bottom-5 -left-5 bg-white text-black px-4 py-1 rounded-lg font-medium shadow-lg -rotate-3 z-20 text-sm">
                  AI 기반 예측
                </div>
                
                {/* 터미널 효과 추가 */}
                <div className="absolute -bottom-20 right-10 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg font-mono text-xs text-accent shadow-lg border border-primary/20 w-56">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-white/80 ml-1">terminal</span>
                  </div>
                  <div className="typing-animation">
                    <span className="text-primary/80">$</span> <span className="text-white">algorithm</span> <span className="text-primary/80">--start</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">트레이딩 시스템 초기화...</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">신호 생성기 로드 완료</span><br/>
                    <span className="text-green-400">✓</span> <span className="text-white/80">API 연결 성공</span><br/>
                    <span className="text-yellow-400 blink">█</span>
                  </div>
                </div>
                
                {/* 통계 팝업 추가 */}
                <div className="absolute top-10 left-10 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg font-mono text-xs text-white/90 shadow-lg border border-accent/30 z-30 transform -rotate-3">
                  <div className="flex items-center gap-2 mb-1 text-accent text-[10px]">
                    <span>PERFORMANCE_METRICS</span>
                  </div>
                  <div className="text-[10px] leading-relaxed">
                    <span className="text-blue-400">ROI:</span> <span className="text-yellow-300">+142%</span><br/>
                    <span className="text-blue-400">Sharpe:</span> <span className="text-white">2.43</span><br/>
                    <span className="text-blue-400">Volatility:</span> <span className="text-white">8.2%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 스크롤 다운 인디케이터 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1
          }}
        >
          <div className="flex flex-col items-center bg-black/70 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-700/40">
            <p className="text-sm text-white mb-2 font-mono">$ scroll_down.sh</p>
            <div className="data-line w-full my-1"></div>
            <FaArrowRight className="rotate-90 text-yellow-400 animate-bounce" />
          </div>
        </motion.div>

        {/* 데이터 흐름 라인 효과 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute top-1/3 left-0 right-0 h-px bg-accent/10 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/20 z-0">
          <div className="data-line w-full h-full"></div>
        </div>
      </section>

      {/* 실적 배너 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 border-t border-b border-white/10 relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 algo-grid opacity-30"></div>
        <div className="absolute top-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 h-px w-full">
          <div className="data-line w-full h-full"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <ChartLineIcon />
                </div>
                <div>
                  <p className="text-sm text-white/90">총 거래 금액</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-white"><CounterAnimation end={1527} suffix="" /></p>
                    <span className="text-xs font-mono text-yellow-300">억원</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <RobotIcon />
                </div>
                <div>
                  <p className="text-sm text-white/90">자동화 트레이딩</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-white"><CounterAnimation end={24} suffix="" /></p>
                    <span className="text-xs font-mono text-yellow-300">시간</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <DatabaseIcon />
                </div>
                <div>
                  <p className="text-sm text-white/90">데이터 포인트</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-white"><CounterAnimation end={42} suffix="" /></p>
                    <span className="text-xs font-mono text-yellow-300">억개+</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <UsersIcon />
                </div>
                <div>
                  <p className="text-sm text-white/90">고객 만족도</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-white"><CounterAnimation end={98} suffix="" /></p>
                    <span className="text-xs font-mono text-yellow-300">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 우리가 제공하는 것 */}
      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0">
          {/* 데이터 패턴 배경 */}
          <div className="absolute inset-0 bg-black/80 z-0">
            <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F1C40F' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          {/* 흐르는 데이터 라인 효과 */}
          <div className="absolute top-0 w-full h-px">
            <div className="data-line w-full h-full"></div>
          </div>
          <div className="absolute bottom-0 w-full h-px">
            <div className="data-line w-full h-full"></div>
          </div>
          <div className="absolute left-1/4 h-full w-px">
            <div className="data-line h-full w-full"></div>
          </div>
          <div className="absolute right-1/4 h-full w-px">
            <div className="data-line h-full w-full"></div>
          </div>
          
          {/* 데이터 시각화 요소 */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary/30 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-primary/20 animate-pulse-slow"></div>
            <div className="absolute top-40 right-10 w-32 h-32 rounded-full border border-primary/40 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <AnimatedItem>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 mb-4 text-sm font-medium text-primary">
                검증된 실적
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-shadow-lg text-white">
                <span className="text-primary drop-shadow-[0_2px_8px_rgba(241,196,15,0.7)]">데이터</span>로 증명하는 결과
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                감정이 아닌 알고리즘으로 일관된 수익을 창출합니다
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <AnimatedItem delay={0.1}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  {/* 배경 그래프 효과 */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">메인 상품</div>
                    <h3 className="text-lg font-bold text-white mb-2">USDT 기반 시스템<br/>누적 수익률</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={142} suffix="%" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">최근 12개월</p>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      <span className="font-medium">32% 상승</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-primary/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">수익 효율성</div>
                    <h3 className="text-lg font-bold text-white mb-2">BEP 달성<br/>평균 기간</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={3} suffix="개월" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">초기 투자 회수 기간</p>
                    <div className="flex items-center gap-1 text-white/70 mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span className="text-sm">업계 평균 대비 2배 빠름</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-px bg-gradient-to-l from-blue-400/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.3}>
              <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-b from-black/80 to-gray-900/90 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-black/40 px-3 py-1 rounded-md text-white/70 text-sm font-medium inline-block mb-3">고객 신뢰도</div>
                    <h3 className="text-lg font-bold text-white mb-2">고객 만족도<br/>재계약률</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold font-heading text-green-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <CounterAnimation end={96} suffix="%" />
                      </span>
                    </div>
                    <p className="text-white/60 mb-3">전체 고객 기준</p>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      <span className="font-medium">12% 상승</span>
                    </div>
                    
                    {/* 데코레이션 라인 */}
                    <div className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-green-400/90 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          
          <AnimatedItem delay={0.4}>
            <div className="mt-16 bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 backdrop-blur-sm">
                      성공 사례
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white leading-tight">
                      "알고리즘 매매로<br/>운용 자산 <span className="text-primary">30% 증가</span>"
                    </h3>
                    
                    <div className="p-6 bg-black/40 rounded-xl relative mb-8 backdrop-blur-sm border border-white/10">
                      <div className="absolute -top-3 -left-3 text-4xl text-primary/20">"</div>
                      <p className="text-white/80 relative z-10 leading-relaxed">
                        알고포지의 김프 차익거래 시스템을 도입한 후, 24시간 안정적인 수익을 창출하고 있습니다. 특히 변동성이 큰 시장에서도 일관된 수익을 내는 것이 인상적입니다.
                      </p>
                      <div className="absolute -bottom-3 -right-3 text-4xl text-primary/20">"</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/20 rounded-full overflow-hidden flex items-center justify-center text-primary font-bold text-xl border border-primary/30">
                        김
                      </div>
                      <div>
                        <p className="font-medium text-white">김정훈 이사</p>
                        <p className="text-sm text-white/60">크립토 에셋 운용사</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white">구현 사례: 김프 차익거래 시스템</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <ul className="space-y-4">
                          {[
                            "국내외 거래소 간 스프레드 실시간 모니터링",
                            "최적의 진입/청산 포인트 자동 감지",
                            "멀티 스레드 주문 처리로 슬리피지 최소화",
                            "리스크 관리 모듈로 갑작스러운 변동성 대응"
                          ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="bg-primary/30 rounded-full p-1 mt-1 text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                          
                          <li className="flex items-start gap-3 mt-6 bg-primary/10 p-3 rounded-lg backdrop-blur-sm">
                            <div className="bg-primary rounded-full p-1 mt-1 text-black flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-bold text-primary">월평균 3.2% 안정적 수익 달성</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                        <div className="mb-4 flex justify-between items-center">
                          <h5 className="text-sm font-medium text-white/80">일 평균 수익률</h5>
                          <div className="flex items-center gap-1 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            <span>안정적</span>
                          </div>
                        </div>
                        
                        <ChartCard
                          title=""
                          data={DAILY_RETURN_DATA.data}
                          labels={DAILY_RETURN_DATA.labels}
                          color="#F1C40F"
                          fillColor="rgba(241, 196, 15, 0.1)"
                          borderColor="#F1C40F"
                          className="shadow-none"
                        />
                        
                        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                          <div className="bg-black/30 p-2 rounded-lg border border-white/5">
                            <p className="text-xs text-white/60 mb-1">평균</p>
                            <p className="text-xl font-bold text-white">+0.27%</p>
                          </div>
                          <div className="bg-black/30 p-2 rounded-lg border border-white/5">
                            <p className="text-xs text-white/60">최대</p>
                            <p className="text-sm font-bold text-primary">+0.33%</p>
                          </div>
                          <div className="bg-black/30 p-2 rounded-lg border border-white/5">
                            <p className="text-xs text-white/60">최소</p>
                            <p className="text-sm font-bold text-white/80">-0.10%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA 버튼 */}
              <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">
                <Link href="/solutions">
                  <Button 
                    variant="accent" 
                    size="lg"
                    className="w-full md:w-auto shadow-xl shadow-primary/30 hover:scale-105 transition-transform duration-300 text-black font-bold bg-primary h-12 text-lg relative overflow-hidden group"
                  >
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      모든 성공 사례 보기
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full md:w-auto border-white/20 text-white hover:bg-white/10 h-12 text-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      무료 상담 예약하기
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* 기술력 강조 섹션 */}
      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0">
          {/* 매트릭스 스타일 배경 */}
          <div className="absolute inset-0 bg-black z-0">
            <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23103562' fill-opacity='0.4'%3E%3Cpath d='M0 0h4v4H0V0zm4 4h4v4H4V4zm4 0h4v4H8V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm4 0h4v4h-4V4zm-28 4h4v4H0V8zm28 0h4v4h-4V8zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zm-28 4h4v4H0v-4zm28 0h4v4h-4v-4zM4 8h4v4H4V8zm4 0h4v4H8V8zm4 0h4v4h-4V8zm4 0h4v4h-4V8zm4 0h4v4h-4V8zm4 0h4v4h-4V8zM4 12h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 16h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 20h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 24h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 28h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 32h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zM4 36h4v4H4v-4zm4 0h4v4H8v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4zm4 0h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          {/* 움직이는 숫자 효과 */}
          <div className="absolute inset-0 overflow-hidden opacity-15">
            <div className="matrix-code text-green-500 font-mono">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="matrix-line" style={{ 
                  animationDelay: `${Math.random() * 5}s`,
                  left: `${Math.floor(Math.random() * 100)}%`
                }}>
                  {Array.from({ length: 20 }).map((_, j) => (
                    <div key={j} style={{ animationDelay: `${Math.random() * 2}s` }}>
                      {Math.random() > 0.5 ? '1' : '0'}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 코드 스타일 요소 왼쪽 */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-500/20 hidden lg:block z-0">
          <pre className="text-xs font-mono opacity-60">
{`function runAlgoTrading() {
  while(true) {
    const marketData = 
      getRealtimeData();
    
    const signals = 
      generateSignals(marketData);
    
    if(signals.shouldEnter) {
      executeOrder('BUY');
    }
    
    if(signals.shouldExit) {
      executeOrder('SELL');
    }
    
    monitorPositions();
    manageRisk();
    updateDashboard();
    
    sleep(1000); // 1초 대기
  }
}`}
          </pre>
        </div>
        
        {/* 코드 스타일 요소 오른쪽 */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-500/20 hidden lg:block z-0">
          <pre className="text-xs font-mono opacity-60">
{`class AlgoTradingStrategy:
  def __init__(self):
    self.positions = []
    self.balance = 0
    
  def analyze_market(self, data):
    # 시장 분석 로직
    return {
      'trend': self._detect_trend(data),
      'volatility': self._calc_volatility(data),
      'signal': self._generate_signal(data)
    }
    
  def execute_trades(self, signal):
    if signal == 'BUY':
      self._enter_position()
    elif signal == 'SELL':
      self._exit_position()
      
  def _detect_trend(self, data):
    # 추세 감지 알고리즘
    pass`}
          </pre>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedItem>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 shadow-lg mb-6">
                <span className="text-sm font-medium text-blue-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  투자의 새로운 패러다임
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading leading-tight text-shadow-lg">
                지금 바로 <span className="text-blue-400 drop-shadow-[0_2px_8px_rgba(59,130,246,0.7)]">시작</span>하세요
              </h2>
              
              <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                당신의 투자 아이디어를 자동화된 수익 시스템으로 바꿔드립니다.
                <span className="block mt-2 font-medium text-blue-200">지금 무료 상담을 신청하고 맞춤형 솔루션을 경험하세요.</span>
              </p>
            </AnimatedItem>
            
            <AnimatedItem delay={0.1}>
              <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl mb-10 border border-blue-900/50 max-w-2xl mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent opacity-70 rounded-lg"></div>
                  <div className="relative flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">무료 상담 및 백테스트</h3>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm border border-blue-500/30">
                      무료 제공
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3 group">
                    <div className="bg-blue-900/30 backdrop-blur-sm p-2 rounded-lg text-blue-400 flex-shrink-0 border border-blue-800/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1 text-white group-hover:text-blue-300 transition-colors duration-300">전략 분석 및 컨설팅</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        귀하의 투자 전략을 분석하고 자동화 가능성을 평가합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="bg-blue-900/30 backdrop-blur-sm p-2 rounded-lg text-blue-400 flex-shrink-0 border border-blue-800/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1 text-white group-hover:text-blue-300 transition-colors duration-300">무료 백테스트 보고서</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        지난 3년간의 데이터로 전략의 성과를 분석한 리포트를 제공합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="bg-blue-900/30 backdrop-blur-sm p-2 rounded-lg text-blue-400 flex-shrink-0 border border-blue-800/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1 text-white group-hover:text-blue-300 transition-colors duration-300">신속한 일정 조율</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        영업일 기준 48시간 이내 상담 일정을 확정해드립니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="bg-blue-900/30 backdrop-blur-sm p-2 rounded-lg text-blue-400 flex-shrink-0 border border-blue-800/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1 text-white group-hover:text-blue-300 transition-colors duration-300">정보 보안 약속</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        고객의 전략과 데이터는 엄격한 보안 프로토콜로 보호됩니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-700/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
                  <Link href="/contact">
                    <Button 
                      variant="accent" 
                      size="lg"
                      className="w-full shadow-xl shadow-blue-900/30 hover:scale-105 transition-transform duration-300 text-white font-bold bg-gradient-to-r from-blue-700 to-blue-500 h-14 text-lg relative overflow-hidden group cta-button-shine"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="flex items-center justify-center gap-2 relative z-10">
                        무료 상담 신청하기
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedItem>
            
            <AnimatedItem delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaChartLine size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">백테스트 무료 제공</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaRobot size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">24/7 모니터링</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <FaDatabase size={16} className="text-blue-400 pulse-glow" />
                  <span className="text-sm text-white/90">데이터 분석 리포트</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-800/30 hover-glow">
                  <svg className="w-4 h-4 text-blue-400 pulse-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span className="text-sm text-white/90">데이터 보안 보장</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/70 text-sm">
                  * 무료 상담은 최대 1시간 동안 제공되며, <span className="text-blue-400">48시간 이내</span>에 답변을 드립니다.
                </p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

