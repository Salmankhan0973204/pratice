import React, { useContext } from 'react'
import { ArrayContext } from "./context";

const Another = () => {
    const {data, setData} = useContext(ArrayContext);
  return (
    <div> <ul>
      <li>{data}</li>
      </ul> </div>
  )
}

export default Another