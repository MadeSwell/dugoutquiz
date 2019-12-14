export const shortStop1 = {
  quizTitle: "Short Stop Scenarios",
  quizSynopsis: "Train your brain so when you get the ball you know what to do!",
  questions: [
    {
      question: "Ground ball to pitcher. What do you do?? ",
      questionType: "text",
      answers: ["Backup 3rd base", "Move towards the ball and backup the pitcher", "Cover 2nd base", "Stay put"],
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 0,
        focus: "4",
        runners: {
          first: false,
          second: false,
          third: false
        }
      },
      correctAnswer: "2",
      messageForInorrectAnswer:
        "Ground balls hit to your area your responsibilities are ball > base > backup. There is no play at your base and once you see the pitcher is fielding the ball you remain there for backup.",
      explanation:
        "Ground balls hit to your area your responsibilities are ball > base > backup. There is no play at your base and once you see the pitcher is fielding the ball you remain there for backup."
    },
    {
      question: "Hard ground ball that takes you toward 2nd base. What do you do?",
      answers: [
        "Unnecessarily dive for ball",
        "Toss it to 1st base",
        "Field it glove side (for a righty) and make a hard throw to 1st base",
        "Let second baseman get it"
      ],
      questionType: "text",
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 0,
        focus: "4",
        runners: {
          first: false,
          second: false,
          third: false
        }
      },
      correctAnswer: "3",
      messageForInorrectAnswer:
        "Ground balls that take you away from 1st base will require a harder throw to get the runner"
    },
    {
      question: "You field a ground ball close to 3rd base. What do you do?",
      answers: [
        "Throw a rocket to the 1st baseman",
        "Easy throw or underhand toss (depending on distance) to 1st baseman",
        "Hold it"
      ],
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 0,
        focus: "4",
        runners: {
          first: false,
          second: false,
          third: false
        }
      },
      correctAnswer: "1",
      messageForInorrectAnswer: "Know how close you are to the target. Make the correct throw.",
      questionType: "text"
    },
    {
      question: "Slow roller comes to you and stops in the grass. There is a fast runner on 1st. What should you do?",
      questionType: "text",
      answers: [
        "Decide if runner will make it to second as you are charging the ball. If no play at 2nd quickly go to 1st base",
        "Sit back and wait for the ball",
        "Throw the ball to 2nd even if runner is already there"
      ],
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 0,
        focus: "4",
        runners: {
          first: true,
          second: false,
          third: false
        }
      },
      correctAnswer: "1"
    },
    {
      question: "Line drive to you. Runner comes off 1st base. What should you do?",
      questionType: "text",
      answers: [
        "Run the runner back to first",
        "Catch the ball and fire the ball to 1st ",
        "Catch the ball and toss it to 2nd base"
      ],
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 0,
        focus: "4",
        runners: {
          first: true,
          second: false,
          third: false
        }
      },
      correctAnswer: "2",
      messageForInorrectAnswer: "Be aware of your runners. Get a double play if possible!"
    },
    {
      question: "Ground ball takes you towards 2nd base. What should you do?",
      questionType: "text",
      answers: ["Flip to the second baseman covering 2nd base", "Throw to 3rd base", "Hold it"],
      answerSelectionType: "single",
      point: 50,
      showField: true,
      field: {
        outs: 2,
        focus: "4",
        runners: {
          first: true,
          second: true,
          third: false
        }
      },
      correctAnswer: "1"
    }
  ]
};
