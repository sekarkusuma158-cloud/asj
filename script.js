// Accordion
const accBtns = document.querySelectorAll(".accordion-btn");
accBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});

// Quiz Questions
const questions = [
  { q: "5 + 3 = ?", options: ["6", "8", "9"], answer: "8" },
  { q: "10 - 4 = ?", options: ["6", "7", "8"], answer: "6" },
  { q: "2 + 9 = ?", options: ["10", "11", "12"], answer: "11" }
];

// Render Quiz
const quizDiv = document.getElementById("quiz");
questions.forEach((item, index) => {
  let div = document.createElement("div");
  div.innerHTML = <p>${index + 1}. ${item.q}</p>;
  item.options.forEach(opt => {
    div.innerHTML += `
      <label>
        <input type="radio" name="q${index}" value="${opt}"> ${opt}
      </label><br>
    `;
  });
  quizDiv.appendChild(div);
});

// Check Answers
document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  questions.forEach((item, index) => {
    let selected = document.querySelector(input[name="q${index}"]:checked);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });
  document.getElementById("result").textContent = Skor kamu: ${score}/${questions.length};
});