import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AnimeRouter from './AnimeRouter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimeRouter />
  </BrowserRouter>,

)
