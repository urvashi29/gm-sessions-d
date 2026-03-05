import React from "react";
import { useState } from "react";
import Product from "./Product";
import User from "./User";

const App = () => {
  const [firstName, setFirstName] = useState("Alina");

  const handleUpdate = () => {
    setFirstName("Alex");
  };

  return (
    <div>
      {/* <p>{firstName}</p>
      <button onClick={handleUpdate}>Update</button> */}
      <Product />
      <User />
    </div>
  );
};

export default App;
