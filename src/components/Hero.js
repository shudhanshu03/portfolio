import React from 'react'
import TypeWriter from 'typewriter-effect'
import Heroimage from '../images/dp_codingg.png'
import CV from '../assets/Shudhanshu_Resume.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    return (
        <div id="hero" className="container">
            <div className="hero_left">
                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://www.instagram.com/shudhanshu_03/"><i className="fa fa-instagram"></i></a></li>
                        <li className="link_item"><a href="https://github.com/shudhanshu03"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://twitter.com/Shudhan25376214"><i className="fa fa-twitter"></i></a></li>
                        <li className="link_item"><a href="https://www.linkedin.com/in/shudhanshu-ranjan-4725481a2/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>


                </div>

                <p className="name">Shudhanshu Ranjan</p>
                <p className="title"><span class="title_span">I'm a  </span>
                    <TypeWriter
                        options={{
                            strings: ['Software Developer','Competitive Programmer','MERN-Stack Developer'],
                            autoStart: true,
                            delay:60,
                            loop: true,
                        }}
                    />
                </p>
                <div className="hero_btns">
                    <p className="cv_download"><a target="_blank" rel="noreferrer" href={CV}>Download CV <span><i className="fa fa-download" aria-hidden="true"></i></span></a></p>
                    <p className="hire_btn">
                        <Link to="contact">Hire Me</Link>
                    </p>
                </div>
            </div>
            <div className="hero_right">
                <img src={Heroimage} alt="profile_image" />
            </div>
        </div>
    )
}

export default Hero

