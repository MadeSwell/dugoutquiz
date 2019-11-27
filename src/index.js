import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/Quiz/Quiz";
import { quiz } from "./data/quiz";
import { quiz2 } from "./data/quiz2";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="App">
      <Quiz quiz={quiz} />
      {/* <Quiz quiz={quiz2} /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
