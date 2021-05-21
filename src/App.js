import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ----------------- PAGES -------------------------------------
import Auth from './pages/authentication/auth';
import Configuration from './pages/configurations/config';
import Eventos from './pages/eventos/eventos';
import Funciones from './pages/eventos/funciones/funciones';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        {/* RUTAS */}
        <BrowserRouter>
          <Switch>

            <Route path="/authentication" component={Auth} />
    
            <Route path="/configurations" component={Configuration} />

            <Route path="/eventos" component={Eventos} />

            <Route path="/eventos/funciones" component={Funciones} />

          </Switch>
        </BrowserRouter>

      </header>
    </div >
  );
}

export default App;
