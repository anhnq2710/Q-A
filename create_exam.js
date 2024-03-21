document.getElementById("examForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form

  var questions = [];

  // Lấy danh sách các câu hỏi
  var questionContainers = document.getElementsByClassName("questionContainer");

  // Lặp qua các câu hỏi và đáp án
  for (var i = 0; i < questionContainers.length; i++) {
    var questionContainer = questionContainers[i];

    var question = questionContainer.querySelector("input[type='text']").value;

    var options = [];
    var answerInputs = questionContainer.querySelectorAll("input[type='text'].answerInput");
    for (var j = 0; j < answerInputs.length; j++) {
      var optionLabel = answerInputs[j].value;
      var option = {
        label: optionLabel
      };
      options.push(option);
    }

    var correctAnswerIndex = questionContainer.querySelector("select").selectedIndex;
    var correctAnswer = options[correctAnswerIndex];

    var questionObj = {
      question: question,
      options: options,
      correctAnswer: correctAnswer
    };

    questions.push(questionObj);
  }

  // Lưu bài thi vào cơ sở dữ liệu hoặc thực hiện các thao tác khác
  saveExam(questions);
});

function addQuestion() {
  var questionsContainer = document.getElementById("questionsContainer");

  var questionContainer = document.createElement("div");
  questionContainer.classList.add("questionContainer");

  var questionIndex = questionsContainer.getElementsByClassName("questionContainer").length;

  var questionLabel = document.createElement("label");
  questionLabel.setAttribute("for", "question" + questionIndex);
  questionLabel.textContent = "Câu hỏi " + questionIndex + ":";

  var questionInput = document.createElement("input");
  questionInput.setAttribute("type", "text");
  questionInput.setAttribute("id", "question" + questionIndex);
  questionInput.setAttribute("name", "question" + questionIndex);
  questionInput.setAttribute("placeholder", "Nhập câu hỏi " + questionIndex);
  questionInput.required = true;

  var answerInputs = [];
  for (var i = 1; i <= 4; i++) {
    var answerInput = document.createElement("input");
    answerInput.setAttribute("type", "text");
    answerInput.classList.add("answerInput");
    answerInput.setAttribute("placeholder", "Nhập đáp án " + i);
    answerInput.required = true;

    answerInputs.push(answerInput);
  }

  var correctAnswerLabel = document.createElement("label");
  correctAnswerLabel.setAttribute("for", "correctAnswer" + questionIndex);
  correctAnswerLabel.textContent = "Chọn đáp án đúng:";

  var correctAnswerSelect = document.createElement("select");
  correctAnswerSelect.setAttribute("id", "correctAnswer" + questionIndex);
  correctAnswerSelect.required = true;

  answerInputs.forEach(function(input, index) {
    var option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = "Đáp án " + (index + 1);

    correctAnswerSelect.appendChild(option);
  });

  var deleteQuestionButton = document.createElement("button");
  deleteQuestionButton.setAttribute("type", "button");
  deleteQuestionButton.classList.add("deleteQuestionButton");
  deleteQuestionButton.textContent = "Xóa câu hỏi";
  deleteQuestionButton.onclick = function() {
    deleteQuestion(this);
  };

  questionContainer.appendChild(questionLabel);
  questionContainer.appendChild(questionInput);
  questionContainer.appendChild(document.createElement("br"));
  answerInputs.forEach(function(input) {
    questionContainer.appendChild(input);
    questionContainer.appendChild(document.createElement("br"));
  });
  questionContainer.appendChild(correctAnswerLabel);
  questionContainer.appendChild(correctAnswerSelect);
  questionContainer.appendChild(document.createElement("br"));
  questionContainer.appendChild(deleteQuestionButton);

  questionsContainer.appendChild(questionContainer);
}

function deleteQuestion(button) {
  var questionContainer = button.parentNode;
  questionContainer.remove();
}