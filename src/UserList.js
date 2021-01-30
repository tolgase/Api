import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setlistOfUSer(res.data))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className="users">
      {listOfUSer.map((el) => {
        return (
          <div>
            <div className="user">
              <h2>{el.id}</h2>
              <h2>{el.name}</h2>
              <h3>{`Username: ${el.username}`}</h3>
              <h3>{`Email: ${el.email}`}</h3>
              <h3>{`Adress: ${el.address.street} ${el.address.city}  `}</h3>
              <h3>{`Phone: ${el.phone} `}</h3>
              <h3>{`Website: ${el.website}  `}</h3>
              <h3>{`Company: ${el.company.name}  `}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
