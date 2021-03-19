const form = document.querySelector(".form-quiz");
const button = document.querySelector(".button");
const paragraphScore = document.createElement("p");

const correctAnswers = ["B", "A", "B", "C", "A"];
let scoreUser = 0;

const checkCorrectsAnswers = (userAnswer, index) => {
  if (userAnswer === correctAnswers[index]) {
    scoreUser += 1;
  }
};

const insertParagraphAndClassInResult = () => {
  button.insertAdjacentElement("afterend", paragraphScore);
  paragraphScore.setAttribute("class", "show-score");
};

const showMessageResults = () => {
  switch (scoreUser) {
    case 1:
      paragraphScore.textContent = "Você acertou apenas 1 questão =(";
      break;
    case 2:
      paragraphScore.textContent = "Você acertou apenas 2 questões =(";
      break;
    case 3:
      paragraphScore.textContent = "Você acertou 3 questões =|";
      break;
    case 4:
      paragraphScore.textContent = "Parabéns você acertou 4 questões =)";
      break;
    case 5:
      paragraphScore.textContent =
        "Parabéns você acertou todas as questões! =)";
      break;
    default:
      paragraphScore.textContent =
        "Poxa você não acertou nenhuma questão, mas não desista. Tente novamente!";
  }
};

const handleSubmitResultsAndScore = (event) => {
  event.preventDefault();
  scoreUser = 0;

  insertParagraphAndClassInResult();

  userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value,
    event.target.inputQuestion5.value,
  ];

  userAnswers.forEach(checkCorrectsAnswers);
  showMessageResults();
};

form.addEventListener("submit", handleSubmitResultsAndScore);
