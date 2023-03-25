import React,{useState} from 'react'

const Dayfour = () => {
    const [data,setData]=useState(["apple","banana","orange"])
    const [s,setS]=useState(true)
  return (
    <div>
        <h1>DAy -4</h1>
        {s?<button onClick={()=>setS(false)}><h1>Click me to see the items</h1></button>:<div>
            {data.map((item,i)=>
                <h2 key={i}>{item}</h2>
            )}
        </div>}
    </div>
  )
}

export default Dayfour