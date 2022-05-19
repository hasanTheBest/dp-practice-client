import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Alert from "../../Components/Alert";
import Loading from "../../Components/Loading";

const Users = () => {
  // Queries
  const {
    isLoading,
    error,
    data: users,
  } = useQuery("users", () => axios.get("/users"));

  if (isLoading) return <Loading />;

  if (error) return <Alert type="error" message={error.message} />;

  const TableRow = ({ sl, name, email }) => {
    return (
      <tr>
        <th>{sl}</th>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>S.L</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((u, i) => (
            <TableRow key={u._id} sl={i + 1} {...u} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
