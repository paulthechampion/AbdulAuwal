import React, { useState } from 'react'
import AA from "../img/AA.png"
import bdul from "../img/bdulauwal.png"
import medal from "../img/arrow.png"
export default function PhoneMenu() {
    const [showMenu, setShowMenu]= useState(false)
    let navClasses = "phoneMenu"
    let menu
    if(showMenu){
        navClasses = "phoneMenu open"
        
    }
    
    
    return (
        <span>
            <span className="MenuBottonSpan"  >
            <span alt="menu" className="MenuBotton" onClick={()=>setShowMenu(!showMenu)}>Menu</span>
            {menu}
            </span>
            
            <nav className={navClasses} id="phoneMenuId">
                <div className="subPM">
                    <div className="phoneLdiv firstNav">
                    <a href="/#home" className="logo-link"> 
                    
                        <img src={AA} alt="Abdul A" className="plogo"/>
                        <img src={bdul} alt="bdul" className="plogo"/>
                    </a>
                     </div>
                    <div className="phoneLdiv"> <a href="/#home" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>home.</a></div>
                    <div className="phoneLdiv"> <a href="/#work" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>work. </a></div>
                    <div className="phoneLdiv"> <a href="/#about" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>about me.</a></div>
                    <div className="phoneLdiv"> <a href="/#contact" className="phoneL"  onClick={()=>setShowMenu(!showMenu)}>contact.</a></div>
                </div>
            </nav>
        
        </span>
        
    )
}
