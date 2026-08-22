import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MobileStrore from './redux/MobileStore.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={MobileStrore}>
    <App />
  </Provider>,
)
