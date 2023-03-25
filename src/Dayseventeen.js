// import { Alert } from 'bootstrap'
import React,{useState} from 'react'
import Alert from 'react-bootstrap/Alert';

const Dayseventeen = () => {
    const [data,setData]=useState([])
    const [text,setText]=useState("")
    const [add,setAdd]=useState([])
    const textSplit=()=>{
        setData(text.split(" "))
    }
    console.log(data)
    const Del=(index)=>{
         setAdd([...add,data.splice(index,1)])
         setData([...data])

    }
    let s=""
    add.forEach((item)=>{
        s+=item+" "
    })
    console.log(add)
  return (
    <div>
        <center>
        <input type="text" placeholder="enter text" onChange={(e)=>setText(e.target.value)}></input>{" "}
        <button onClick={textSplit}>Display</button>
        <div className="item">
        {data&&data.map((item,index)=><button  onClick={()=>Del(index)} key={index}>{item}</button>)}
        </div>
        {/* {add&&add.map((item)=>
            <li>{item[0]}</li>
        )} */}
       {s&&<div className='box'>
        {s}
       </div>}
        {/* <Alert variant="primary"> {s}</Alert> */}
        </center>
    </div>
  )
}

export default Dayseventeen