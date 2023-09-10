import { useState } from "react"

export default function Team(){
    const [count,setCount]=useState(11);
    const handleAdd=()=>{
        const newCount=count+1;
       setCount(newCount); 

    }
    const handleReduce=()=>{
        
       setCount(count-1); 

    }
    const TeamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={TeamStyle}>
            <h3>player: {count}</h3>
            <button onClick={handleAdd}>ADD player</button>
            <button onClick={handleReduce}>Reduce player</button>

        </div>
    )
}