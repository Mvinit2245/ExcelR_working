import React from 'react'
import MobileAction from './redux/MobileAction'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  let totalmobiles=useSelector((state)=>state.noofmobiles)
  let dispatch=useDispatch()
  return (
    <div>
      <h1>REDUX EXAMPLE</h1>
      <h1>total no of mobiles : {totalmobiles}</h1>
      <button onClick={()=>dispatch(MobileAction())}>Buy Mobile</button>
    </div>
  )
}

export default App
