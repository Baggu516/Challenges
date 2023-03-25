import React,{useState} from 'react'

const Dayeight = () => {
    const [data,setData]=useState([{
      name:"mojito",
      cost:3  
    },
    {
        name:"sapota",
        cost:6  
      },
      {
        name:"banana",
        cost:4 
      },

])
const [totalcost,setTotalcost]=useState(0)
  return (
    <div>
        <center>
            <h1>MENU</h1>
            {data.map((item,index)=>
                <div key={index}>
                  <h1>{item.name}</h1>
                  <h2>${item.cost}</h2>
                  <button onClick={()=>setTotalcost(totalcost+item.cost)}>Order</button>
                </div>
            )}
            <h1>Total Cost : ${totalcost}</h1>
        </center>
    </div>
  )
}

export default Dayeight