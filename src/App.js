import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Servicios } from "./components/Servicios/Servicios";
import { Clientes } from "./components/Clientes/Clientes";
import { NavBarResponsive } from "./helpers/NavBarResponsive";
import "./App.scss"
import { ContextAPI } from "./components/ContextAPI/ContextAPI";


function App() {



  return (
    <BrowserRouter>
      <NavBarResponsive />
      <Switch>
        <Route exact path="/">
          <Home />
          <SobreMi path="/sobremi" />
          <Portfolio path="/portfolio/:categoria" />
          <Servicios path="/servicios" />
          <Clientes path="/clientes" />
          <ContextAPI></ContextAPI>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
