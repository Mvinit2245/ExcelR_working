import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 import { ToastContainer,} from 'react-toastify'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ToastContainer/>
    <App />
  </BrowserRouter>,
)
