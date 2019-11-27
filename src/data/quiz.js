export const quiz = {
  quizTitle: "Infield Scenarios",
  questions: [
    {
      questionType: "text",
      question: "You are playing second base: Grounder hit to you. What do you do? ",
      answers: ["Field it and throw to first base", "Throw it home"],
      answerSelectionType: "single",
      correctAnswer: "1",
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
      answers: ["Cover 2B for the throw", "Backup 1B"],
      answerSelectionType: "single",
      correctAnswer: "1",
      showField: true,
      field: {
        outs: 1,
        runners: {
          first: true,
          second: true,
          third: true
        }
      }
    }
  ]
};
