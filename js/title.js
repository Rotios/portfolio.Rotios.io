import React from 'react';

class Title extends React.Component {
    render() {
        return (
    <span>

            <h1 className="color--skyBlue section__heading--largest">
        {/* <!--Your name goes here --> */}
        ROTIOS.IO
      </h1>

      <ul className="section--social">

        {/* <!--Links to relevant professional social media & resume -->
        <!-- See: http://fontawesome.io/icons/#brand for more -->

        <!-- Link to Linked In profile --> */}
        <li className="socialWrapper">
          <a className="color--skyBlue social"
             title="LinkedIn Profile"
             target="_blank"
             href="https://www.linkedin.com/in/rotios/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>

        {/* <!-- Link to GitHub profile --> */}
        <li className="socialWrapper color--skyBlue">
          <a className="social color--skyBlue"
             title="GitHub Profile"
             target="_blank"
             href="https://github.com/Rotios">
            <i className="fa fa-github"></i>
          </a>
        </li>

        {/* <!-- Link to resume, probably a .pdf --> */}
        <li className="socialWrapper">
          <a className="social color--skyBlue"
             title="Resume"
             href="#">
            <i className="fa fa-file-text"></i>
          </a>
        </li>
      </ul>
      </span>
        )
    }
}

export default Title
