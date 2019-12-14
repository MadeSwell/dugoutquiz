import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider, ColorModeProvider, theme } from "@chakra-ui/core";
import QuizIndex from "./pages/QuizIndex";
import QuizSingle from "./pages/QuizSingle";
import Header from "./components/Header/Header";
import { CSSReset } from "@chakra-ui/core";

import Home from "./pages/Home";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quizzes">
                <QuizIndex />
              </Route>
              <Route path="/quiz/:id/:slug">
                <QuizSingle />
              </Route>
            </Switch>
          </div>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
