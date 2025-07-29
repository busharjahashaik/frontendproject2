import React, { Component } from 'react'
import{Link}from'react-router-dom'
import'./css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
      <h1>BEST AUTHOR : COOLEN HOOVER</h1>
      <div id='text1'>
      <Link to="/page1">Go To Page1</Link>
      <br/><br/>
      <div className='link2'>
<Link to="/">Go To Homepage</Link>
      </div>

      </div>

      </div>
    )
  }
}