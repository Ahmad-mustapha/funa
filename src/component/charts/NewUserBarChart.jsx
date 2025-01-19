import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/Chart";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/Card";

const chartData = [
  { month: "M", visitors: 500 },
  { month: "T", visitors: 700 },
  { month: "W", visitors: 650 },
  { month: "Th", visitors: 900 },
  { month: "F", visitors: 750 },
  { month: "S", visitors: 750 },
  { month: "Su", visitors: 750 },
];

export const NewUserBarChart = () => {
  return (
    <Card className="bg-white shadow-md rounded-lg w-3/6">
      <CardHeader className='flex items-center justify-between'>
        <CardTitle>New User</CardTitle>
        <div className="flex items-center gap-2">
          <select name="" id="">
            <option value="">Filter</option>
            <option value=""></option>
          </select>
          <select name="" id="">
            <option value="">Filter</option>
            <option value=""></option>
          </select>
        </div>
      </CardHeader>
      <CardContent className='w-full'>
        <ChartContainer>
          <BarChart
            width={400}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            barCategoryGap="30%" // Add space between bars
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              tickLine={false} // Remove tick lines for cleaner look
              axisLine={false} // Remove axis line for cleaner look
              tick={{ fontSize: 12 }} // Customize tick font size
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="visitors"
                  hideLabel={false}
                />
              }
            />
            {/* <Bar dataKey="visitors" fill="#4A90E2" radius={4} /> */}
            <Bar dataKey="visitors" fill="#4A90E2" radius={4}>
              <LabelList dataKey="visitors" position="top" fontSize={12} className="fill-black" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-gray-600">Showing data for 2024</CardFooter>
    </Card>
  );
};

export default NewUserBarChart;
