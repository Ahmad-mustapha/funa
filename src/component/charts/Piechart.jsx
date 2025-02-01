import { useState, useEffect } from "react";
import { PieChart, Pie } from "recharts";
import { Card, CardContent } from "../ui/Card";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "hsl(220, 90%, 56%)" },
  { browser: "safari", visitors: 200, fill: "hsl(33, 90%, 56%)" },
  { browser: "firefox", visitors: 200, fill: "hsl(14, 99%, 56%)" },
];

export function Component() {
  const [chartSize, setChartSize] = useState(360); // Default size
  const [radius, setRadius] = useState(120); // Default outer radius

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 400) {
        setChartSize(200);
        setRadius(70);
      } else if (window.innerWidth < 640) {
        setChartSize(280);
        setRadius(90);
      } else {
        setChartSize(360);
        setRadius(120);
      }
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0 flex justify-center">
        <PieChart width={chartSize} height={chartSize}>
          <Pie
            className="outline-none"
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            cx="50%"
            cy="50%"
            stroke="none"
            strokeWidth={0}
            outerRadius={radius} // ✅ Now using dynamic radius
            fill="#8884d8"
            label={({ value, cx, cy, midAngle, innerRadius, outerRadius }) => {
              const RADIAN = Math.PI / 180;
              // Calculate the label's position
              const adjustedRadius = outerRadius * 0.5; // ✅ Adjust label position based on size
              const x = cx + adjustedRadius * Math.cos(-midAngle * RADIAN);
              const y = cy + adjustedRadius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="12px"
                  fontWeight="500"
                >
                  {value + "%"}
                </text>
              );
            }}
          />
        </PieChart>
      </CardContent>
    </Card>
  );
}
