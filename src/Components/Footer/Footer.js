import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="mainFooter" >
                <div className="mainFooterTop">
                    <div className="langFooter">
                        <div style={{marginTop : "6px"}}><BsGlobe size={18}  /></div>
                        <div className='lang'>English</div>
                        <div style={{marginTop : "6px"}}><IoIosArrowDown /></div>
                    </div>
                    <div className="footerNav">
                        <div className="footerNavHeading">
                            <h1>NAVIGATION</h1>
                        </div>
                        <div className="footerNavLinks">
                            <a href="/">Home</a>
                            <a href="/">FAQ</a>
                            <a href="/">Investor Relation</a>
                            <a href="/">Jobs</a>
                            <a href="/">About Us</a>
                            <a href="/">Help Center</a>
                        </div>
                    </div>
                    <div className="footerLegal">
                        <div className="footerLegalHeading">
                            <h1>LEGAL</h1>
                        </div>
                        <div className="footerPolicies">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Service</a>
                            <a href="/">Cookie Preferences</a>
                            <a href="/">Corporate Information</a>
                        </div>
                    </div>
                    <div className="footerContact">
                        <div className="footerContactHeading">
                            <h1>TALK TO US</h1>
                        </div>
                        <div className="footerContactLink">
                            <a href="/">support@ercom.com</a>
                            <pre>+66 2399 1145</pre>
                        </div>
                    </div>
                    <div className="footerSocials">
                        <div className="footerSocialsHeading">
                            <h1>FOLLOW US</h1>
                        </div>
                        <div className="footerSocialsLink">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mainFooterBot">
                    <p >© 2022 Dramatic. All Rights Reserved.</p>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
