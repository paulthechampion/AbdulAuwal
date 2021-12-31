import React from 'react'
import comic from "../img/comic.jpg"
import weed from "../img/tch.png"
import sapa from "../img/Group 86.png"
import vector from "../img/vector.png"
import { useMediaQuery } from 'react-responsive'


export default function WorksSec() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })

    return (
        <div id="work">
            <h2 className="selected-pro">Selected Projects</h2>
            <div>
                <div className="works-main-div">
                    <div className="work-pic-div">
                         <img src={comic} alt="Comic book reader photo" className="work-pic"/>
                    </div>
                    <div className="works-write-div">
                        <h2 className="workh2">Comic Book Reader</h2>
                        <p className="work-write-p">An App for comic books: Application that convert your 
                            favorite trade paperbacks into digital versions.
                        </p>
                        <br/>
                        <br/>
                        <a href="/tag-case"  className="caseStudyP"> <p>View case study <img src={vector} className="vector" alt="vector"/></p></a>
                    </div>
                </div>

                <div className="works-main-div">
                    {
                    isDesktopOrLaptop?
                     <>
                     <div className="works-write-div work-write-left">
                        <h2 className="workh2">Wee’Count</h2>
                        <p className="work-write-p"> An App that helps users track the
                            amount of thc that they consume,
                            it includes a quit plan.
                        </p>
                        <br/>
                        <br/>
                        <a href="/wee'count"  className="caseStudyP"> <p>View case study <img src={vector} className="vector" alt="vector"/></p></a>
                    </div>
                    <div className="work-pic-div">
                        <img src={weed} alt="Thc tracker photo" className="work-pic" />
                    </div>
                     </>
                    :   
                     <>
                        <div className="work-pic-div">
                            <img src={weed} alt="Thc tracker photo" className="work-pic" />
                        </div>
                        
                        <div className="works-write-div work-write-left">
                            <h2 className="workh2">Wee’Count</h2>
                            <p className="work-write-p"> An App that helps users track the
                                amount of thc that they consume,
                                it includes a quit plan.
                            </p>
                            <br/>
                            <br/>
                            <a href="/wee'count"  className="caseStudyP">  <p>View case study <img src={vector} className="vector" alt="vector"/></p></a>
                        </div>

                     </>
                    }
                </div>

                <div className="works-main-div">
                    <div className="work-pic-div">
                        <img src={sapa} alt="SaPay photo" className="work-pic"/>
                    </div>
                    <div className="works-write-div">
                        <h2 className="workh2">saPay Wallet</h2>
                        <p className="work-write-p">saPay is a solution designed for managing and saving money. 
                            Also for paying bills at cheaper rates.
                        </p>
                        <br/>
                        <br/>
                        <a href="/sapay"  className="caseStudyP">  <p>View case study <img src={vector} className="vector" alt="vector"/></p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
