import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const User = () => {
  const [user, serUser] = useState([]);
  const [randomNum, setRandomNumber] = useState(null);

  // called on initial rendering (componentDidMount)
  useEffect(() => {
    // API call
    console.log("Intial Render");
  }, []);

  //   called on every render
  useEffect(() => {
    console.log("on every render");
  });

  // componentDidUpdate()
  useEffect(() => {
    console.log("Number is updated!");
  }, [randomNum]);

  //   componentWillUnmount
  //   useEffect(() => {
  //     return () => {
  //         //cleanup
  //         // remove event listener, clear timing events
  //         // clearInterval();
  //     }
  //   }, [randomNum])

  //   setInterval(() => {

  //   }, 1000)

  return (
    <div>
      <button onClick={() => setRandomNumber(10)}>Update Num</button>
    </div>
  );
};

export default User;
