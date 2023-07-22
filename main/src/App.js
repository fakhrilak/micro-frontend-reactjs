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
import Modal from "./components/Modal/Modal";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";

const App = () => {
  return (
    <div>
    <Modal/>
    <Router>
      <MyWrapper>
        <Routes>
          <Route exact path="/dashboard" element={<DashBoard/>} />
          <Route exact path="/crud" element={<Content/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </MyWrapper>
    </Router>
    </div>
  );
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
