"use client";
import ReactSpeedometer from "react-d3-speedometer";

interface GaugeNeedleCardProps {
  label: string;
  value: number;
  unit?: string;
  max: number;
  min?: number;
  segments?: number;
}

export default function GaugeNeedleCard({
  label,
  value,
  unit = "",
  min = 0,
  max,
  segments = 5,
}: GaugeNeedleCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="w-full flex justify-center">
        <ReactSpeedometer
            value={value}
            minValue={min}
            maxValue={max}
            segments={segments}
            width={200}
            height={130}
            needleColor="#1e3a8a"
            needleTransitionDuration={1000}
            currentValueText={`${Math.round(value)} ${unit}`}
            ringWidth={20}
            customSegmentStops={[min, (min + max) / 3, (2 * max) / 3, max]}
            segmentColors={["#ef4444", "#facc15", "#22c55e"]}
            valueFormat="d"
            />
      </div>
    </div>
  );
}
