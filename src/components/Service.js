import React from 'react'

const Service = () => {
    return (
        <section id="services">
            <div className="container service_section">
                <h1 data-aos="fade-left">Achievements</h1>
                <div className="all_services">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4">

                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                            <h5>ICPC Regionalist'2020</h5>
                            <p>Qualified for ICPC Regionals from Amritapuri Region and we were the first team from our Institution to get qualified for ICPC regionals</p>
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4" >
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-code" aria-hidden="true"></i></span>
                            <h5>4* at Codechef </h5>
                            <p>I do Competitive Programming for improving my logic building skills</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4">
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-codepen" aria-hidden="true"></i></span>
                            <h5>Working as a Techinal Head at Cureya </h5>
                            <p>I Promoted to this role recently after working as React.js Developer at Cureya</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-12 col-lg-12 col-xl-12">
                            <div className=" service_item app_dev" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                            <h5>Facebook Hackercup 2021</h5>
                            <p>Secured rank 2826 out of 30k participant</p>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
