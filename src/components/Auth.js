import React, { useContext, useState } from "react";
import { ArrayContext } from "./context";

const Auth = () => {
  const { data, setData } = useContext(ArrayContext);
  const [name, setname] = useState("");

  const handler = () => {
    
    setData((res) => [...res, name])

    console.log(data +"jjjj")
  };

  const listItems = data.map((number, index) => <li key={index}>{number}</li>);

  return (
    <div>
      <input onChange={(e) => setname(e.target.value)} />

      {/* <h2>{name}</h2> */}
      <button onClick={handler}>Click To Login</button>
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
export default Auth;
