import React from 'react'
import twitter from "../img/twitter1.png"
import linkedin from "../img/linkedin-icon.png"
import dribble from "../img/dribbble-icon.png"

export default function Footer() {
    return (
        <footer>
            <p className="lets-work">Let's work together</p>
            <hr/>
            <div className="footer-flex">
                <div className="footer-connect-div">
                    <p>Connect with me</p>
                    <a href = "https://twitter.com/pantinextdoor" className="no-line-link" target="_blank">
                        <img src={twitter} alt="connect-img" className="connect-img"/>
                    </a>
                    <a href = "https://linkedin.com/in/abdul-panti-b8030a1ab" className="no-line-link" target="_blank">
                        <img src={linkedin} alt="connect-img" className="connect-img"/>
                    </a> 
                    <a href = "https://dribbble.com/ricedean" className="no-line-link" target="_blank">
                        <img src={dribble} alt="connect-img" className="connect-img"/>
                    </a>
                </div>

                <div className="footer-hello-div">
                    <p>Say hello</p>
                    <a href = "mailto: donpantee@gmail.com" className="no-line-link"><p className="color-two">donpantee@gmail.com</p></a>
                    
                </div>
            </div>
            Abdul Auwal © 2022
        </footer>
    )
}
