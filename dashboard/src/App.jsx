import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { DashBoard } from "./pages/DashBoard";

const App = () => (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <div>Name: dashboard</div>
  //   <div>Framework: react</div>
  //   <div>Language: JavaScript</div>
  //   <div>CSS: Tailwind</div>
  // </div>
  <DashBoard/>
);
ReactDOM.render(<App />, document.getElementById("app"));
