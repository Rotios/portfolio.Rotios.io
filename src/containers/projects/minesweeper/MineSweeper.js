import '../../../common/Colors.css'
import '../../../common/Section.css'
import './MineSweeper.css'

import Board from './Board'
import React from 'react';

export default class MineSweeper extends React.Component {

    render() {
        return (
            <section id='works' className="section section--alignCentered section--description">
                <div className="work-group">
                    <div className="color--navy margin--none section__text--centered">
                        <h2>Solving MineSweeper</h2>
                        <p>
                            A MineSweeper solver I created in python and ported to JavaScript. 
                        </p>
                    </div>
                </div>

                <div className="game">
                    <Board height={10} width={10} mines={10}/>
                </div>
            </section>
        )
    }
}
