import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { Button, useColorMode } from "@chakra-ui/core";

export default function Quizzes() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let person = find(parseInt(id));

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <h3>Quizzes</h3>
      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
      <ul>
        {QUIZZES.map(quiz => (
          <li key={quiz}>
            <Link to={`${url}/${quiz.id}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const QUIZZES = [
  { id: 0, name: "Infield" },
  { id: 1, name: "Outfield" },
  { id: 2, name: "Pitching" },
  { id: 3, name: "Hitting" }
];

function find(id) {
  return QUIZZES.find(p => p.id === id);
}
