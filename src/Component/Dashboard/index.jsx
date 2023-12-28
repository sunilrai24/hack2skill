import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userData from "../../data/users.json";
import * as ss from "simple-statistics";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const [mean, setMean] = useState(null);
  const [median, setMedian] = useState(null);
  const [mode, setMode] = useState(null);

  const params = new URLSearchParams(location.search);
  const selectedName = params.get("name");

  const calculateHandler = (field) => {
    const data = userData.users.map((user) => user[field]);
    setMean(ss.mean(data));
    setMedian(ss.median(data));
    setMode(ss.mode(data));
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Dashboard</h1>
      <div className="card m-4">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th
                  scope="col"
                  className="age"
                  onClick={() => calculateHandler("age")}
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="age"
                  onClick={(e) => calculateHandler("score")}
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.users.map((user) => (
                <tr
                  className={
                    user.name.toLowerCase() === selectedName?.toLowerCase() &&
                    "selected"
                  }
                  key={user?.id}
                >
                  <td>{user?.id}</td>
                  <td>{user?.name}</td>
                  <td>{user?.age}</td>
                  <td>{user?.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Display mean, median, mode below the table */}
      {mean && median && mode && (
        <div className="card m-4">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <h2 className="d-flex justify-content-center">
                Calculated value
              </h2>
              <li className="list-group-item">
                {mean !== null && <p>Mean: {mean}</p>}
              </li>
              <li className="list-group-item">
                {median !== null && <p>Median: {median}</p>}
              </li>
              <li className="list-group-item">
                {mode !== null && <p>Mode: {mode}</p>}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
