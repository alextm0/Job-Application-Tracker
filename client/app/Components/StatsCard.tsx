import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, bgColor, iconColor }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md h-44 flex items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center h-full w-full p-4">
        <div className={`p-4 rounded-full ${bgColor} flex items-center justify-center`}>
          <div className={`${iconColor} h-6 w-6 flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
