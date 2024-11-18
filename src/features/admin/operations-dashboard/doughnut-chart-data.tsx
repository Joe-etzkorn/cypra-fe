// Doughnut Chart Data
const doughnutData = {
  labels: ["Construction", "Maintenance", "Snow", "Design", "Other"],
  datasets: [
    {
      data: [30, 17, 15, 10, 40], // Adjust values as needed
      backgroundColor: [
        "#57B2C4", // Construction
        "#59C9A5", // Maintenance
        "#EF6F6C", // Snow
        "#667174", // Design
        "#E1EBEB", // Other
      ],
      borderRadius: 10,
      hoverOffset: 10,
      borderWidth: 2,
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
    },
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
      },
    },
  },
};

export { doughnutData, doughnutOptions };
