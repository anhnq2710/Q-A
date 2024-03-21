document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử DOM cần sử dụng
    const examSelect = document.getElementById("examSelect");
    const studentTable = document.getElementById("studentTable");
    const totalAttempts = document.getElementById("totalAttempts");
    const completionRate = document.getElementById("completionRate");
    const averageScore = document.getElementById("averageScore");
    const scoreDistributionChart = document.getElementById("scoreDistributionChart");
  
    // Dữ liệu kết quả của các kỳ thi
    const examResults = [
      { studentId: 1, exam: "exam1", date: "2024-01-01", score: 8 },
      { studentId: 2, exam: "exam1", date: "2024-01-02", score: 7 },
      { studentId: 3, exam: "exam2", date: "2024-02-01", score: 9 },
      { studentId: 4, exam: "exam2", date: "2024-02-02", score: 6 },
      { studentId: 5, exam: "exam3", date: "2024-03-01", score: 10 },
      { studentId: 6, exam: "exam3", date: "2024-03-02", score: 8 },
    ];
  
    // Hiển thị danh sách sinh viên thi theo kỳ thi đã chọn
    function displayStudentsByExam() {
      const selectedExam = examSelect.value;
      let filteredResults = examResults;
      if (selectedExam !== "all") {
        filteredResults = examResults.filter((result) => result.exam === selectedExam);
      }
      let tableHtml = "";
      filteredResults.forEach((result) => {
        tableHtml += `
          <tr>
            <td>${result.studentId}</td>
            <td>${result.exam}</td>
            <td>${result.date}</td>
            <td>${result.score}</td>
          </tr>
        `;
      });
      studentTable.innerHTML = tableHtml;
    }
  
    // Tính tổng số lần tham gia
    function calculateTotalAttempts() {
      const selectedExam = examSelect.value;
      if (selectedExam === "all") {
        return examResults.length;
      } else {
        return examResults.filter((result) => result.exam === selectedExam).length;
      }
    }
  
    // Tính tỷ lệ hoàn thành
    function calculateCompletionRate() {
      const selectedExam = examSelect.value;
      const totalAttempts = calculateTotalAttempts();
      const completedAttempts = examResults.filter((result) => result.exam === selectedExam && result.score >= 5).length;
      return ((completedAttempts / totalAttempts) * 100 || 0).toFixed(2) + "%";
    }
  
    // Tính điểm trung bình
    function calculateAverageScore() {
      const selectedExam = examSelect.value;
      if (selectedExam === "all") {
        const totalScore = examResults.reduce((sum, result) => sum + result.score, 0);
        return (totalScore / examResults.length || 0).toFixed(2);
      } else {
        const filteredResults = examResults.filter((result) => result.exam === selectedExam);
        const totalScore = filteredResults.reduce((sum, result) => sum + result.score, 0);
        return (totalScore / filteredResults.length || 0).toFixed(2);
      }
    }
  
    // Hiển thị biểu đồ dạng tròn cho phân phối điểm số
    function displayScoreDistributionChart() {
      const scores = examResults.map((result) => result.score);
      const scoreDistributionData = calculateScoreDistribution(scores);
  
      const scoreDistributionChartConfig = {
        type: 'pie',
        data: {
          labels: Object.keys(scoreDistributionData),
          datasets: [{
            data: Object.values(scoreDistributionData),
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      };
  
      new Chart(scoreDistributionChart, scoreDistributionChartConfig);
    }
  
    // Tính toán phân phối điểm số
    function calculateScoreDistribution(scores) {
      const scoreDistribution = {};
      scores.forEach((score) => {
        if (scoreDistribution.hasOwnProperty(score)) {
          scoreDistribution[score]++;
        } else {
          scoreDistribution[score] = 1;
        }
      });
      return scoreDistribution;
    }
  
    // Cập nhật các chỉ số khi lựa chọn kỳ thi thay đổi
    function updateStats() {
      displayStudentsByExam();
      totalAttempts.textContent = calculateTotalAttempts();
      completionRate.textContent = calculateCompletionRate();
      averageScore.textContent = calculateAverageScore();
      displayScoreDistributionChart();
    }
  
    // Lắng nghe sự kiện khi lựa chọn kỳ thi thay đổi
    examSelect.addEventListener("change", updateStats);
  
    // Khởi tạo các chỉ số ban đầu
    updateStats();
  });
  