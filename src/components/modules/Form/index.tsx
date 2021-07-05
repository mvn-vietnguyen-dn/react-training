import { FC, FormEvent, useCallback, useRef, useState } from "react";
import { UserRow } from "..";

export interface IUser {
  id: number;
  email: string;
  password: string;
  country: string;
  gender: string;
  information: string;
  [key: string]: string | number;
}

const Form: FC = () => {
  const [form, setForm] = useState<IUser>({ gender: "0" } as IUser);
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const id = useRef<number>(0);

  const onFieldChange = (event: any) => {
    const fieldName = event?.target?.name;
    const fieldValue = event?.target?.value;
    setForm((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onRegister = (event: FormEvent) => {
    event.preventDefault();
    id.current += 1;
    const user = { ...form, id: id.current };
    setUsersList([...usersList, user]);
  };

  const removeUser = useCallback((id: number) => {
    const newUser = usersList.filter((user: IUser) => user.id !== id);
    setUsersList(newUser);
  }, [usersList]);

  return (
    <div className="register-form w-100 h-100">
      <div className="form-wrapper border border-secondary p-4 rounded">
        <h3>Register</h3>
        <form onSubmit={onRegister}>
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
          <div className="form-group">
            <label htmlFor="country">Your Country</label>
            <select
              name="country"
              className="form-control"
              onChange={onFieldChange}
              required
            >
              <option value="">Select Country</option>
              <option value="Vietname">Vietname</option>
              <option value="Thailand">Thailand</option>
              <option value="Laos">Laos</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Gender">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="0"
                  onChange={onFieldChange}
                  defaultChecked={form.gender === "0"}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="1"
                  onChange={onFieldChange}
                  defaultChecked={form.gender === "1"}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="other">Other Information</label>
            <textarea
              name="information"
              className="form-control"
              rows={4}
              onChange={onFieldChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info d-block w-100">
            Submit
          </button>
        </form>
      </div>
      <div className="table-wrapper ml-4 p-4">
        <h3 className="w-100">Register User</h3>
        <table className="table table-hover table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">Gender</th>
              <th scope="col">Other Information</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!!usersList?.length ? (
              <>
                {usersList.map((user: IUser) => (
                  <UserRow key={user.id} user={user} removeUser={removeUser} />
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={6}>Register is not available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
