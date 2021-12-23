import React from 'react'
import AboutImg from '../images/dp_coding.png'
const About = () => {
   
    return (
        <section id="about">
            <div className="container about_me">
            <div data-aos="fade-right" className="about_top">
                <h1>About Me</h1>
                <p>Hey , I'm Shudhanshu Pursuing B.Tech and I'm a pre final year student. Basically I'm a Full-Stack Developer [MERN]✌🏼, Other than that, I do Competitive Programming as it helps me in improving logic building and problem solving stuffs . And yeah Interested in exploring new things in tech• field . And All of that , I am a Learner too ✌🏼..
                </p>
                <div className="line"></div>
            </div>
            <div className="about_bottom">
                <div data-aos="fade-right" className="about_bottom_left">
                    <img src={AboutImg} alt="about_image" />
                </div>
                <div data-aos="fade-left" className="about_bottom_right">
                    <h2>Software Developer and Web Developer</h2>
                    <div className="about_details">
                        <div className="about_details_left">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Codechef Rating:</span> 1809 (4*) </p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Phone:</span> +919110953931</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>City:</span> Bengaluru, India</p>
                        </div>
                        <div className="about_details_right">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>College:</span> DSI , Bengaluru</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Email:</span> sudhanshu03062002@gmail.com</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    )
}

export default About
