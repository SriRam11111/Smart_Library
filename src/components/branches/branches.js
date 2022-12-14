import React from 'react'
import {  Link } from 'react-router-dom';


import './branches.css'
/**
 * function to show branches and to render to seperate branch books
 * @returns 
 */
function Branches() {



  return (
    <>
    <div className='branchesforlibrary'>
      <div className='branches-child'><Link to='/civil'>civil</Link></div>
      <div className='branches-child'><Link to='/mech'>mech</Link></div>
      <div className='branches-child'><Link to='/cse'>cse</Link></div>
      <div className='branches-child'><Link to='/eee'>eee</Link></div>
      <div className='branches-child'><Link to='/chem'>chem</Link></div>
      <div className='branches-child'><Link to='/ece'>ece</Link></div>
    </div>
    </>
  )
}

export default Branches
 