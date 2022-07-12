import React, {useState} from "react"

const Count =(props)=>{

  const [value, setValue]=useState(0)
  const handleClick =()=>{

    setValue(value+1)
    console.log(value)
  }
  
return<div>
     <button onClick={props.handleClick}> Click me</button>
     {value}
</div>


}
export default Count;