import React,{useState} from 'react'
import ComponentB from './ComponentB'
const ComponentA = () => {
    const [display,setDisplay]=useState(true)
    const [store,setStored]=useState("")
    const stored=(ele)=>{
        setStored(ele)
    }
  return (
    <div>
        <button onClick={(e)=>setDisplay(true)}>First Page</button>
        <button onClick={(e)=>setDisplay(false)}>Second Page</button>
        {display&&<ComponentB value="hlw" display={display} store=""/>}
        {!display&&<ComponentB value="hey" display={display} stored={stored} store={store}/>}
    </div>
  )
}

export default ComponentA