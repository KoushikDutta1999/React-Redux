// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import counterReducer from "./reducers/counterReducer";

import Display from "./components/Display";

const store = createStore(counterReducer); //this will create the redux store

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <Display />
      </Provider>
    </div>
  );
}

export default App;

// 1. Actions -> index.js
// 2. Actions -> Counter.js
// 3. reducers -> counterReducer.js
