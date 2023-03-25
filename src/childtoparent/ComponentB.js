import React,{useState} from 'react'

const ComponentB = (props) => {
    const [s,setS]=useState("")
    const handleChande=(e)=>{
        setS(e.target.value)
        if(props.display==false){
            props.stored(e.target.value)
        }
    }
    React.useEffect(()=>{
       setS(props.store)
    },[])
  return (
    <div>
        <center>
           { props.display==false&&<input type="text" value={s} onChange={handleChande}></input>}
            <h1>{props.value+s}</h1>
        </center>
    </div>
  )
}

export default ComponentB