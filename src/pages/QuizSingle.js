import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Quiz from "../components/Quiz/Quiz";
import { secondBaseman1 } from "../data/second-baseman-scenarios-1";
import { shortStop1 } from "../data/shortstop-scenarios-1";

export default function QuizSingle() {
  let { url } = useRouteMatch();
  let { id, slug } = useParams();

  const [quiz, setQuiz] = useState(null);

  async function currentQuiz() {
    const theQuiz = await Quizzes.filter(quiz => quiz.id === id);
    setQuiz(theQuiz);
  }

  useEffect(() => {
    if (id == 1) {
      setQuiz(secondBaseman1);
    }

    if (id == 2) {
      setQuiz(shortStop1);
    }

    console.log(quiz);
  }, [quiz]);

  if (!quiz) {
    return null;
  }

  return <Quiz quiz={quiz} />;
}

const Quizzes = [
  { id: 1, quiz: secondBaseman1 },
  { id: 2, quiz: shortStop1 }
];
