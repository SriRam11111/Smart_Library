import React from 'react'
import { Link } from 'react-router-dom'
// import datacontent from './data.json'
/**
 * function to test civil data
 * @returns 
 */
function Civil() {
  // const data=datacontent[data]
  // console.log("data=",data)
  return (
    <div>
    <div>civil</div>
    <div><Link to='/branches'>civil</Link></div>
    </div>
  )
}

export default Civil