import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/pages/store";  
import Router from "./src/routes/router"; 

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
