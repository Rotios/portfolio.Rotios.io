import React from 'react';

class Title extends React.Component {
    render() {
        return (
          <div className="title__header--container">

            <div className="title__header--item">
              <h1 className="color--skyBlue section__heading--largest">
                <a href="https://portfolio.rotios.io" className="social">
                {/* <!--Your name goes here --> */}
                ROTIOS.IO
                </a>
              </h1>
            </div>

            <div className="title__header--item">
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
              </ul>
            </div>
          </div>
        )
    }
}

export default Title
