import React,{useState} from 'react'

const Dayseven = () => {
    const [s,setS]=useState(false)
    const [data,setData]=useState({
        animal:"dog",
        petname:"",
        ownername:"",
        illness:""
    })
    const channgeHandler=(e)=>{
        console.log(e.target) 
        setData({...data,[e.target.name]:e.target.value})  

    }
    const final=(e)=>{
      e.preventDefault()
      console.log(data)
      setS(true)
    }
    console.log(data,"dataaaaaaaaaaaaaa")
  return (
    <div>
    <h1>Day_7</h1>
    <form>
    <select  name="animal" onChange={channgeHandler}>
        <option>cat</option>
        <option>Dog</option>
        <option>parrot</option>

    </select><br/>
    <input type="text" name="petname" placeholder=" petname" onChange={channgeHandler}></input><br/>
    <input type="text" name="ownername" placeholder="ownername" onChange={channgeHandler}></input><br/>
    <input type="text" name="illness" placeholder="illness" onChange={channgeHandler}></input><br/>
    <button onClick={final}>Add_Details</button>
    </form>
    {s?<div><li>{data.animal}</li></div>:<div></div>}

    </div>
  )
}

export default Dayseven