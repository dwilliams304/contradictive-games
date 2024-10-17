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
      <Hero 
        title='Game Title'
        description='Play this game, as it is really really fun'
        mediaUrl='https://cms-assets.unrealengine.com/d66nnRxEQpatoaaSG3ww'
      />
    </>
  )
}

export default App
