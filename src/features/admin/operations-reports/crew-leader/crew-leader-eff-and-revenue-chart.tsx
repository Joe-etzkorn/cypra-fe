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

ChartJS.register(Tooltip, Title, PointElement, LinearScale, annotationPlugin);

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
        label: "Red Group",
        data: [
          { x: 1.7, y: 97 },
          { x: 1.75, y: 108 },
          { x: 1.77, y: 105 },
          { x: 1.8, y: 97 },
          { x: 1.9, y: 113 },
          { x: 2.1, y: 105 },
          { x: 2.15, y: 115 },
          { x: 2.25, y: 104 },
          { x: 2.3, y: 117 },
          { x: 2.35, y: 111 },
        ],
        backgroundColor: "#EF6F6C",
      },
      {
        label: "Blue Group",
        data: [
          { x: 2.01, y: 122 },
          { x: 2.15, y: 120 },
          { x: 2.27, y: 118 },
          { x: 2.28, y: 124 },
        ],
        backgroundColor: "#57B2C4",
      },
      {
        label: "Blue Group",
        data: [
          { x: 2.31, y: 122 },
          { x: 2.45, y: 120 },
          { x: 2.57, y: 118 },
          { x: 2.58, y: 124 },
        ],
        backgroundColor: "#59C9A5",
      },
    ],
  };

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
          if (tooltipModel.body) {
            const name = tooltipModel.dataPoints[0].dataset.label;
            const efficiency = tooltipModel.dataPoints[0].raw.y;
            const revenue = tooltipModel.dataPoints[0].raw.x;

            tooltipEl.innerHTML = `
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${name}</div>
              <div style="color: #667174;">Labor Efficiency: <p style="font-weight: bold; color: #141922;">${efficiency}%</p></div>
              <div style="color: #667174;">Earned Revenue: <p style="font-weight: bold; color: #141922;">$${revenue}M</p></div>
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
            xMin: 1.5,
            xMax: 3,
            yMin: 115,
            yMax: 115,
            borderColor: "#57B2C4",
            borderWidth: 1,
            borderDash: [6, 4],
            label: {
              content: "115% Average", // Use 'content' for the label
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
            xMin: 2.36,
            xMax: 2.36,
            yMin: 95,
            yMax: 130,
            borderColor: "#57B2C4",
            borderWidth: 1,
            borderDash: [6, 4],
            label: {
              content: "$2.36M Average", // Use 'content' for the label
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
          generateLabels: (_chart: any) => {
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
