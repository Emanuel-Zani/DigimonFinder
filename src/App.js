import "./App.css";

import NavBar from "./components/NavBar.jsx";
import Digimons from "./components/Digimons.jsx";
import { Route } from "react-router-dom";
import Filtrados from "./components/Filtrados.jsx";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>

      <Route exact path="/" render={() => <Digimons />} />

      <Route exact path="/digimons/:level" component={Filtrados} />
    </div>
  );
}

export default App;
