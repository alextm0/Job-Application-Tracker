import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon } from "lucide-react";

interface GeographicDistributionProps {
  locationCounts: Record<string, number>;
}

const GeographicDistribution: React.FC<GeographicDistributionProps> = ({ locationCounts }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
          Geographic Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 overflow-y-auto max-h-64"> {/* Scrollable list */}
          {Object.entries(locationCounts).map(([location, count]) => (
            <li key={location} className="flex items-center justify-between">
              <span className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
                {location}
              </span>
              <Badge>{count}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default GeographicDistribution;
