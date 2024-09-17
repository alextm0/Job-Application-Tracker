import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

interface ChartsProps {
  statusChartData: {
    labels: string[];
    datasets: any[];
  };
  applicationsOverTimeData: {
    labels: string[];
    datasets: any[];
  };
  topCompaniesData: {
    labels: string[];
    datasets: any[];
  };
}

const Charts: React.FC<ChartsProps> = ({ statusChartData, applicationsOverTimeData, topCompaniesData }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"> {/* Stacks the charts on smaller screens */}
      {/* Doughnut Chart for Application Status Breakdown */}
      <div className="bg-white dark:bg-gray-800 shadow-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Application Status Breakdown</h2>
        <div className="relative h-64 w-full"> {/* Responsive width and height */}
          <Doughnut data={statusChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Line Chart for Applications Over Time */}
      <div className="bg-white dark:bg-gray-800 shadow-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Applications Over Time</h2>
        <div className="relative h-64 w-full"> {/* Responsive width and height */}
          <Line data={applicationsOverTimeData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Bar Chart for Top Companies */}
      <div className="bg-white dark:bg-gray-800 shadow-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Top Companies</h2>
        <div className="relative h-64 w-full"> {/* Responsive width and height */}
          <Bar data={topCompaniesData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
