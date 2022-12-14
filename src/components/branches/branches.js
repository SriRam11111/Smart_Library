import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { useState } from "react";
import Civil from './civil'

import './branches.css'

function Branches() {
  // function civil(){
  //   exact to="/register"
  // }


  return (
    <>
    <div className='branchesforlibrary'>
      <div className='branches-child' >civil</div>
      <div className='branches-child'>mech</div>
      <div className='branches-child'>cse</div>
      <div className='branches-child'>eee</div>
      <div className='branches-child'>chem</div>
      <div className='branches-child'>ece</div>
    </div>
    </>
  )
}


function Handlebranches() {
  return (
    <>
     
    <Router>
     <Branches />
     <div className="pages">
       <Switch>
         <Route exact path="/civil" component={Civil} />
         {/* <Route path="/register" component={Register} /> */}
         {/* <Route path="/sign-in" component={Sign_in} /> */}
         {/* <Route path="/contact" component={Contact} /> */}
         {/* <Route path="/about" component={About} /> */}
         {/* <Route path="/branches" component={Branches} /> */}
       </Switch>
     </div>
   </Router>
 </>
  )
}

export default Handlebranches
 