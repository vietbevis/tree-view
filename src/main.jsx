import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./App";
// tailwind css
import "./index.css";
// primreact css
import "primereact/resources/themes/lara-light-blue/theme.css";
import "./App.css";
import "primeicons/primeicons.css";
import { twMerge } from "tailwind-merge";

const value = {
  cssTransition: false,
  pt: {},
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider value={value}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
