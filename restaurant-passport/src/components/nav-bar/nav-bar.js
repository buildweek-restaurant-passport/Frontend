import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo.png'

const NavBar = (props) => {
    console.log(props);
    

    return (

        <div className = 'nav-bar' style = {{display:'flex' , height: '90px', alignItems: 'center', justifyContent: 'space-between',margin: '10px 100px'}}>
    
            <div className = 'logo-container' style = {{height:'90px', width: 'auto'}}>
                <img src = {logo} alt = 'restaurant passport logo' style = {{height:'100%', width: 'auto'}}></img>
            </div>
            <div className = 'nav-links' style = {{width:'44%', color: '#085f63', fontSize:'20px', display:'flex', justifyContent: 'space-between', fontWeight: '800',}}>
                <Link to ='/passports'>My Passports</Link>
                <Link to ='/restaurants'>Restaurants</Link> 
                {props.location.pathname !== '/' && <Link to ='/'>Log Out</Link>}
            </div>
        </div>
    )
}

export default NavBar
