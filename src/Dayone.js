import React,{useState} from 'react'

const Dayone = () => {
    const [b,setB]=useState(true)
  return (
    <div className='dayone'>
        <center>
        {b?<button onClick={()=>setB(false)}><h1>1+1?</h1></button>:<h1>2</h1>}
        </center>
    </div>
  )
}

export default Dayone