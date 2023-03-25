import React,{useState} from 'react'

const Dayfive = () => {
const [d,setD]=useState(["apple","banana","orange"])
const [s,setS]=useState(false)
const delet =(i)=>{
    console.log(i)
    d.splice(i,1)
    setD([...d])  
}
 return (
    <div>
        <center>
        <h1>Day--5</h1>
        <button onClick={()=>setS(true)}style={{backgroundcolor:"white",
	      border: "none"}}> Click here to show the items</button>
        {s?<div>
            {d.map((item,i)=>
                <div key={i} className="card">
                <h1>{item}</h1>
                <button onClick={()=>delet(i)}>Del</button><br/>
                </div>
            )}
        </div>:<div></div>}
        </center>
    </div>
  )
}

export default Dayfive