import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { 
  NavBar,
} from './layout';
import {
  Hero
} from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}

export default App
