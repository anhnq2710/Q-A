// chart.js
document.addEventListener("DOMContentLoaded", function() {
    const scoreDistributionChart = document.getElementById("scoreDistributionChart");
  
    // Lấy dữ liệu từ stats.js
    const labels = Array.from(scoreDistributionChart.dataset.labels.split(","));
    const data = Array.from(scoreDistributionChart.dataset.data.split(","), Number);
  
    // Tạo biểu đồ
    new Chart(scoreDistributionChart, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Phân phối điểm số",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      },
    });
  });