// https://pslx0.csb.app/
import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
    // console.log("before");
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <>
      <header>
      <h1>Elearn</h1>
        <button onClick={loadUser}>Get Data</button>
      </header>

      <div className="card">
        {users?.map((current, index) => {
          return (
            <div className="profile" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <p className="card-text">{current.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
