import { FC, FormEvent, useState } from "react";

import useAuth from "../../../hooks/useAuth";

interface IAccount {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const [form, setForm] = useState<IAccount>({} as IAccount);
  const auth = useAuth();

  const onFieldChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    auth.login(form.email, form.password);
  };

  return (
    <form onSubmit={onLogin}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          type="text"
          className="form-control"
          required
          onChange={onFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          required
          onChange={onFieldChange}
        />
      </div>
      <button type="submit" className="btn btn-info d-block w-100">
        Submit
      </button>
    </form>
  );
};
