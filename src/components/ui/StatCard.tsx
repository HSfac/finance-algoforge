'use client';

import { useState } from 'react';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: ReactNode;
  subtitle?: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, subtitle, change, icon, className = '' }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-card ${
        isHovered ? 'shadow-card-hover transform scale-[1.02]' : ''
      } transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold font-heading">{value}</h3>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>

      {change && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span
            className={`inline-flex items-center text-sm ${
              change.positive ? 'text-secondary' : 'text-red-500'
            }`}
          >
            {change.positive ? '↑' : '↓'} {change.value}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard; 