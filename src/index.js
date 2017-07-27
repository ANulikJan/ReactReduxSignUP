import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers/store";
import Registration from './components/Registration';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <div >
      <Registration/>
    </div>
  </Provider>,
  document.getElementById("registration-form")
);
