import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Servicios } from "./components/Servicios/Servicios";


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/">
              <Home />
              <SobreMi path="/sobremi" />
              <Portfolio  path="/portfolio/:categoria" />
              <Servicios path="/servicios" />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
