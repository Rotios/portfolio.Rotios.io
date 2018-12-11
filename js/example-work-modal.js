import React from 'react';

class ExampleWorkModal extends React.Component {
    render() {
        let example = this.props.example;
        let image_info = this.props.example.image;
        let isOpen = this.props.open ? 'open' : 'closed';

        return (
            <div className={ "background--skyBlue modal--" + isOpen } >
                <span className="color--cloud modal__closeButton"
                onClick={ this.props.closeModal }
                >
                    <i className="fa fa-window-close-o"></i>
                </span>

               {/* <img alt={ image_info.desc }
                    className="modal__image"
                    src={image_info.src}/>
        */}
                <div className="color--cloud modal__text">
                    <h2 className="modal__title">
                        { example.title }
                    </h2>
                    <a className="color--skyBlue modal__link"
                        href={ example.href }
                        target="_blank">
                            Check it out!
                        </a>
                    <p className="modal__description">
                        { example.desc }
                    </p>
                </div>
            </div>
        )
    };
};

export default ExampleWorkModal