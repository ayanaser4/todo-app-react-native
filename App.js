import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/pages/store";  // ✅ adjust the path if needed
import Router from "./src/routes/router";   // or your root navigator

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
