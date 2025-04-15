'use client';

import { useState } from 'react';
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
  ChartOptions,
} from 'chart.js';

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

interface ChartCardProps {
  title: string;
  description?: string;
  className?: string;
  data: number[];
  labels: string[];
  color?: string;
  fillColor?: string;
  borderColor?: string;
}

const ChartCard = ({
  title,
  description,
  className = '',
  data,
  labels,
  color = '#003366',
  fillColor = 'rgba(0, 51, 102, 0.1)',
  borderColor = '#003366',
}: ChartCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor,
        backgroundColor: fillColor,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: color,
        pointHoverBackgroundColor: color,
        pointBorderColor: '#fff',
        pointHoverBorderColor: '#fff',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        min: Math.min(...data) * 0.9,
        max: Math.max(...data) * 1.1,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-card ${
        isHovered ? 'shadow-card-hover transform scale-[1.02]' : ''
      } transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 font-heading">{title}</h3>
        {description && <p className="text-gray-600 mb-4 text-sm">{description}</p>}
        
        <div className="h-40 w-full relative my-4">
          <Line data={chartData} options={options} />
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
            <span className="text-sm text-gray-500">시작: {data[0].toFixed(2)}</span>
          </div>
          <span className="text-sm font-medium" style={{ color }}>
            현재: {data[data.length - 1].toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartCard; 