import React from "react";
import Navigation from "./navigation";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
