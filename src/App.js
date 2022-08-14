import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import GummyWorms from "./GummyWorms";
import Candybar from "./CandyBar";
import Gingerale from "./GingerAle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/gingerale" exact>
          <Gingerale />
        </Route>
        <Route path="/candybars" exact>
          <Candybar />
        </Route>
        <Route path="/gummyworms" exact>
          <GummyWorms />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
