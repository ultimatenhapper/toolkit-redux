import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import PokemonApp from "./PokemonApp.jsx";
import TodoApp from "./TodoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
