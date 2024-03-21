
var seconds = 30 * 60;
var interval;

function countdown() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(remainingSeconds);

    if (seconds <= 0) {
        clearInterval(interval);
        submitAnswer();
    } else {
        seconds--;
    }
}

function padNumber(number) {
    return (number < 10 ? "0" : "") + number;
}

interval = setInterval(countdown, 1000);

function submitAnswer() {
    clearInterval(interval);
    var correctAnswers = 0;
    var totalQuestions = 0;

    var question1Answer = document.querySelector('input[name="answer1"]:checked');
    if (question1Answer && question1Answer.value === "C") {
        correctAnswers++;
    }
    totalQuestions++;

    var question2Answer = document.querySelector('input[name="answer2"]:checked');
    if (question2Answer && question2Answer.value === "B") {
        correctAnswers++;
    }
    totalQuestions++;

    var question3Answer = document.querySelector('input[name="answer3"]:checked');
    if (question3Answer && question3Answer.value === "D") {
        correctAnswers++;
    }
    totalQuestions++;

    var question4Answer = document.querySelector('input[name="answer4"]:checked');
    if (question4Answer && question4Answer.value === "C") {
        correctAnswers++;
    }
    totalQuestions++;

    var question5Answer = document.querySelector('input[name="answer5"]:checked');
    if (question5Answer && question5Answer.value === "A") {
        correctAnswers++;
    }
    totalQuestions++;
    var score = (correctAnswers / totalQuestions) * 100;

    window.location.href = 'ketqua.html?correct=' + correctAnswers + '&total=' + totalQuestions + '&score=' + score +
    '&answer1=' + encodeURIComponent(question1Answer.value) + '&answer2=' + encodeURIComponent(question2Answer.value) + '&answer3=' + encodeURIComponent(question3Answer.value)
    + '&answer4=' + encodeURIComponent(question4Answer.value)+ '&answer5=' + encodeURIComponent(question5Answer.value);
}

document.getElementById("submit").addEventListener("click", submitAnswer);
