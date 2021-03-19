const form = document.querySelector(".form-quiz");

const correctAnswers = ["B", "A", "B", "C", "A"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let scoreUser = 0;

  userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value,
    event.target.inputQuestion5.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      scoreUser += 20;
    }
  });

  console.log(scoreUser);
});
