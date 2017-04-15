import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import InputBook from '../InputBook'
import ListBook from '../ListBook'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <h2 className="h2-main"> Add New Book</h2>
      <InputBook />
      <ListBook />
    </div>
  </div>
)

export default App
