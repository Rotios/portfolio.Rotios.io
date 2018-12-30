import React from 'react';

class ExampleWorkModal extends React.Component {
    render() {
        let example = this.props.example;
        let image_info = this.props.example.image;
        let isOpen = this.props.open ? 'open' : 'closed';

        return (
            <div align="left" className={ "background--skyBlue modal--" + isOpen } >
                <span className="color--cloud modal__closeButton"
                    onClick={ this.props.closeModal }
                >
                    <i className="fa fa-window-close-o"></i>
                </span>

                <div className="color--cloud modal__text">
                    <h2 className="modal__title">
                        { example.title }
                    </h2>
                    <div  className="display--inline">
                        <a className="color--skyBlue modal__link"
                            href={ example.href }
                            target="_blank">
                                Try it Out!
                            </a>
                        <a className="color--skyBlue modal__link"
                            href={ example.github }
                            target="_blank">
                                See the Code!
                            </a>
                    </div>
                    <div className="modal__description">
                        { example.desc }
                    </div>
                </div>
            </div>
        )
    };
};

export default ExampleWorkModal