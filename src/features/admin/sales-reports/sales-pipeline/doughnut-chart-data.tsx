// Doughnut Chart Data
const doughnutData = {
  labels: ["Won", "Lost"],
  datasets: [
    {
      data: [55, 45], // Adjust values as needed
      backgroundColor: [
        "#59C9A5", // Won
        "#EF6F6C", // Lost
      ],
      hoverOffset: 10,
      borderWidth: 0,
    },
  ],
};

const doughnutOptions: any = {
  responsive: true,
  cutout: "70%",
  plugins: {
    tooltip: {
      backgroundColor: "rgba(25, 33, 61, 1)",
      position: "average",
      yAlign: "bottom",
      padding: 16,
      callbacks: {
        label: (context: any) => {
          return ` ${context.raw} %`;
        },
      },
    },
    legend: {
      display: false,
    },
  },
};

export { doughnutData, doughnutOptions };
