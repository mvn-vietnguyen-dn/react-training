import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header, Footer } from "./components/layouts";
import { Home, Products, Account, ProductDetail, Login } from "./components/pages";
import { PrivateRoute } from "./components/libs";

const App: FC = () => (
  <div className="app">
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id" exact>
          <ProductDetail />
        </Route>
        <PrivateRoute path="/account" exact>
          <Account />
        </PrivateRoute>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
