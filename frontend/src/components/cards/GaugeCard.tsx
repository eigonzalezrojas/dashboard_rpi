"use client";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface GaugeCardProps {
  label: string;
  value: number;
  unit?: string;
  min?: number;
  max?: number;
  color?: string;
}

export default function GaugeCard({
  label,
  value,
  unit = "",
  min = 0,
  max = 100,
  color = "#3b82f6",
}: GaugeCardProps) {
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-center">
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="w-24 h-24">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#e5e7eb",
            textColor: "#1f2937",
          })}
        >
          <div className="text-center text-sm font-semibold">
            {value} {unit}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
