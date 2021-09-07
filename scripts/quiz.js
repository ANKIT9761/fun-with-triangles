const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");
const error = document.querySelector(".error");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
];

const validateInput = (inputValues) => {
  var i = 0;
  for (value of inputValues) {
    i++;
  }

  if (i === correctAnswers.length) {
    return true;
  }

  return false;
};

function calculateScore() {
  const formResults = new FormData(quizform);

  if (validateInput(formResults.values())) {
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      console.log(value);
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    // console.log("The score is "+score);
    outputEl.innerText = "The score is " + score;
  } else {
    error.style.display = "block";
  }
}

submitBtn.addEventListener("click", calculateScore);
quizform.addEventListener("click", function () {
  error.style.display = "none";
  outputEl.innerText = " ";
});
