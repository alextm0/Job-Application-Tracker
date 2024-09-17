"use client";
import { useState, useEffect } from "react";
import {
  PlusIcon,
  DownloadIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Modal from "@/app/Components/Modal"; // Import Modal component
import AddApplicationForm from "@/app/Components/AddApplicationForm";
import ApplicationTable from "@/app/Components/ApplicationTable";
import GeographicDistribution from "@/app/Components/GeographicDistribution";
import ChartComponent from "@/app/Components/ChartComponent";
import { Application } from "@/lib/types";
import {
  filterApplications,
  calculateStatistics,
  handleExport,
  capitalizeFirstLetter,
} from "@/lib/utils";

// Import Chart.js components
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import StatsCard from "./StatsCard";

// Register the components with Chart.js
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps {
  initialData: Application[];
}

import { useUserContext } from "@/context/userContext";
import { useApplications } from "@/context/applicationContext";

const Dashboard: React.FC<DashboardProps> = ({ initialData }) => {
  const { user } = useUserContext();
  const {
    applications,
    getApplications,
    openModalForAdd,
    modalMode, // Get modalMode from context
    closeModal,
    setApplications,
    isEditing,
  } = useApplications();

  const applied = initialData.filter((app) => app.status === "applied").length;
  const interviewing = initialData.filter(
    (app) => app.status === "interviewing"
  ).length;
  const offered = initialData.filter((app) => app.status === "offered").length;
  const rejected = initialData.filter(
    (app) => app.status === "rejected"
  ).length;
  const total = applied + interviewing + offered + rejected;

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setApplications(initialData);
  }, [initialData]);

  // Filter applications based on search term
  const filteredApplications = filterApplications(applications, searchTerm);

  // Calculate statistics
  const {
    totalApplications,
    statusCounts,
    applicationsByMonth,
    sortedTopCompanies,
    locationCounts,
  } = calculateStatistics(applications);

  // Prepare data for charts
  const statusChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const applicationsOverTimeData = {
    labels: Object.keys(applicationsByMonth),
    datasets: [
      {
        label: "Applications",
        data: Object.values(applicationsByMonth),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const topCompaniesData = {
    labels: sortedTopCompanies.map(([company]) => company),
    datasets: [
      {
        label: "Applications",
        data: sortedTopCompanies.map(([, count]) => count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Select up to 3 statuses to display alongside Total Applications
  const statusesToDisplay = ["applied", "interviewing", "offered", "rejected"];

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex flex-wrap justify-center sm:justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
            Job Application Tracker
          </h1>
          <div className="flex flex-wrap gap-2 mt-6 sm:mt-0">
            {/* Open modal for adding a new application */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              onClick={openModalForAdd} // Trigger modal opening for adding
            >
              <PlusIcon className="mr-2 h-4 w-4" /> Add Application
            </Button>
            <Button
              variant="outline"
              onClick={() => handleExport(applications)}
              className="w-full sm:w-auto"
            >
              <DownloadIcon className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </header>

        {/* Name of the user */}
        <div className="px-4 mb-8">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Welcome,
            <span className="text-blue-500 dark:text-blue-300">
              {" "}
              {user?.name}!
            </span>
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-5 mb-8">
          <StatsCard
            title="Total Applications"
            value={totalApplications}
            icon={<BriefcaseIcon className="h-6 w-6" />}
            bgColor="bg-blue-50 dark:bg-blue-800"
            iconColor="text-blue-500 dark:text-blue-300"
          />

          {/* Status Cards */}
          {statusesToDisplay.map((status) => {
            let count;
            let icon;
            let bgColor;
            let iconColor;
            switch (status) {
              case "applied":
                icon = <ClockIcon className="h-6 w-6" />;
                bgColor = "bg-yellow-50 dark:bg-yellow-800";
                iconColor = "text-yellow-500 dark:text-yellow-300";
                count = applied;
                break;
              case "interviewing":
                icon = <ClockIcon className="h-6 w-6" />;
                bgColor = "bg-purple-50 dark:bg-purple-800";
                iconColor = "text-purple-500 dark:text-purple-300";
                count = interviewing;
                break;
              case "offered":
                icon = <CheckCircleIcon className="h-6 w-6" />;
                bgColor = "bg-green-50 dark:bg-green-800";
                iconColor = "text-green-500 dark:text-green-300";
                count = offered;
                break;
              case "rejected":
                icon = <XCircleIcon className="h-6 w-6" />;
                bgColor = "bg-red-50 dark:bg-red-800";
                iconColor = "text-red-500 dark:text-red-300";
                count = rejected;
                break;
              default:
                icon = <BriefcaseIcon className="h-6 w-6" />;
                bgColor = "bg-gray-50 dark:bg-gray-800";
                iconColor = "text-gray-500 dark:text-gray-300";
                count = applied + interviewing + offered + rejected;
                break;
            }

            return (
              <StatsCard
                key={status}
                title={capitalizeFirstLetter(status)}
                value={count}
                icon={icon}
                bgColor={bgColor}
                iconColor={iconColor}
              />
            );
          })}
        </div>

        {/* Charts and Geographic Distribution */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-8">
          {" "}
          {/* Stacks on mobile */}
          {/* Application Status Breakdown */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                Application Status Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64">
                <ChartComponent type="doughnut" data={statusChartData} />
              </div>
            </CardContent>
          </Card>
          {/* Applications Over Time */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                Applications Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64">
                <ChartComponent type="line" data={applicationsOverTimeData} />
              </div>
            </CardContent>
          </Card>
          {/* Top Companies */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                Top Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64">
                <ChartComponent type="bar" data={topCompaniesData} />
              </div>
            </CardContent>
          </Card>
          {/* Geographic Distribution */}
          <GeographicDistribution locationCounts={locationCounts} />
        </div>

        {/* Application Table */}
        <div className="mb-8">
          <ApplicationTable
            applications={filteredApplications}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <Modal />
      </div>
    </div>
  );
};

export default Dashboard;
