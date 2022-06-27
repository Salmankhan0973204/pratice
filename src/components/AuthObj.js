import React, { useContext, useState } from "react";
import { ArrayContext } from "./context";

const AuthObj = () => {
  const {objdata, setObjdata} = useContext(ArrayContext);

  const [form, setState] = useState({
    username: "",
    password: "",
  });

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

//   setData((res) => [...res, name])

  const printValues = (e) => {
    setObjdata({ ...form, [e.target.name]: e.target.value });
    e.preventDefault()
  };
  
//   const listItems = objdata.map((number, index) => <li key={index}>{number} </li>);
//   console.log(listItems+"kkkkkkk")

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input value={form.username} name="username" onChange={updateField} />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>

      <div>
        <ul>{objdata}</ul>
      </div>
    </form>
  );
};

export default AuthObj;
