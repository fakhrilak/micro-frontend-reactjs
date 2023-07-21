import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./index.scss";
import Contents from "./components/Contents";
import { Provider } from "react-redux";
import store from "./redux/store"
import {MyWrapper} from "wrapper/MyWrapper"
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <MyWrapper>
        <Routes>
          <Route path="/" element={<Contents/>} />
        </Routes>
      </MyWrapper>
    </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
