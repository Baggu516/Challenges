import React ,{useState,useContext}from 'react'

import {context} from "./App";
import {Link,useParams,useLocation} from "react-router-dom";
import Daytwenti from './Daytwenti'
const DayTwenty = () => {
    const obj=useParams()
    const loc=useLocation()
    console.log(loc)
    // const {name,roll}=useQueryParams()

    // console.log(name,"name")
    // console.log("rool",roll)
    // console.log("paramssss",id)
    const {o,setO}=useContext(context)
    console.log(o,"parent")
    const [visible,setVisible]=useState(false)
    const options=[1,2,3,4,5]
    var [a,setA]=useState([1,2,3])
    const [data,setData]=useState({
        name:"",
        drop:""
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        // a.push(e.target.value)
       
        console.log(e.target.value,"aaaa")
        console.log(a)
    }
  const handleSubmit=(e)=>{
    e.preventDefault 
        setA([...a,data.name])
        setData({...data,name:""})
        setO([...o,data.name])
  }
  console.log(data)
  return (
    <div className='DayTwenty'>
        <center>
        <input value={data.name} placeholder="enter your name" onChange={handleChange} required pattern="[A-Za-z]+" name="name"></input>{" "}
        <select  name="drop" onChange={handleChange}>
         {options.map((item,i)=>
            <option >{item} </option>
         
         )}
        </select>
        {/* <div className="but"> */}
        <button  style={{marginLeft:"10px"}}class="btn btn-primary" role="button" onClick={handleSubmit}> Add</button>
        {/* </div> */}
        <Link to="/hi"><button  style={{marginLeft:"100px"}}class="btn btn-secondary" role="button" onClick={()=>!visible?setVisible(true):setVisible(false)}> Next Page</button></Link>

        {/* {visible&&a.map(item=>
            <li>{item}</li>
        )} */}
        

        </center>
    </div>
  )
}

export default DayTwenty