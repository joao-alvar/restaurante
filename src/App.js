import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Ordem from "./components/Ordem/Index";
import ProductPage from "./Pages/ProductPage";
import "./styles/main.scss";
import { EditUser } from "./Pages/EditUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <HomePage />
              <Ordem />
            </>
          )}
        />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
