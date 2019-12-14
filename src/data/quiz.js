export const quiz2 = {
  quizTitle: "Infield Scenarios",
  questions: [
    {
      questionType: "text",
      question:
        "You are playing second base: You field a ground ball that takes you towards 1st. Where do you throw it?",
      answers: ["Field it and throw to first base", "Throw it home", "Hold it"],
      answerSelectionType: "single",
      correctAnswer: "1",
      point: 50,
      showField: true,
      field: {
        outs: 2,
        focus: "4",
        runners: {
          first: true,
          second: true,
          third: true
        }
      }
    },
    {
      questionType: "text",
      question: "You are playing second base: Grounder hit to SS. What do you do? ",
      answers: ["Cover 2B for the throw", "Backup 1B", "Call for the ball"],
      answerSelectionType: "single",
      correctAnswer: "1",
      point: 50,
      showField: true,
      field: {
        outs: 1,
        focus: "4",
        runners: {
          first: true,
          second: false,
          third: true
        }
      }
    }
  ]
};
