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
import annotationPlugin from "chartjs-plugin-annotation";
import { Spin } from "antd";
import { currencyFormat } from "@utils/common";

ChartJS.register(Tooltip, Title, PointElement, LinearScale, annotationPlugin);

interface CrewLeaderEfficiencyAndRevenueChartProps {
  data: ChartData<"scatter", any[]>;
  loading: boolean;
}

const CrewLeaderEfficiencyAndRevenueChart: React.FC<
  CrewLeaderEfficiencyAndRevenueChartProps
> = ({ data, loading }) => {
  if (loading) {
    return <Spin className="flex justify-center items-center size-full" />;
  }

  const averageEarnedRevenue = currencyFormat(
    (
      data?.datasets?.[0]?.data?.reduce(
        (acc: number, item: any) => acc + item?.x,
        0,
      ) / (data?.datasets?.[0]?.data?.length || 1)
    )?.toFixed(2) || 0,
  );

  const averageLaborEfficiency = currencyFormat(
    (
      data?.datasets?.[0]?.data?.reduce(
        (acc: number, item: any) => acc + item?.y,
        0,
      ) / (data?.datasets?.[0]?.data?.length || 1)
    )?.toFixed(2) || 0,
  );

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
              <div style="color: #667174;">Earned Revenue: <p style="font-weight: bold; color: #141922;">$${currencyFormat(
                dataPoint?.x?.toFixed(2) || 0,
              )}M</p></div>
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
      annotation: {
        annotations: {
          horizontalLine: {
            type: "line",
            xMin: 0,
            xMax: Math.max(
              ...(data?.datasets?.[0]?.data?.map(
                (item) => item?.earnedRevenue,
              ) || [0]),
            ),
            yMin: +averageLaborEfficiency,
            yMax: +averageLaborEfficiency,
            borderColor: "#57B2C4",
            borderWidth: 1,
            borderDash: [6, 4],
            label: {
              content: `${averageLaborEfficiency}% Average`,
              display: true,
              position: "start",
              backgroundColor: "white",
              color: "#57B2C4",
              font: {
                size: 12,
                weight: "bold",
              },
              padding: 6,
            },
          },
          verticalLine: {
            type: "line",
            xMin: +averageEarnedRevenue,
            xMax: +averageEarnedRevenue,
            yMin: 0,
            yMax:
              Math.max(
                ...(data?.datasets?.[0]?.data?.map((item) => item?.y) || [0]),
              ) * 1.1,
            borderColor: "#57B2C4",
            borderWidth: 1,
            borderDash: [6, 4],
            label: {
              content: `$${averageEarnedRevenue}M Average`,
              display: true,
              position: "end",
              backgroundColor: "white",
              color: "#57B2C4",
              font: {
                size: 12,
                weight: "bold",
              },
              padding: 6,
            },
          },
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
          callback: (value) => `$${value}M`,
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

export default CrewLeaderEfficiencyAndRevenueChart;
