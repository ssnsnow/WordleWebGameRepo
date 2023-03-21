import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NormalGame from './normal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <NormalGame />
    </App>
  </React.StrictMode>,
)
