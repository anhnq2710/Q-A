// Lấy các phần tử DOM cần sử dụng
const examSelect = document.getElementById("examSelect");
const totalAttempts = document.getElementById("totalAttempts");
const completionRate = document.getElementById("completionRate");
const averageScore = document.getElementById("averageScore");
const scoreDistributionChart = document.getElementById("scoreDistributionChart");

// Dữ liệu kết quả của các kỳ thi
const examResults = [
  { exam: "exam1", date: "2021-01-01", score: 8 },
  { exam: "exam1", date: "2021-01-02", score: 7 },
  { exam: "exam2", date: "2021-02-01", score: 9 },
  { exam: "exam2", date: "2021-02-02", score: 6 },
  { exam: "exam3", date: "2021-03-01", score: 10 },
  { exam: "exam3", date: "2021-03-02", score: 8 },
];

// Tính tổng số lần tham gia
function calculateTotalAttempts() {
  if (examSelect.value === "all") {
    return examResults.length;
  } else {
    return examResults.filter((result) => result.exam === examSelect.value).length;
  }
}

// Tính tỷ lệ hoàn thành
function calculateCompletionRate() {
  const totalAttempts = calculateTotalAttempts();
  const completedAttempts = examResults.filter((result) => result.score >= 5).length;
  return ((completedAttempts / totalAttempts) * 100).toFixed(2) + "%";
}

// Tính điểm trung bình
function calculateAverageScore() {
  if (examSelect.value === "all") {
    const totalScore = examResults.reduce((sum, result) => sum + result.score, 0);
    return (totalScore / examResults.length).toFixed(2);
  } else {
    const filteredResults = examResults.filter((result) => result.exam === examSelect.value);
    const totalScore = filteredResults.reduce((sum, result) => sum + result.score, 0);
    return (totalScore / filteredResults.length).toFixed(2);
  }
}

// Hiển thị biểu đồ phân phối điểm số
function displayScoreDistributionChart() {
  const scores = examResults.map((result) => result.score);

  const scoreCounts = scores.reduce((counts, score) => {
    counts[score] = (counts[score] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(scoreCounts);
  const data = Object.values(scoreCounts);

  const chartData = {
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
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  new Chart(scoreDistributionChart, {
    type: "bar",
    data: chartData,
    options: chartOptions,
  });
}

// Cập nhật thông tin thống kê khi chọn kỳ thi khác
function updateStats() {
  totalAttempts.textContent = calculateTotalAttempts();
  completionRate.textContent = calculateCompletionRate();
  averageScore.textContent = calculateAverageScore();
  displayScoreDistributionChart();
}

// Sự kiện thay đổi kỳ thi được chọn
examSelect.addEventListener("change", updateStats);

// Cập nhật thông tin thống kê ban đầu
updateStats();