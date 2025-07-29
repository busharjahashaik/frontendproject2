import { useState } from 'react'
import './App.css'
import{Link}from'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To FrontEnd class in KLU</h1>
      <h2>Today's topic is introduction to React</h2>
      <h3>Today's date is 29.07.2025</h3>
      <h4>VRRA</h4>
      <h5>2400030522 - SHAIK BUSHAR JAHA</h5>
      <Link to="/page1">Go To Page1</Link>
      <Link to="/page2">Go To Page2</Link>
      <Link to="/page3">Go To Page3</Link>
    </>
  )
}
export default App