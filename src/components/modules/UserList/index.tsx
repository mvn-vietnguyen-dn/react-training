import { FC, useCallback, useEffect, useState } from "react";

interface IUserFromApi {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

const UserList: FC = () => {
  const [userList, setUserList] = useState<IUserFromApi[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((data) => setUserList(data.data));
  }, [page]);

  const handleJumpPage = useCallback(
    (isNext = false) => {
      const newPage = isNext ? page + 1 : page - 1;
      setPage(newPage);
    },
    [page]
  );

  return (
    <>
      <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user?.id}>
                <td>{user?.first_name}</td>
                <td>{user?.last_name}</td>
                <td>{user?.email}</td>
                <td>
                  <img src={user?.avatar} alt={user?.last_name} />
                </td>
              </tr>
            ))}
            {!userList?.length && (
              <tr>
                <td colSpan={4}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ul className="user-paginator">
        <li>
          <button onClick={() => handleJumpPage()} disabled={page === 1}>
            Prev
          </button>
        </li>
        {[...Array(3)].map((_, idx) => (
          <li key={idx}>
            <button onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => handleJumpPage(true)} disabled={page === 3}>
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserList;
