import React,{useState,useEffect} from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {

    if(localStorage.getItem('token')==='true'){
        return (
            <>
               <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />
    
                <NavMenu>
    
                    <NavLink to='/' activeStyle={{ color:'black' }}>
                        Logged In as:  {localStorage.getItem('username')} 
                    </NavLink> 
    
    
                    <NavBtn>
                        <NavBtnLink to="/signout">Sign Out</NavBtnLink>                
                    </NavBtn>
                </NavMenu> 
               </Nav> 
            </>
        );
    }
    else{
        return (
            <>
               <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />
    
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Log In</NavBtnLink>                
                    </NavBtn>
                </NavMenu> 
               </Nav> 
            </>
        );
    }
    
};
export default Navbar;