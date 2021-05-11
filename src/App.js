import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './pages/authentication/auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       

      {/* RUTAS */}
      <BrowserRouter>
          <Switch>

            <Route path="/">
              <div className="Login">
              < Auth />
              </div>
            </Route>

            <Route path="/authentication">
              <div className="Login">
              < Auth />
              </div>
            </Route>

            {/* <Route path="/register">
              < PAGE />
            </Route> */}
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
