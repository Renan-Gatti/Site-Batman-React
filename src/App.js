import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
        </Routes>
        <Routes>
          <Route path = '/contato' element = {<Contato />} />
        </Routes>
        <Routes>
          <Route path = '/fotos' element = {<Fotos />} />
        </Routes>
        <Routes>
          <Route path = '/comentarios' element = {<Comentarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
