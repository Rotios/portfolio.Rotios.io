import React from 'react';
import './Header.css'
import './Social.css'
import './Colors.css'

export default class Header extends React.Component {

    render() {
    
        return (
        <div className= "header">
            <div className="header--container">

                <div className="header--item">
                <h1 className="color--cloud header--text">
                    <a href="https://portfolio.rotios.io" className="social color--cloud">
                    ROTIOS.IO
                    </a>
                </h1>
                </div>

                <div className="header--item">
                <ul className="section--social">

                    <li className="socialWrapper">
                    <a className="social"
                        title="LinkedIn Profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/rotios/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    </li>

                    {/* <!-- Link to GitHub profile --> */}
                    <li className="socialWrapper ">
                    <a className="social"
                        title="GitHub Profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Rotios">
                        <i className="fab fa-github"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        )
    }
}
