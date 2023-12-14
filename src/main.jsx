import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { NotesContextProvider } from './Context/NotesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesContextProvider>
      <Router>
        <App />
      </Router>
    </NotesContextProvider>
  </React.StrictMode>,
)
