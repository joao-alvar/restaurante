import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Ordem from "./components/Ordem/Index";
import productPage from "./components/productPage/productPage";
import { EditUser } from "./context/UserContext/EditUser";
import "./styles/main.scss";

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
        <Route path="/product/:id" component={productPage} />
      </Switch>
    </div>
  );
}

export default App;
