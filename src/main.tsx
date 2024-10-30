import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { 
  NavBar,
} from "./components/layout";
import { 
  LandingPage
} from "./components/pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  )
}

export default App
