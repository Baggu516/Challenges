import Reac,{useState} from 'react'

const Daytwo = () => {
    const [data,setData]=useState()
  return (
    <div>
        <input type="text" onChange={(e)=>setData(e.target.value)}></input>
        <h1>{data}</h1>
    </div>
  )
}

export default Daytwo