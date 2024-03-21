 // Dữ liệu mẫu về danh sách các kỳ thi
 var exams = [
    {
      name: "Kỳ thi A",
      status: "open"
    },
    {
      name: "Kỳ thi B",
      status: "closed"
    },
    {
      name: "Kỳ thi C",
      status: "open"
    },
    {
      name: "Kỳ thi D",
      status: "closed"
    }
  ];

  // Hiển thị danh sách các kỳ thi ban đầu
  displayExamList(exams);

  // Xử lý sự kiện khi người dùng nhập vào ô tìm kiếm
  document.getElementById('search-input').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var filteredExams = exams.filter(function(exam) {
      return exam.name.toLowerCase().includes(searchTerm);
    });
    displayExamList(filteredExams);
  });

  // Xử lý sự kiện khi người dùng chọn lọc theo trạng thái kỳ thi
  document.getElementById('status-filter-select').addEventListener('change', function() {
    var statusFilter = this.value;
    var filteredExams = exams.filter(function(exam) {
      if (statusFilter === "") {
        return true;
      } else {
        return exam.status === statusFilter;
      }
    });
    displayExamList(filteredExams);
  });

  // Hàm hiển thị danh sách các kỳ thi
  function displayExamList(examData) {
    var examListElement = document.getElementById('exam-list');
    examListElement.innerHTML = '';

    if (examData.length === 0) {
      var noResultItem = document.createElement('li');
      noResultItem.textContent = 'Không có kết quả phù hợp.';
      examListElement.appendChild(noResultItem);
    } else {
      examData.forEach(function(exam) {
        var examItem = document.createElement('li');
        examItem.className = 'exam-list-item';

        var examName = document.createElement('h3');
        examName.textContent = exam.name;
        examItem.appendChild(examName);

        var examStatus = document.createElement('p');
        examStatus.textContent = 'Trạng thái: ' + exam.status;
        examItem.appendChild(examStatus);

        var createButton = document.createElement('button');
        createButton.className = 'create-button';
        createButton.textContent = 'Chỉnh sửa';
        createButton.addEventListener('click', function() {
          startExam(exam.name,exam.status);
        });
        examItem.appendChild(createButton);

        examListElement.appendChild(examItem);
      });
    }
  }

  // Hàm xử lý khi người dùng nhấp vào nút "Bắt đầu" của một kỳ thi
  function startExam(examName,examStatus) {
    // Thực hiện các hành động cần thiết khi bắt đầu làm bài thi
    window.location.href ="create_exam.html"
  }
