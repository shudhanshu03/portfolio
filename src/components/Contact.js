import React from 'react'
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const [messageBody,setMessage]=useState({
          name:'',
          email:'',
          subject:'',
          message:''
    })
    const handleChange=(e)=>
    {
        const field=e.target.name;
        const value=e.target.value;
       setMessage((preV)=>
       {
           return {...preV,[field]:value}
       })
    }
    
     
    return (
        <section id="contact">
            <div data-aos="fade-down" className="container contact_me">
                <h1>Contact Me</h1>
                <p className="para">Do you have any query?</p>
                <p className="para">Feel free to contact with me.</p>
                
                <div data-aos="fade-down" className="contact_information row">
                    <div className=" con location col-12 col-sm-12 col-md-6 col-lg-4 ">
                    <span className="contact_icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                      <h6>Location</h6>
                      <p>Bengaluru, India</p>
                      </div>
                    </div >
                    <div className="con call_me col-12 col-sm-12 col-md-6 col-lg-4">
                    <span className="contact_icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                    <h6>Call Me</h6>
                      <p>+919110953931</p>
                      </div>
                    </div>
                    <div className="con gmail col-12 col-sm-12 col-md-6 col-lg-4">
                    <span className="contact_icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                    <h6>Email</h6>
                    <p>sudhanshu03062002@gmail.com</p>
                    </div>
                    </div>


                </div>
                <div data-aos="fade-right" className="contact_form">
                    <form action="mailto:sudhanshu03062002@gmail.com" method="GET">
                 <div className="row">
                     <div className="col-lg-6">
                 <input type="text" onChange={handleChange} value={messageBody.name} name="name" aria-required="true" aria-invalid="false" placeholder="Your Name"/>
                 </div>
                 <div className="col-lg-6">
                 <input type="email" onChange={handleChange} value={messageBody.email} name="email" aria-required="true" aria-invalid="false" placeholder="Your Email"/>
                 </div>
                 <div className="col-lg-12">
                 <input type="text" onChange={handleChange} value={messageBody.subject} name="subject" aria-required="true" aria-invalid="false" placeholder="Your Subject"/>
                 
                 <textarea  onChange={handleChange} name="message" value={messageBody.message} aria-required="true" placeholder="Your Message"></textarea>
                <input type="submit"  value="Send Message"/>
                </div>
                 </div>
                 </form>
                </div>
              
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Contact
