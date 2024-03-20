
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

    var score = (correctAnswers / totalQuestions) * 100;

    window.location.href = 'ketqua.html?correct=' + correctAnswers + '&total=' + totalQuestions + '&score=' + score +
    '&answer1=' + encodeURIComponent(question1Answer.value) + '&answer2=' + encodeURIComponent(question2Answer.value);
}

document.getElementById("submit").addEventListener("click", submitAnswer);
