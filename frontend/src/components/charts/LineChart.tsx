"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface LineChartProps {
  labels: string[];
  data: number[];
  label: string;
}

export default function LineChart({ labels, data, label }: LineChartProps) {
  return (
    <div className="bg-white rounded shadow p-4">
      <Line
        data={{
          labels,
          datasets: [
            {
              label,
              data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
}
