import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import config from './constant/config'

// style + assets
import './index.scss'
import './asset/scss/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
