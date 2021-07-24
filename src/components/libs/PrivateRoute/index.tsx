import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

export const PrivateRoute: FC<RouteProps> = ({ path, exact, children }) => {
  const auth = useAuth();

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (auth.user ? children : <Redirect to="/login" />)}
    />
  );
};
