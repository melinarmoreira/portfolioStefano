import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Servicios } from "./components/Servicios/Servicios";
import { Clientes } from "./components/Clientes/Clientes";
import { NavBarResponsive } from "./helpers/NavBarResponsive";
import "./App.scss"
import { Contacto } from "./components/Contacto/Contacto";
import { Footer } from "./components/Footer/Footer";
import { ContextAPI } from "./components/ContextAPI/ContextAPI";
import { PortfolioContainer } from "./components/Portfolio/PortfolioContainer";


function App() {
  return (
    // <ContextAPI>
      <BrowserRouter>
        <NavBarResponsive />
        <Switch>
          <Route exact path="/">
            <Home />
            <SobreMi path="/sobremi" />
            <PortfolioContainer  path="/portfolio/categoria"/>
            {/* <Portfolio path="/portfolio/:categoria" /> */}
            <Servicios path="/servicios" />
            <Clientes path="/clientes" />
            <Contacto path="/contacto" />
            <Footer path="/footer" />
          </Route>
        </Switch>
      </BrowserRouter>
    // </ContextAPI>

  );
}

export default App;
