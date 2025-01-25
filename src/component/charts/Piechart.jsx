import { PieChart, Pie } from "recharts";
import { Card, CardContent } from "../ui/Card";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "hsl(220, 90%, 56%)" },
  { browser: "safari", visitors: 200, fill: "hsl(33, 90%, 56%)" },
  { browser: "firefox", visitors: 200, fill: "hsl(14, 99%, 56%)" },
];

export function Component() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <PieChart width={360} height={360}>
          <Pie
            className="outline-none"
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ value, cx, cy, midAngle, innerRadius, outerRadius }) => {
              const RADIAN = Math.PI / 180;
              // Calculate the label's position
              const radius = outerRadius - 80; // Adjust this value to fine-tune label position
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="16px"
                  fontWeight="bold"
                >
                  {value}
                </text>
              );
            }}
          />
        </PieChart>
      </CardContent>
    </Card>
  );
}
