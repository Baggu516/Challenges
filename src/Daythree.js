import React ,{useState}from 'react'

const Daythree = () => {
    const [data,setData]=useState("#ffffff")
    const changecolor=()=>{

        const a ="#"+Math.floor(Math.random()*16777215).toString(16);
        console.log("#"+Math.floor(Math.random()*167777215).toString(16))
        console.log("#"+Math.floor(Math.random()*167777215).toString(),"remove")
        setData(a)

    }
  return (
    <div style={{backgroundColor:`${data}`,
    width:"100%",
    height:"100%"
    }}>
        <center>
        <h1>Random color picker and selecting the color code  </h1>
        <h1>{data}</h1><br/>
        <button onClick={changecolor}>Change color</button><br/>
        <button onClick={()=>navigator.clipboard.writeText(data)}>copy Data</button>
        </center>
    </div>
  )
}

export default Daythree