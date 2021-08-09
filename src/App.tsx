import { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header, Footer } from "./components/layouts";
import { PrivateRoute } from "./components/libs";

const Home = lazy(() => import('./components/pages/Home'));
const Products = lazy(() => import('./components/pages/Products'));
const Account = lazy(() => import('./components/pages/Account'));
const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
const Login = lazy(() => import('./components/pages/Login'));

const App: FC = () => (
  <div className="app">
    <Header />
    <main className="main">
      <Switch>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
