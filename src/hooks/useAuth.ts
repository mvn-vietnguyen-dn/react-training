import { useState } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const history = useHistory();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")!) || ''
  );

  const login = (email: string, _password: string) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
    history.push('/account');
  };

  return {
    user,
    login,
  };
};

export default useAuth;
