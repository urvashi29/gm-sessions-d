import { useState } from "react";
import User from "./User";

// Function based component
const App = () => {
  // [state variable, method to update it ] = initial value
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([{}, {}, {}]);
  const [user, setUser] = useState({
    id: 1,
    name: "alex",
  });

  const handleUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <User user={user} count={count} />
      <p>{count}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default App;

// User((user = {}), (count = 0));
// display array of product in UI (cards)
