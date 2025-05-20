document.addEventListener('DOMContentLoaded', function () {
  const answerButtons = document.querySelectorAll('.answer-btn');
  const questionText = document.querySelector('.question-box p');
  const questionNumber = document.querySelector('.number-badge');
  const akinatorImg = document.querySelector('.akinator-img');

  // Questions array
  const questions = [
    { number: 1, text: "Is your character a real person?" },
    { number: 2, text: "Is it a toy?" },
    { number: 3, text: "Is your character female?" },
    { number: 4, text: "Is your character associated with sports?" },
    { number: 5, text: "Does your character appear in movies?" }
  ];

  // Image filenames for dyunamic images
  const akinatorImages = [
    'akinator-2.png',
    'akinator-3.png',
    'akinator-4.png',
    'akinator-5.png'
  ];

  let currentQuestionIndex = 0;

  // Show question and update number
  function showQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.text;
    questionNumber.textContent = q.number;
  }

  function updateAkinatorImage(index) {
    const imageChangeInterval = 2; // Change image every 2 questions
    const imgIndex = Math.floor(index / imageChangeInterval);

    if (imgIndex < akinatorImages.length) {
      akinatorImg.src = `./imgs/${akinatorImages[imgIndex]}`;
    }
  }

  showQuestion(currentQuestionIndex);
  updateAkinatorImage(currentQuestionIndex);

  answerButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove selected from all buttons
      answerButtons.forEach(b => b.classList.remove('selected'));

      this.classList.add('selected');
      const selectedAnswer = this.textContent.trim();
      console.log('Selected answer:', selectedAnswer);

      // Simulate next question
      setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion(currentQuestionIndex);
        updateAkinatorImage(currentQuestionIndex);
        answerButtons.forEach(b => b.classList.remove('selected'));
      }, 500);
    });
  });

  // Back button 
  const backButton = document.querySelector('.back-btn');
  backButton.addEventListener('click', function () {
    console.log('Going back to previous question');
    currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
    showQuestion(currentQuestionIndex);
    updateAkinatorImage(currentQuestionIndex);
  });
});
