import React from 'react'
import {useState, useEffect} from "react";
export default function Counter() {
    const [count,setCount] = useState(0);

function handleClick(){
setCount(count+1);
};
useEffect(()=>{ console.log("Component mounted");
return()=>{
    console.log("component unmounted");
}
},[]
);
useEffect(()=>{
    console.log("State Changes:" +count)
},[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
