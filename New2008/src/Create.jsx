

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
 import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Create() {
    let nav=useNavigate()
    let [no,setno]=useState('')
    let[name,setname]=useState('')
  async  function adduser(e){
    e.preventDefault()
        let user={no,name}
          await axios.post('http://localhost:8080/users',user)
        nav('/')
    toast.success("new user added successfully")
    }
  return (
    <div>
      <h1>Create A User</h1>
      <form action="" onSubmit={adduser}>
        <label htmlFor="no">NO:</label><input type="text" onChange={(e)=>setno(e.target.value)} /> <br /> <br />

        <label htmlFor="name">Name:</label><input type="text" onChange={(e)=>setname(e.target.value)} /> <br /> <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Create
