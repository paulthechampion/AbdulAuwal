import React from 'react'
import HomeMeme from "../img/meme 1.png"
import WorkSec from "./WorksSec"
import AboutContact from './AboutContact'

export default function Home() {
    return (
        <div className="homeDiv"  id="home">
            <div className="testDiv testDivprob">
                <div className="homeWrite">
                    <h2>
                    UI/UX Designer
                    </h2>
                    <p>
                        I’m a UI/UX designer with over 3 years experience conceptualizing 
                        and crafting digital products. I'm passionate about improving the lives
                        of others through design and I am constantly looking to learn new things everyday. 
                        UI is the human-first approach to designing the actual Ux of a product.<br/>
                        Creating user-friendly interfaces that enable users to understand complext technical
                        products is a skill I am well acquinted with.<br/>
                        Concentrating on product strategy, graphic design, interaction design, and 
                        prototyping. Working experience in consumer technology, finance, enterprise, 
                        non-profits, and healthcare.
                    </p>
                </div>

                
                <div className="homeMemeDiv">
                    <div className="homeMemeSubDiv">
                        <img src={HomeMeme} alt="homeMeme" className="homeMeme"/>
                    </div>
                </div>
            </div>
            <WorkSec/>
            <AboutContact/>
        </div>
    )
}
