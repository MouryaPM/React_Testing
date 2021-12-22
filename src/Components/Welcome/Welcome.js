import React, { useState } from "react";
const Welcome = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText ? <p>Good Morning</p> : ""}
      {changeText ? <p>Good Bye</p> : ""}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};
export default Welcome;
