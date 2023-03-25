import React ,{useState,useContext,useEffect}from 'react'
import {context} from "./App";
import { Link } from 'react-router-dom'
const Daytwenti = () => {
  const {o,setO,v,setV}=useContext(context)
  console.log(o,"child")
  useEffect(()=>{
    if(v){

    }
  })
  return (
    <div>
        <center>
        <h1>hello</h1>
        <button  style={{marginLeft:"100px"}}class="btn btn-primary" role="button" onClick={()=>!v?setV(true):setV(false)}>Show Items</button>
        <span><Link to="/back"><button  style={{marginLeft:"30px"}} class="btn btn-secondary" role="button" >Previous Page</button></Link></span>
        {v&&o&&o.map((item,i)=>
            <li key={i}>{item}</li>)}
        </center>
        
     {/* {props.} */}
    </div>
  )
}

export default Daytwenti