import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Alert from "../../Components/Alert";
import auth from "../../firebase.init";

const MyServices = () => {
  const [user, loadingAuth, errorAuth] = useAuthState(auth);
  // Queries
  const { isLoading, error, data } = useQuery(["myServices", user], () => {
    return axios.get(`http://localhost:5000/myServices?user=${user?.email}`);
  });

  if (errorAuth || error) {
    return (
      <Alert type="error" message={errorAuth?.message || error?.message} />
    );
  }
  if (loadingAuth || isLoading) {
    return (
      <Alert
        type="info"
        message={
          loadingAuth ? "User is loading..." : "Your Services are loading  "
        }
      />
    );
  }

  return (
    <div class="overflow-x-auto">
      <div>
        <h2 className="text-2xl font-bold my-4 mb-8">{`Welcome ${user.displayName}`}</h2>
        <h2 className="text-3xl font-bold my-4 mb-8">
          Your Services {data.data.length}
        </h2>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Day</th>
              <th>Time</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map(
              (
                { _id, name, email, appointmentDate, appointmentTime, phone },
                i
              ) => (
                <tr key={_id}>
                  <th>{i + 1}</th>
                  <td>{name}</td>
                  <td>{appointmentDate}</td>
                  <td>{appointmentTime}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              )
            )}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
