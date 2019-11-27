import React from "react";

function Field({ focus, outs, runners }) {
  return (
    <div className="perspective">
      <div className="field stripes">
        {outs && <div className="outs">OUT: {outs}</div>}
        <div className={`circle left-field ${focus === "7" ? "pulse focus" : "yellow"}`} />
        <div className={`circle left-center ${focus === "8" ? "pulse focus" : "yellow"}`} />
        <div className={`circle right-center ${focus === "9" ? "pulse focus" : "yellow"}`} />
        <div className={`circle right-field ${focus === "10" ? "pulse focus" : "yellow"}`} />
        <div className="field-inner" />
        <div className="right-field-line" />
        <div className="left-field-line" />
        <div className="infield">
          <div className="infield-inner">
            <span className="home">
              <span className="plate">
                <div className={`circle catcher ${focus === "2" ? "pulse focus" : "yellow"}`} />
              </span>
            </span>
            <span className="first">
              {runners.first && <div className={`circle pulse ${focus === "r1" ? "focus" : ""}`} />}
              <div className={`circle first-baseman ${focus === "3" ? "pulse focus" : "yellow"}`} />
            </span>
            <span className="second">
              {runners.second && <div className={`circle pulse ${focus === "r2" ? "focus" : ""}`} />}
              <div className={`circle second-baseman ${focus === "4" ? "pulse focus" : "yellow"}`} />
              <div className={`circle shortstop ${focus === "6" ? "pulse focus" : "yellow"}`} />
            </span>
            <span className="third">
              {runners.third && <div className={`circle pulse ${focus === "r3" ? "focus" : ""}`} />}
              <div className={`circle third-baseman ${focus === "5" ? "pulse focus" : "yellow"}`} />
            </span>
            <div className="pitchers-mound">
              <div className={`circle pitcher ${focus === "1" ? "pulse focus" : "yellow"}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Field;
