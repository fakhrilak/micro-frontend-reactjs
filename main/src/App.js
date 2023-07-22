import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./index.scss";
import Contents from "./components/Contents";
import { Provider } from "react-redux";
import store from "./redux/store"
import {MyWrapper} from "wrapper/MyWrapper"
import {DashBoard} from "dashboard/DashBoard"
import {Content} from "contents/Content"
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <MyWrapper>
        <Routes>
          <Route exact path="/dashboard" element={<DashBoard/>} />
          {/* <Route exact path="/crud" element={<Content/>} /> */}
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </MyWrapper>
    </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
