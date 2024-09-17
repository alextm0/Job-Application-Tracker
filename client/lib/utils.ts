import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Application } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const filterApplications = (applications: Application[], searchTerm: string) => {
  return applications.filter(
    (app) =>
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const calculateStatistics = (applications: Application[]) => {
  const totalApplications = applications.length;

  const statusCounts = applications.reduce((acc: Record<string, number>, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  const applicationsByMonth = applications.reduce((acc: Record<string, number>, app) => {
    const month = new Date(app.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const topCompanies = applications.reduce((acc: Record<string, number>, app) => {
    acc[app.company] = (acc[app.company] || 0) + 1;
    return acc;
  }, {});

  const sortedTopCompanies = Object.entries(topCompanies)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const locationCounts = applications.reduce((acc: Record<string, number>, app) => {
    acc[app.location] = (acc[app.location] || 0) + 1;
    return acc;
  }, {});

  return {
    totalApplications,
    statusCounts,
    applicationsByMonth,
    sortedTopCompanies,
    locationCounts,
  };
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'applied':
      return 'bg-blue-500 text-white';
    case 'interviewing':
      return 'bg-yellow-500 text-white';
    case 'offered':
      return 'bg-green-500 text-white';
    case 'rejected':
      return 'bg-red-500 text-white';
  }
};

export const handleExport = (appArray : any) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    "Company,Position,Status,Date,Location\n" +
    appArray
      .map(
        (app : Application) =>
          `${app.company},${app.position},${app.status},${app.date},${app.location}`
      )
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "job_applications.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const capitalizeFirstLetter = (str : string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
