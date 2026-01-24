import React from "react"
import ReactDOM from "react-dom/client"
import Landing from "./app/routes/Landing"
import "./styles/globals.css" // ← RELATIVO, NO alias

console.log("CSS IMPORTADO")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
)
