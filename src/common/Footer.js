import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h1 className="color--cloud">
                    <p className="footer--copyright">
                        (C) 2018 Jose Rivas
                    </p>
                </h1>
            </div>
        )
    }
}