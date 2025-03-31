import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/Chart";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/Card";
import axios from "axios";

// Your custom month names array
const monthNames = [
  { id: 1, name: 'Jan' },
  { id: 2, name: 'Feb' },
  { id: 3, name: 'Mar' },
  { id: 4, name: 'Apr' },
  { id: 5, name: 'May' },
  { id: 6, name: 'Jun' },
  { id: 7, name: 'Jul' },
  { id: 8, name: 'Aug' },
  { id: 9, name: 'Sep' },
  { id: 10, name: 'Oct' },
  { id: 11, name: 'Nov' },
  { id: 12, name: 'Dec' }
];

// Skeleton component for loading state
const ChartSkeleton = () => (
  <div className="w-full h-[300px] animate-pulse bg-gray-100 rounded-lg"></div>
);

export const ActiveUseBarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentYear = new Date().getFullYear(); // 2025
  const [selectedYear] = useState(currentYear); // Only current year available

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("Authentication failed. Please log in again.");
        }

        const response = await axios.get(
          `https://api.baronsandqueens.com/api/admin/active-users/this-year`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          // Transform API data to match chart format with month names from your array
          const transformedData = response.data.data.map((item, index) => ({
            month: monthNames[index].name, // Using the name from your monthNames array
            active_users: item.active_users,
          }));
          console.log(transformedData);
          
          setChartData(transformedData);
        } else {
          throw new Error(response.data.message || "Failed to load active users data");
        }
      } catch (err) {
        console.error("Error fetching active users:", err);
        setError(err.message || "Failed to load active users data");
      } finally {
        setLoading(false);
      }
    };

    fetchActiveUsers();
  }, [selectedYear]);

  if (error) {
    return (
      <Card className="bg-white shadow-md rounded-lg w-full xl:w-3/6 shadow-[#0D0A2C14]">
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 p-4">{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-md rounded-lg w-full xl:w-3/6 shadow-[#0D0A2C14]">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Monthly Active Users</CardTitle>
        <div className="flex items-center gap-2">
        <select 
            className="border-[1px] py-1 px-3 outline-none rounded-lg"
            value={selectedYear}
            disabled
          >
            <option value={currentYear}>{currentYear}</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-between flex-col pl-28 overflow-x-auto">
        {loading ? (
          <ChartSkeleton />
        ) : (
          <ChartContainer>
            <BarChart
              width={600}
              height={300}
              data={chartData}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              barCategoryGap="15%"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                allowDecimals={false}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    nameKey="active_users"
                    labelKey="month"
                    hideLabel={false}
                    formatter={(value) => [`${value} users`, "Active"]}
                  />
                }
              />
              <Bar dataKey="active_users" fill="#4A90E2" radius={[4, 4, 0, 0]}>
                <LabelList
                  dataKey="active_users"
                  position="top"
                  fontSize={12}
                  className="fill-black"
                  formatter={(value) => (value > 0 ? value : null)}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="text-gray-600 text-sm">
      Showing current year ({currentYear}) active users
      </CardFooter>
    </Card>
  );
};

export default ActiveUseBarChart;