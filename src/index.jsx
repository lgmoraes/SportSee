import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './scss/main.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Error404 from './pages/Error404'

export const BASENAME = 'SportSee'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes basename={BASENAME}>
        <Route path={BASENAME + '/:userId'} element={<Home />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
