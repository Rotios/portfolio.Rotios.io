import React from 'react';

class Title extends React.Component {
    render() {
        return (
    <span>

            <h1 class="color--skyBlue section__heading--largest">
        {/* <!--Your name goes here --> */}
        ROTIOS.IO
      </h1>

      <ul class="section--social">

        {/* <!--Links to relevant professional social media & resume -->
        <!-- See: http://fontawesome.io/icons/#brand for more -->

        <!-- Link to Linked In profile --> */}
        <li class="socialWrapper">
          <a class="color--skyBlue social"
             title="LinkedIn Profile"
             target="_blank"
             href="https://www.linkedin.com/in/rotios/">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>

        {/* <!-- Link to GitHub profile --> */}
        <li class="socialWrapper color--skyBlue">
          <a class="social color--skyBlue"
             title="GitHub Profile"
             target="_blank"
             href="https://github.com/Rotios">
            <i class="fa fa-github"></i>
          </a>
        </li>

        {/* <!-- Link to resume, probably a .pdf --> */}
        <li class="socialWrapper">
          <a class="social color--skyBlue"
             title="Resume"
             href="#">
            <i class="fa fa-file-text"></i>
          </a>
        </li>
      </ul>
      </span>
        )
    }
}
export default Title
