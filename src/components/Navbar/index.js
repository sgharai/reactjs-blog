import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    // saves search variable in state with default value of false


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');

    }


    const openSearch = () => {
        setSearch(true);
    }
    //sets the state to true when icon is clicked so that searchClass returns true and changes the styling


    const searchClass = search ? 'searchInput active' : 'searchInput';
    // sets class when icon is clicked so that style makes the search bar expand

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar