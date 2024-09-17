import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

interface ChartComponentProps {
  type: 'doughnut' | 'line' | 'bar';
  data: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative h-64 w-full"> {/* Ensure the charts are responsive */}
      {type === 'doughnut' && <Doughnut data={data} options={options} />}
      {type === 'line' && <Line data={data} options={options} />}
      {type === 'bar' && <Bar data={data} options={options} />}
    </div>
  );
};

export default ChartComponent;
