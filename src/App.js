import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SobreMi } from "./components/SobreMi/SobreMi";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/">
              <Home />
              <SobreMi />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
