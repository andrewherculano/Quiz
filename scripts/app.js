const form = document.querySelector(".form-quiz");
const messageScore = document.querySelector(".result-score");
const messagePorcentScore = document.querySelector(".porcent-score");
const paragraphScore = document.createElement("p");

const correctAnswers = ["B", "A", "B", "C", "A"];
let scoreUser = 0;
let porcentScore = 0;

const checkCorrectsAnswers = (userAnswer, index) => {
  if (userAnswer === correctAnswers[index]) {
    scoreUser += 1;
    porcentScore += 20;
  }
};

const insertParagraph = () => {
  messageScore.insertAdjacentElement("beforeend", paragraphScore);
};

const showMessageResults = () => {
  switch (scoreUser) {
    case 1:
      paragraphScore.textContent = "Você acertou apenas 1 questão =(";
      paragraphScore.setAttribute("class", "result-score-message-error");
      break;
    case 2:
      paragraphScore.textContent = "Você acertou apenas 2 questões =(";
      paragraphScore.setAttribute("class", "result-score-message-error");
      break;
    case 3:
      paragraphScore.textContent = "Você acertou 3 questões =|";
      paragraphScore.setAttribute("class", "result-score-message-warning");

      break;
    case 4:
      paragraphScore.textContent = "Parabéns você acertou 4 questões =)";
      paragraphScore.setAttribute("class", "result-score-message-correct");
      break;
    case 5:
      paragraphScore.textContent =
        "Parabéns você acertou todas as questões! =)";
      paragraphScore.setAttribute("class", "result-score-message-correct");

      break;
    default:
      paragraphScore.textContent =
        "Poxa você não acertou nenhuma questão, mas não desista. Tente novamente!";
      paragraphScore.setAttribute("class", "result-score-message-error");
  }
};

const handleSubmitResultsAndScore = (event) => {
  event.preventDefault();
  scoreUser = 0;
  porcentScore = 0;

  insertParagraph();

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value,
    event.target.inputQuestion5.value,
  ];

  userAnswers.forEach(checkCorrectsAnswers);

  showMessageResults();

  messagePorcentScore.classList.remove("display");
  
  scrollTo(0, 0);

  let counter = 0;

  const timerPorcentScore = setInterval(() => {
    if (counter === porcentScore) {
      clearInterval(timerPorcentScore);
    }
    messagePorcentScore.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 10);
};

form.addEventListener("submit", handleSubmitResultsAndScore);
