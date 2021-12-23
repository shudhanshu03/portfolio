import React from 'react'
const date = new Date();
const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer_section">
            <p>Copyright &copy; {date.getFullYear()} All Rights Reserved by  <span style={{color:"#3152b0"}}>Shudhanshu Ranjan</span></p>
                </div>
                
        </section>
    )
}

export default Footer
