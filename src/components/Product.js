import React, { useEffect, useState } from 'react'



const Product = () => {
    const [product, setProduct] = useState("")

    useEffect(()=>{
      
       const fetchdata= async()=>{

       const res=await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await res.json()
    
       setProduct(data)
       

    };
     fetchdata()
})

console.log(product)


 const listItems = product.map((person) => {
    return(
    <li>{person.title}</li>)

 })
  
  return (
    <>
  
  {listItems}
    </>

  
  );
}

export default Product