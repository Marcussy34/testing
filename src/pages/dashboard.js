import React from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  CreditCard,
  Activity,
  Home,
  FileText,
  BarChart,
  Settings,
  HelpCircle,
  Building,
  ChevronDown,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

// Mock data for the dashboard
const stats = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    change: "+12.5%",
    trend: "up",
    subtitle: "Trending up this month",
    description: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    value: "1,234",
    change: "-20%",
    trend: "down",
    subtitle: "Down 20% this period",
    description: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    change: "+12.5%",
    trend: "up",
    subtitle: "Strong user retention",
    description: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    change: "+4.5%",
    trend: "up",
    subtitle: "Steady performance increase",
    description: "Meets growth projections",
  },
];

const tableData = [
  {
    id: 1,
    header: "Cover page",
    sectionType: "Cover page",
    status: "In Progress",
    target: 10,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    header: "Table of contents",
    sectionType: "Table of contents",
    status: "Done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    id: 3,
    header: "Executive summary",
    sectionType: "Narrative",
    status: "Done",
    target: 10,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    id: 4,
    header: "Technical approach",
    sectionType: "Narrative",
    status: "Done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashputov",
  },
  {
    id: 5,
    header: "Design",
    sectionType: "Narrative",
    status: "In Progress",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashputov",
  },
  {
    id: 6,
    header: "Capabilities",
    sectionType: "Narrative",
    status: "In Progress",
    target: 20,
    limit: 8,
    reviewer: "Jamik Tashputov",
  },
  {
    id: 7,
    header: "Integration with existing systems",
    sectionType: "Narrative",
    status: "In Progress",
    target: 19,
    limit: 21,
    reviewer: "Jamik Tashputov",
  },
  {
    id: 8,
    header: "Innovation and Advantages",
    sectionType: "Narrative",
    status: "Done",
    target: 25,
    limit: 26,
    reviewer: "Assign reviewer...",
  },
  {
    id: 9,
    header: "Overview of EMR's Innovative Solutions",
    sectionType: "Technical content",
    status: "Done",
    target: 7,
    limit: 23,
    reviewer: "Assign reviewer...",
  },
  {
    id: 10,
    header: "Advanced Algorithms and Machine Learning",
    sectionType: "Narrative",
    status: "Done",
    target: 30,
    limit: 28,
    reviewer: "Assign reviewer...",
  },
];

// Generate chart data points for the area chart
const generateChartData = () => {
  const months = [
    "Apr 5",
    "Apr 12",
    "Apr 18",
    "Apr 24",
    "Apr 30",
    "May 6",
    "May 12",
    "May 18",
    "May 24",
    "May 30",
    "Jun 5",
    "Jun 11",
    "Jun 17",
    "Jun 23",
    "Jun 30",
  ];
  return months.map((month, index) => ({
    month,
    value: Math.floor(Math.random() * 100) + 20,
  }));
};

const chartData = generateChartData();

// Sidebar Navigation Component
const AppSidebar = () => {
  const navigation = [
    { name: "Home", icon: Home, current: false },
    { name: "Dashboard", icon: BarChart3, current: true },
    { name: "Lifecycle", icon: Activity, current: false },
    { name: "Analytics", icon: BarChart, current: false },
    { name: "Projects", icon: FileText, current: false },
    { name: "Team", icon: Users, current: false },
  ];

  const documents = [
    { name: "Data Library", current: false },
    { name: "Reports", current: false },
    { name: "Word Assistant", current: false },
    { name: "More", current: false },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900">
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-white" />
          <span className="text-lg font-semibold text-white">Acme Inc.</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-gray-600 text-white hover:bg-gray-800"
        >
          Quick Create
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`${
              item.current
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </a>
        ))}

        {/* Documents Section */}
        <div className="pt-6">
          <div className="px-2 pb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Documents
            </p>
          </div>
          {documents.map((item) => (
            <a
              key={item.name}
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4">
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
          Settings
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0" />
          Get Help
        </a>
      </div>
    </div>
  );
};

// Simple Chart Component (SVG-based area chart)
const AreaChart = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const width = 800;
  const height = 200;
  const padding = 40;

  const xStep = (width - 2 * padding) / (data.length - 1);
  const yScale = (height - 2 * padding) / maxValue;

  // Create path for the area
  let pathData = `M ${padding} ${height - padding - data[0].value * yScale}`;

  data.forEach((point, index) => {
    if (index > 0) {
      const x = padding + index * xStep;
      const y = height - padding - point.value * yScale;
      pathData += ` L ${x} ${y}`;
    }
  });

  // Close the area path
  pathData += ` L ${padding + (data.length - 1) * xStep} ${height - padding}`;
  pathData += ` L ${padding} ${height - padding} Z`;

  return (
    <div className="w-full h-64 bg-gray-800 rounded-lg p-4">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* Grid lines */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 20"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Area fill */}
        <path
          d={pathData}
          fill="url(#gradient)"
          stroke="#60A5FA"
          strokeWidth="2"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#60A5FA", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#60A5FA", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        {/* Data points */}
        {data.map((point, index) => {
          const x = padding + index * xStep;
          const y = height - padding - point.value * yScale;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill="#60A5FA"
              stroke="#1E40AF"
              strokeWidth="2"
            />
          );
        })}

        {/* X-axis labels */}
        {data.map((point, index) => {
          if (index % 2 === 0) {
            // Show every other label
            const x = padding + index * xStep;
            return (
              <text
                key={`label-${index}`}
                x={x}
                y={height - 10}
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize="12"
              >
                {point.month}
              </text>
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Documents
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Theme: Default
              </div>
              <ModeToggle />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.title}
                  </CardTitle>
                  <div
                    className={`text-xs ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.subtitle}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chart Section */}
          <Card className="mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">
                    Total Visitors
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total for the last 3 months
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gray-100 dark:bg-gray-700"
                  >
                    Last 3 months
                  </Button>
                  <Button variant="outline" size="sm">
                    Last 30 days
                  </Button>
                  <Button variant="outline" size="sm">
                    Last 7 days
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AreaChart data={chartData} />
            </CardContent>
          </Card>

          {/* Table Section */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gray-100 dark:bg-gray-700"
                  >
                    Outline
                  </Button>
                  <Button variant="ghost" size="sm">
                    Past Performance 3
                  </Button>
                  <Button variant="ghost" size="sm">
                    Key Personnel 2
                  </Button>
                  <Button variant="ghost" size="sm">
                    Focus Documents
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    📊 Customize Columns
                  </Button>
                  <Button variant="outline" size="sm">
                    + Add Section
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200 dark:border-gray-700">
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Header
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Section Type
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Status
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Target
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Limit
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Reviewer
                    </TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow
                      key={row.id}
                      className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-white">
                        {row.header}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-300">
                        {row.sectionType}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            row.status === "Done" ? "default" : "secondary"
                          }
                          className={`${
                            row.status === "Done"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-900 dark:text-white">
                        {row.target}
                      </TableCell>
                      <TableCell className="text-gray-900 dark:text-white">
                        {row.limit}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-300">
                        {row.reviewer}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
