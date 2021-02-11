import React from 'react'

const Navbar = () => {
    return (

        <section className="NavContainer">
            <nav>
                <div className="Logo">
                    <i className="fas fa-glasses"></i>
                    <h4>LOGO</h4>
                    
                </div>
                <ul className="NavLinks">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">Projects</a></li>
                    <li className="link"><a href="#">CV</a></li>
                </ul>

                
            </nav>
        </section>
        
    )
}

export default Navbar


