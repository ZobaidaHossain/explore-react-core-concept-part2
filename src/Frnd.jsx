import { useEffect, useState } from 'react'
import './Frnd.css'
import Friend from './Friend'
export default function Friends(){
    
    const [frnd,setFrnd]=useState([])
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setFrnd(data))
    },[])
    return(
        <div className='box'>
            <h3>friends: {frnd.length}</h3>
            {
                frnd.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}