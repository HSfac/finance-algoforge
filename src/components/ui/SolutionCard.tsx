'use client';

import { useState } from 'react';
import Button from './Button';

// 화살표 아이콘 컴포넌트 정의
const ArrowRightIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
  </svg>
);

interface SolutionCardProps {
  title: string;
  target: string;
  duration: string;
  features: string[];
  returns: string;
  image?: string;
  stack?: string[];
}

const SolutionCard = ({
  title,
  target,
  duration,
  features,
  returns,
  image,
  stack = [],
}: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-card ${
        isHovered ? 'shadow-card-hover transform scale-[1.02]' : ''
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-50" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 font-heading">{title}</h3>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">투자 대상</span>
            <span className="font-medium">{target}</span>
          </div>
          
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">개발 기간</span>
            <span className="font-medium">{duration}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">수익률</span>
            <span className="font-medium text-secondary">{returns}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase text-gray-600 mb-2">주요 기능</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm">• {feature}</li>
            ))}
          </ul>
        </div>
        
        {stack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm uppercase text-gray-600 mb-2">개발 스택</h4>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Button 
          variant="outline" 
          size="sm"
          className="w-full mt-2 flex justify-between items-center"
        >
          <span>자세히 보기</span>
          <ArrowRightIcon size={14} />
        </Button>
      </div>
    </div>
  );
};

export default SolutionCard; 