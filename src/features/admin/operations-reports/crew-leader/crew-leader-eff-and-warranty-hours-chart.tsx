import { currencyFormat } from "@utils/common";
import { Spin } from "antd";
import {
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Scatter } from "react-chartjs-2";

ChartJS.register(Tooltip, Title, PointElement, LinearScale);

interface CrewLeaderEffAndWarrantyHoursChartProps {
  data: ChartData<"scatter">;
  loading: boolean;
}

const CrewLeaderEffAndWarrantyHoursChart: React.FC<
  CrewLeaderEffAndWarrantyHoursChartProps
> = ({ data, loading }) => {
  if (loading) {
    return <Spin className="flex justify-center items-center size-full" />;
  }

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false, // Disable default tooltip
        external: (context: any) => {
          // Custom Tooltip Logic
          const tooltipModel = context.tooltip;

          // Select the custom tooltip container or create it if not exists
          let tooltipEl = document.getElementById("chartjs-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.background = "white";
            tooltipEl.style.borderRadius = "16px";
            tooltipEl.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            tooltipEl.style.padding = "10px";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.fontFamily = "Arial, sans-serif";
            tooltipEl.style.fontSize = "12px";
            tooltipEl.style.color = "#333";
            document.body.appendChild(tooltipEl);
          }

          // Hide tooltip if necessary
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          // Set tooltip data
          if (tooltipModel?.body) {
            const dataPoint = tooltipModel?.dataPoints?.[0]?.raw;
            tooltipEl.innerHTML = `
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${
                dataPoint?.label
              }</div>
              <div style="color: #667174;">Labor Efficiency: <p style="font-weight: bold; color: #141922;">${currencyFormat(
                dataPoint?.y?.toFixed(2) || 0,
              )}%</p></div>
              <div style="color: #667174;">Warranty Hours: <p style="font-weight: bold; color: #141922;">${currencyFormat(
                dataPoint?.x?.toFixed(2) || 0,
              )}</p></div>
            `;
          }

          // Position tooltip
          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = "1";
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
        },
      },

      legend: {
        position: "top" as const,
        labels: {
          generateLabels: () => {
            return [];
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          stepSize: 0.25,
          callback: (value) => `${value}`,
        },
      },
      y: {
        ticks: {
          callback: (value) => `${value}%`,
        },
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

export default CrewLeaderEffAndWarrantyHoursChart;
