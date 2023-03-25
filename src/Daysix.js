import React,{useState} from "react"
let date = new Date();
let time=date.toTimeString().split(" ")[0]
let gmt=date.toTimeString().split(" ")[1].slice(0,3)
console.log(gmt,"gmt")
const Daysix=()=>{
    const [data,setData]=useState()
    const [a,setA]=useState([])
  
    console.log(date.toTimeString(),"data")
    return(
        <div>
            <center>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
        <button onClick={()=>{setA([...a,data])
        setData("")}}>Add</button>
        {a.map((item,i)=>
            <div key={i}>
            <h1>{item} {time} {gmt}</h1> 
            </div>
        )}
        </center>
        </div>
    )
}
export default Daysix