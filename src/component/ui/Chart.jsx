import React from "react";
import { Tooltip } from "recharts";

export function ChartContainer({ config, className, children }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function ChartTooltip({ content }) {
  return <Tooltip content={content} />;
}

export function ChartTooltipContent({ nameKey, hideLabel }) {c
  return ({ payload }) => {
    if (!payload || !payload.length) return null;

    const data = payload[0];
    return (
      <div className="bg-white p-2 shadow-md rounded-lg">
        {!hideLabel && <p className="text-sm font-medium">{data.name}</p>}
        <p className="text-sm">{`${data.value} ${nameKey}`}</p>
      </div>
    );
  };
}
