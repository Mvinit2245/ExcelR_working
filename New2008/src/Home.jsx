import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    let nav=useNavigate()
    let[Data,setData]=useState([])
    let fetchdata=async ()=>{
        let result=await axios.get('http://localhost:8080/users')
        let fdata=await result.data
        setData(fdata)
    }
    fetchdata()   
  return (
    <div>
        <h2>Users Data Table</h2>
        <table border={1}>
            <thead>
                <tr><th>USER ID</th><th>USER NAME</th></tr>
            </thead>
            <tbody>
               {Data.map((item,i)=>(<tr key={i}><td>{item.id}</td><td>{item.name}</td></tr>))}
            </tbody>
        </table><br /><br />
        <button onClick={()=>nav('/create')}>Add New User</button>
    </div>
  )
}

export default Home
