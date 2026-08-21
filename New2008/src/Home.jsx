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
  async  function deletedata(id){
        await axios.delete(`http://localhost:8080/users/${id}`)
    }
  return (
    <div>
        <h2>Users Data Table</h2>
        <table border={1}>
            <thead>
                <tr><th>USER NO</th><th>USER NAME</th><th>ACTION</th></tr>
            </thead>
            <tbody>
               {Data.map((item,i)=>(<tr key={i}><td>{item.no}</td><td>{item.name}</td><td><button onClick={()=>deletedata(item.id)}>delete</button></td></tr>))}
            </tbody>
        </table><br /><br />
        <button onClick={()=>nav('/create')}>Add New User</button>
    </div>
  )
}

export default Home
