import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { 
  NavBar,
} from './layout';
import {
  Hero,
  Articles
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
        description='Play this game, as it is really really fun. Did you know that playing this game makes you better at playing this game? Come check it out and maybe you will be the best at playing this game.'
        mediaUrl='https://cms-assets.unrealengine.com/d66nnRxEQpatoaaSG3ww'
      />
      <Articles />
    </>
  )
}

export default App
