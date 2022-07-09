import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Servicios } from "./components/Servicios/Servicios";
import { Clientes } from "./components/Clientes/Clientes";
import { NavBarResponsive } from "./helpers/NavBarResponsive";
import "./App.scss"
import { Contacto } from "./components/Contacto/Contacto";
import { Footer } from "./components/Footer/Footer";
import { PortfolioContainer } from "./components/Portfolio/PortfolioContainer";


function App() {
  return (
      <BrowserRouter>
        <NavBarResponsive />
        <Switch>
          <Route exact path="/">
            <Home />
            <SobreMi path="/sobremi" />
            <PortfolioContainer  path="/portfolio/categoria"/>
            <Servicios path="/servicios" />
            <Clientes path="/clientes" />
            <Contacto path="/contacto" />
            <Footer path="/footer" />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
