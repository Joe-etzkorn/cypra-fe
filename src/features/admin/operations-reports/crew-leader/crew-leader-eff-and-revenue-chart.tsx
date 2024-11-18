import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Title,
  PointElement,
  LinearScale,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(Tooltip, Title, PointElement, LinearScale);

interface DataPoint {
  x: number;
  y: number;
  label?: string;
  efficiency?: string;
  revenue?: string;
}

const CrewLeaderEfficiencyAndRevenueChart: React.FC = () => {
  const data: ChartData<"scatter", DataPoint[]> = {
    datasets: [
      {
        label: "Efficiency",
        data: [
          {
            x: 2.1,
            y: 118,
            label: "William T.",
            efficiency: "114%",
            revenue: "$2.49M",
          },
          { x: 2.2, y: 114 },
          { x: 2.3, y: 117 },
          // Add other data points here
        ],
        backgroundColor: (context) => {
          const yValue = (context.raw as DataPoint).y;
          return yValue >= 115 ? "#34c759" : "#ff3b30"; // Green for >= 115%, Red otherwise
        },
        pointRadius: 5,
      },
    ],
  };

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Revenue",
        },
        ticks: {
          callback: (value) => `$${value}M`,
        },
      },
      y: {
        title: {
          display: true,
          text: "Efficiency (%)",
        },
        min: 95,
        max: 127,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw as DataPoint;
            return `${dataPoint.label || ""}\nLabor Efficiency: ${
              dataPoint.efficiency || ""
            }\nEarned Revenue: ${dataPoint.revenue || ""}`;
          },
        },
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        cornerRadius: 4,
        padding: 10,
      },
    },
    elements: {
      point: {
        borderWidth: 2,
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

export default CrewLeaderEfficiencyAndRevenueChart;
