import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Quiz from "../components/Quiz/Quiz";
import { secondBaseman1 } from "../data/second-baseman-scenarios-1";
import { quiz2 } from "../data/quiz";

export default function QuizSingle() {
  let { url } = useRouteMatch();
  let { id, slug } = useParams();

  const [quiz, setQuiz] = useState(null);

  async function currentQuiz() {
    const theQuiz = await Quizzes.filter(quiz => quiz.id === id);
    setQuiz(secondBaseman1);
  }

  useEffect(() => {
    setQuiz(secondBaseman1);
    console.log(quiz);
  }, [quiz]);

  if (!quiz) {
    return null;
  }

  return <Quiz quiz={quiz} />;
}

const Quizzes = [
  { id: 0, quiz: quiz2 },
  { id: 1, quiz: secondBaseman1 }
];
