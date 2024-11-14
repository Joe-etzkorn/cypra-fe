const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SalesWonData = {
  labels: monthLabels,
  datasets: [
    {
      data: [6, 9, 12, 13, 5, 6, 5, 5, 6, 9, 12, 13],
      backgroundColor: ["#57B2C4"],
      hoverOffset: 10,
    },
  ],
};

const SalesWonOptions: any = {
  indexAxis: "x" as const,
  scales: {
    y: {
      beginAtZero: true,
      display: true,
      grid: {
        display: true,
        drawOnChartArea: true,
        drawBorder: false,
        color: "#ccc",
        lineWidth: 1,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        generateLabels: (_chart: any) => {
          return [];
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return `Value: ${context.raw}`;
        },
      },
    },
  },
};

export { SalesWonData, SalesWonOptions };
