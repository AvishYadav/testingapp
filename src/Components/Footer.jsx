import React from 'react'
import {
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialFacebook,
    TiMail,
} from "react-icons/ti";
import { FaGithub} from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_box">
            <div className="footer_box_social">
                <h3>Contact Me</h3>
                <div className="footer_social">
                    <a href="/#"><TiSocialFacebook/></a>
                    <a href="/#"><TiSocialInstagram/></a>
                    <a href="/#"><TiSocialLinkedin/></a>
                    <a href="/#"><FaGithub /></a>
                    <a href="/#"><TiMail /></a>
                </div>
            </div>
            <div className="footer_box_map">
                <h3>Site Map</h3>
                <div className="footer_sitemap">
                    <a href="/skills">Skills</a>
				    <a href="/tools">Tools</a>
				    <a href="/works">Works</a>
				    <a href="/#">About Me</a>
				    <a href="/goals">Goals</a>
                </div>
            </div>
            <div className="test"></div>
            <div className="footer_box_tagline">
             <b>The greatest discovery is to find yourself</b>
            </div>
        </div>
        <div className="footer_box_sorce">
            <b>*Designed by SoulKing</b>
            <div className="footer_sorce">
             <a href="https://github.com/AvishYadav/Portfolio">Website Sorce Code</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer