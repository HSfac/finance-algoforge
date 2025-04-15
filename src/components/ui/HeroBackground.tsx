'use client';

import { useRef, useEffect } from 'react';

interface HeroBackgroundProps {
  className?: string;
}

const HeroBackground = ({ className = '' }: HeroBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 크기 설정
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
    };

    // 초기 설정
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 노드 데이터 초기화
    const nodeCount = 80; // 노드 수 증가
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      type: 'normal' | 'data' | 'special'; // 노드 타입 추가
      blinkTimer?: number; // 깜빡임 타이머
      dataValue?: number; // 데이터 값 (그래프에 표시)
    }[] = [];

    // 색상 배열
    const colors = [
      'rgba(255, 255, 255, 0.8)',  // 더 밝은 흰색
      'rgba(255, 255, 255, 0.9)',
      'rgba(255, 255, 255, 1.0)',
      'rgba(255, 204, 0, 0.9)',    // 더 밝은 노랑
      'rgba(255, 204, 0, 1.0)',
      'rgba(77, 121, 255, 0.9)',   // 더 밝은 파랑
    ];

    // 배경에 표시할 데이터 패턴 (시계열 데이터처럼)
    const dataPattern = Array.from({ length: 24 }, () => Math.random() * 0.8 + 0.2);

    // 노드 생성
    for (let i = 0; i < nodeCount; i++) {
      // 80%는 일반 노드, 15%는 데이터 노드, 5%는 특별 노드
      const nodeType = Math.random() < 0.8 
        ? 'normal' 
        : (Math.random() < 0.75 ? 'data' : 'special');
      
      // 노드 타입에 따라 색상 선택
      let colorIndex;
      if (nodeType === 'normal') {
        colorIndex = Math.floor(Math.random() * 3); // 흰색 계열
      } else if (nodeType === 'data') {
        colorIndex = 3 + Math.floor(Math.random() * 2); // 액센트 색상
      } else {
        colorIndex = 5; // 특별 노드는 primary 색상
      }

      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: nodeType === 'special' ? Math.random() * 3 + 2 : Math.random() * 2 + 1,
        color: colors[colorIndex],
        type: nodeType,
        blinkTimer: nodeType === 'special' ? Math.random() * 100 : undefined,
        dataValue: nodeType === 'data' ? Math.random() : undefined
      });
    }

    // 애니메이션 설정
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 그라데이션 배경 효과
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 1.5
      );
      gradient.addColorStop(0, 'rgba(77, 121, 255, 0.15)'); // 더 밝은 primary 색상
      gradient.addColorStop(1, 'rgba(0, 51, 102, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 격자 패턴 그리기 (알고리즘 느낌)
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';  // 더 밝은 그리드
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 데이터 그래프 그리기 (배경)
      if (canvas.width > 768) { // 모바일에서는 생략
        const graphHeight = 80;
        const graphY = canvas.height - 100;
        const graphWidth = Math.min(500, canvas.width * 0.4);
        const graphX = 50;
        
        ctx.strokeStyle = 'rgba(255, 204, 0, 0.25)';  // 더 밝은 그래프 선
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // 그래프 베이스라인
        ctx.moveTo(graphX, graphY);
        ctx.lineTo(graphX + graphWidth, graphY);
        ctx.stroke();
        
        // 데이터 라인
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 204, 0, 0.4)';  // 더 밝은 데이터 라인
        ctx.lineWidth = 1.5;
        
        dataPattern.forEach((value, index) => {
          const x = graphX + (index / (dataPattern.length - 1)) * graphWidth;
          const y = graphY - value * graphHeight;
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();
        
        // 움직이는 커서 포인트
        const cursorIndex = Math.floor((frameCount % 240) / 10) % dataPattern.length;
        const cursorX = graphX + (cursorIndex / (dataPattern.length - 1)) * graphWidth;
        const cursorY = graphY - dataPattern[cursorIndex] * graphHeight;
        
        ctx.fillStyle = 'rgba(255, 204, 0, 0.9)';  // 더 밝은 커서 포인트
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 노드 그리기
      nodes.forEach((node, index) => {
        // 특별 노드는 깜빡임 효과 추가
        if (node.type === 'special' && node.blinkTimer !== undefined) {
          node.blinkTimer = (node.blinkTimer + 1) % 100;
          if (node.blinkTimer > 50) {
            ctx.fillStyle = 'rgba(77, 121, 255, 0.3)';  // 더 밝은 특별 노드
          } else {
            ctx.fillStyle = node.color;
          }
        } else {
          ctx.fillStyle = node.color;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // 데이터 노드는 작은 데이터 표시 추가
        if (node.type === 'data' && node.dataValue !== undefined) {
          // 작은 데이터 선 그리기
          const lineLength = 20 * node.dataValue;
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 0.8;  // 더 두꺼운 선
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(node.x, node.y - lineLength);
          ctx.stroke();
          
          // 데이터 포인트 그리기
          ctx.fillStyle = 'rgba(255, 204, 0, 0.8)';  // 더 밝은 데이터 포인트
          ctx.beginPath();
          ctx.arc(node.x, node.y - lineLength, 1.5, 0, Math.PI * 2);  // 더 큰 포인트
          ctx.fill();
        }

        // 특별 노드는 광선 효과 추가
        if (node.type === 'special') {
          const glowRadius = 8 + Math.sin(frameCount * 0.05 + index) * 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(77, 121, 255, 0.25)';  // 더 밝은 광선 효과
          ctx.fill();
        }

        // 노드 위치 업데이트
        node.x += node.vx;
        node.y += node.vy;

        // 경계 확인
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // 연결선 그리기
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 180;

          if (distance < maxDistance) {
            // 거리에 따른 투명도 설정
            const opacity = (1 - distance / maxDistance) * 0.5;
            
            // 노드 타입에 따른 연결선 색상 설정
            let strokeColor;
            const isSpecialConnection = nodes[i].type === 'special' || nodes[j].type === 'special';
            const isDataConnection = nodes[i].type === 'data' || nodes[j].type === 'data';
            
            if (isSpecialConnection) {
              strokeColor = `rgba(77, 121, 255, ${opacity * 1.5})`;  // 더 밝은 연결선
            } else if (isDataConnection) {
              strokeColor = `rgba(255, 204, 0, ${opacity * 1.5})`;  // 더 밝은 연결선
            } else {
              strokeColor = `rgba(255, 255, 255, ${opacity * 1.5})`;  // 더 밝은 연결선
            }
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = (1 - distance / maxDistance) * 1.5;  // 더 두꺼운 연결선
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            
            // 데이터 흐름 애니메이션 (특별 노드 연결에만)
            if (isSpecialConnection && frameCount % 100 < 50 && distance < 120) {
              const flowPosition = (frameCount % 50) / 50;
              const flowX = nodes[i].x + (nodes[j].x - nodes[i].x) * flowPosition;
              const flowY = nodes[i].y + (nodes[j].y - nodes[i].y) * flowPosition;
              
              ctx.fillStyle = 'rgba(77, 121, 255, 1.0)';  // 더 밝은 데이터 흐름
              ctx.beginPath();
              ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);  // 더 큰 포인트
              ctx.fill();
            }
          }
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 ${className}`}
    />
  );
};

export default HeroBackground; 