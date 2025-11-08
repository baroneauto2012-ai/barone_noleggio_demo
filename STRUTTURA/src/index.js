// Importa React e il componente principale dell'app
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // opzionale, per lo stile

// Crea il punto di montaggio principale dell'app React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizza il gestionale dentro il contenitore HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
