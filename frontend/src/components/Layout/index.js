import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    // Fragments let you group a list of children without adding extra nodes to the DOM.
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <h1>THIS IS FOOTER FOR ALL PAGES</h1>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout