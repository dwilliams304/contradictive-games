// Hooks/etc.
import React from "react";
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

// Layout
import {
  NavBar,
  Footer
} from "./components/layout";

// Pages
import { 
  HomePage,
  LeaderboardsPage 
} from "./components/pages";

// Styles
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/layout.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="leaderboards"
          element={
            <LeaderboardsPage />
          }
        />

      </Routes>

      <Footer />
    </>
  )
}

export default App
