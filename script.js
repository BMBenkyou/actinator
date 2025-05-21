document.addEventListener('DOMContentLoaded', function () {
  const answerButtons = document.querySelectorAll('.answer-btn');
  const questionText = document.querySelector('.question-box p');
  const questionNumber = document.querySelector('.number-badge');
  const akinatorImg = document.querySelector('.akinator-img');

  let violations = [];

  const questions = [
    {
      //Info Gathering
      //0
      question: "Are you in a dating relationship with the perpetrator?",
      options: [
        { text: "Yes", nextIndex: 4},
        { text: "No", nextIndex: 1 },
        { text: "Don't know", nextIndex: 1 },
        { text: "Probably", nextIndex: 4 },
        { text: "Probably not", nextIndex: 1 }
      ]
    },
    {//1
      question: "Are you a legitimate or illegitimate child of the perpetrator?",
      options: [
        { text: "Yes", nextIndex: 2},
        { text: "No", nextIndex: 3 },
        { text: "Don't know", nextIndex: 3 },
        { text: "Probably", nextIndex: 2 },
        { text: "Probably not", nextIndex: 3 }
      ]
    },
    {//2
      question: "Are you under 18 years old?",
      options: [
        { text: "Yes", nextIndex: 4 },
        { text: "No", result: "not_applicable" },
        { text: "Don't know", result: "not_applicable" },
        { text: "Probably", nextIndex: 4 },
        { text: "Probably not", result: "not_applicable" }
      ]
    },
    {//3
      question: "Are you a woman?",
      options: [
        { text: "Yes", nextIndex: 4 },
        { text: "No", nextIndex: 2 },
        { text: "Don't know",  nextIndex: 2  },
        { text: "Probably", nextIndex: 4 },
        { text: "Probably not",  nextIndex: 2  }
      ]
    },
    //Physical Violence
    {//4
      question: "Has the perpetrator caused you physical harm?",
      options: [
        { text: "Yes", nextIndex: 5 },
        { text: "No", nextIndex: 9 },
        { text: "Don't know", nextIndex: 9 },
        { text: "Probably", nextIndex: 5 },
        { text: "Probably not", nextIndex: 9 }
      ]
    },
    {//5
      question: "Did the physical harm result in serious injuries or mutilation?",
      options: [
        { text: "Yes", nextIndex: 6 },
        { text: "No", nextIndex: 7 },
        { text: "Don't know", nextIndex: 6 },
        { text: "Probably", nextIndex: 6 },
        { text: "Probably not", nextIndex: 7 }
      ]
    },
    {//6
      question: "Did the injuries require medical treatment?",
      options: [
        { text: "Yes", nextIndex: 7 },
        { text: "No", nextIndex: 11 },
        { text: "Don't know", nextIndex: 7 },
        { text: "Probably", nextIndex: 7 },
        { text: "Probably not", nextIndex: 11 }
      ]
    },
    {//7
      question: "Has the physical harm occurred more than once?",
      options: [
        { text: "Yes", nextIndex: 8 },
        { text: "No",  result: "serious_physical" },
        { text: "Don't know", nextIndex: 8 },
        { text: "Probably", nextIndex: 8 },
        { text: "Probably not",  result: "serious_physical" }
      ]
    },
    {//8
      question: "Did the perpetrator use any weapons or objects to cause harm?",
      options: [
        { text: "Yes", result: "serious_physical" },
        { text: "No",  result: "serious_physical" },
        { text: "Don't know",  result: "serious_physical" },
        { text: "Probably", result: "serious_physical" },
        { text: "Probably not", result: "serious_physical" }
      ]
    },
    //Sexual Violence
    { //9
      question: "Has the perpetrator committed any form of sexual violence?",
      options: [
        { text: "Yes", nextIndex: 10 },
        { text: "No", nextIndex: 11 },
        { text: "Don't know", nextIndex: 10 },
        { text: "Probably", nextIndex: 12 },
        { text: "Probably not", nextIndex: 11 }
      ]
    },
    { //10
      question: "Did the sexual violence involve rape or forced sexual acts?",
      options: [
        { text: "Yes", nextIndex: 12 },
        { text: "No", nextIndex: 13 },
        { text: "Don't know", nextIndex: 13},
        { text: "Probably", nextIndex: 12 },
        { text: "Probably not", nextIndex: 13}
      ]
    },
    {//11
      question: "Has the perpetrator caused mental or emotional suffering?",
      options: [
        { text: "Yes", nextIndex: 14 },
        { text: "No", nextIndex: 16 },
        { text: "Don't know", nextIndex: 14 },
        { text: "Probably", nextIndex: 14 },
        { text: "Probably not", nextIndex: 16}
      ]
    },
    {//12
      question: "Did the sexual violence occur more than once?",
      options: [
        { text: "Yes", result: "sexual_violence" },
        { text: "No", nextIndex: 13 },
        { text: "Don't know", nextIndex: 13 },
        { text: "Probably", result: "sexual_violence" },
        { text: "Probably not", nextIndex: 13 }
      ]
    },
    {//13
      question: "Has the perpetrator forced you to watch pornography?",
      options: [
        { text: "Yes", result: "sexual_violence" },
        { text: "No", result: "sexual_violence" },
        { text: "Don't know", result: "sexual_violence" },
        { text: "Probably", result: "sexual_violence" },
        { text: "Probably not", result: "sexual_violence" }
      ]
    },
    //Psychological Violence
    {//14
      question: "Has the perpetrator engaged in public ridicule or repeated verbal abuse?",
      options: [
        { text: "Yes", nextIndex: 15 },
        { text: "No", nextIndex: 17 },
        { text: "Don't know", nextIndex: 17 },
        { text: "Probably", nextIndex: 15 },
        { text: "Probably not", nextIndex: 17}
      ]
    },
    {//15
      question: "Has the verbal abuse caused you severe emotional distress?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", nextIndex: 17 },
        { text: "Don't know", nextIndex: 17 },
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", nextIndex: 17 }
      ]
    },

    
    {//16 Economic Violence
      question: "Has the perpetrator controlled your finances or prevented you from working?",
      options: [
        { text: "Yes", result: "economic_abuse" },
        { text: "No", nextIndex: 18 },
        { text: "Don't know", nextIndex: 18 },
        { text: "Probably", result: "economic_abuse" },
        { text: "Probably not", nextIndex: 18 }
      ]
    },
    {//17
      question: "Has the perpetrator threatened to cause you physical harm?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", result: "not_applicable" },
        { text: "Don't know", result: "not_applicable" },
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", result: "not_applicable"}
      ]
    },
    {//18
      question: "Has the perpetrator destroyed your property or controlled your assets?",
      options: [
        { text: "Yes", result: "economic_abuse" },
        { text: "No", nextIndex: 19 },
        { text: "Don't know", nextIndex: 19 },
        { text: "Probably", result: "economic_abuse" },
        { text: "Probably not", nextIndex: 19 }
      ]
    },
    //Psychological Abuse
    { //19
      question: "Has the perpetrator restricted your freedom of movement?",
      options: [
        { text: "Yes", nextIndex: 20 },
        { text: "No", nextIndex: 21 },
        { text: "Don't know", result: "not_applicable" },
        { text: "Probably", nextIndex: 20 },
        { text: "Probably not", nextIndex: 21}
      ]
    },

    { //20
      question: "Has the perpetrator prevented you from seeking medical help?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", nextIndex: 21 },
        { text: "Don't know", nextIndex: 21},
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", nextIndex: 21 }
      ]
    },
    { //21
      question: "Has the perpetrator threatened to take away your children?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", nextIndex: 22},
        { text: "Don't know", nextIndex: 22 },
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", nextIndex: 22 }
      ]
    },
    { //22
      question: "Has the perpetrator committed any form of abuse in the presence of your child?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", nextIndex: 24 },
        { text: "Don't know", nextIndex: 24 },
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", nextIndex: 24 }
      ]
    },
    {//23
      question: "Has the perpetrator committed multiple types of abuse?",
      options: [
        { text: "Yes", result: "multiple_violations" },
        { text: "No", nextIndex: 28 },
        { text: "Don't know", nextIndex: 28 },
        { text: "Probably", result: "multiple_violations" },
        { text: "Probably not", nextIndex: 28 }
      ]
    },
    { //24
      question: "Has the perpetrator's actions significantly affected your daily life?",
      options: [
        { text: "Yes", result: "psychological_abuse" },
        { text: "No", result: "not_applicable" },
        { text: "Don't know", result: "not_applicable" },
        { text: "Probably", result: "psychological_abuse" },
        { text: "Probably not", result: "not_applicable" }
      ]
    }
  ];

  const penalties = {
    not_applicable: {
      label: "Not Covered by RA 9262",
      info: "This situation may not be covered by RA 9262. However, other laws may apply. Please consult with legal authorities for proper guidance."
    },
    serious_physical: {
      label: "Serious Physical Violence",
      info: "This falls under Section 5(a) of RA 9262. The perpetrator may face imprisonment of 12 years and 1 day to 20 years, and a fine of not less than P300,000 but not more than P500,000.",
      type: "physical"
    },
    sexual_violence: {
      label: "Sexual Violence",
      info: "This falls under Section 5(a) of RA 9262. The perpetrator may face imprisonment of 12 years and 1 day to 20 years, and a fine of not less than P300,000 but not more than P500,000.",
      type: "sexual"
    },
    psychological_abuse: {
      label: "Psychological Abuse",
      info: "This falls under Section 5(d) of RA 9262. The perpetrator may face imprisonment of 6 years and 1 day to 12 years, and a fine of not less than P100,000 but not more than P300,000.",
      type: "psychological"
    },
    economic_abuse: {
      label: "Economic Abuse",
      info: "This falls under Section 5(e) of RA 9262. The perpetrator may face imprisonment of 6 years and 1 day to 12 years, and a fine of not less than P100,000 but not more than P300,000.",
      type: "economic"
    },
    physical_violence: {
      label: "Physical Violence",
      info: "This falls under Section 5(a) of RA 9262. The perpetrator may face imprisonment of 12 years and 1 day to 20 years, and a fine of not less than P300,000 but not more than P500,000.",
      type: "physical"
    }
  };

  let currentQuestionIndex = 0;
  let questionHistory = [];

  function showQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.question;
    questionNumber.textContent = index + 1;
    
    questionHistory.push(index);

    updateAkinatorImage(index);
  }

  function updateAkinatorImage(index) {
    const imageChangeInterval = 3; 
    const imgIndex = Math.floor(index / imageChangeInterval) % 4 + 2; 
    akinatorImg.src = `./imgs/akinator-${imgIndex}.png`;
  }

  function showResult(resultType) {
    if (resultType !== "not_applicable" && !violations.includes(resultType)) {
      violations.push(resultType);
    }

      const result = penalties[resultType];
      questionText.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px; color: #e74c3c;">${result.label}</div>
        <div style="line-height: 1.5; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
          ${result.info}
        </div>
        <div style="margin-top: 15px; padding: 10px; background-color: #fff3cd; border-radius: 5px;">
          <div style="font-weight: bold; color: #856404;">Note:</div>
          <div style="margin-top: 5px; line-height: 1.5;">
            Please consult with legal authorities for proper guidance on filing charges.
          </div>
        </div>
      `;

    answerButtons.forEach(btn => {
      btn.style.display = 'none';
    });
  }

  showQuestion(currentQuestionIndex);

  answerButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      answerButtons.forEach(b => b.classList.remove('selected'));

      this.classList.add('selected');
      
      const selectedAnswer = this.textContent.trim();
      console.log('Selected answer:', selectedAnswer);

      const currentQuestion = questions[currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(opt => opt.text === selectedAnswer);

      if (selectedOption) {
        if (selectedOption.result) {

          setTimeout(() => {
            showResult(selectedOption.result);
          }, 300);
        } else if (selectedOption.nextIndex !== undefined) {

          setTimeout(() => {
            currentQuestionIndex = selectedOption.nextIndex;
            showQuestion(currentQuestionIndex);
            answerButtons.forEach(b => {
              b.classList.remove('selected');
              b.style.display = 'block';
            });
          }, 300);
        }
      }
    });
  });


  const resetButton = document.querySelector('.back-btn');
  resetButton.addEventListener('click', function () {
    // Reset to first question
    currentQuestionIndex = 0;
    questionHistory = [0];
    violations = [];
    
    showQuestion(currentQuestionIndex);
    
    answerButtons.forEach(b => {
      b.classList.remove('selected');
      b.style.display = 'block';
    });
  });
});
