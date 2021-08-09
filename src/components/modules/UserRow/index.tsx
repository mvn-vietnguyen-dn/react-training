import { FC } from "react";

import { IUser } from "../Form";

interface UserRowProps {
  user: IUser;
  removeUser: (id: number) => void;
}

const UserRow: FC<UserRowProps> = ({ user, removeUser }) => (
  <tr>
    <th scope="row">{user.id}</th>
    <td>{user.email}</td>
    <td>{user.country}</td>
    <td>{user.gender === "0" ? "Male" : "Female"}</td>
    <td>{user.information}</td>
    <td>
      <i
        className="fa fa-trash cursor-pointer"
        onClick={() => removeUser(user.id)}
      ></i>
    </td>
  </tr>
);

export default UserRow;
