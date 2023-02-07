import React from "react";
import "../../styles/home.styles.scss";

function Landing() {
  return (
    <div className="section landing">
      <div className="container">
        <h1>
          <span>WELCOME</span>
          <span>---</span>
          <span>TO THE</span>{" "}
        </h1>
        <div className="text">
          <h2>Land of code and pixels</h2>
          <p>- where your wildest software dreams come true!</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
