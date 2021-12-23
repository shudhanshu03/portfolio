import React from 'react'
import p1 from '../images/project1.png'

const Projects = () => {
    const projects = [
        {
            name: "Realtime_Chat_Application",
            img : p1,
            languageOrFramwork: "HTML ,CSS , JS , Node.js , Socket.io",
            link: "https://github.com/shudhanshu03/Realtime_Chat_Application"
        }     
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
                <h1 data-aos="fade-left">Projects</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>Github Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Projects
