
import React, { Component } from "react"
import '../../../common/Colors.css'
import './Minesweeper.css'
import Board from './Board'

export default class Minesweeper extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isHidden: true
        };
    }

    render() {
      return (
        <section>
            <section className="project background--gray">
                <div  className="color--cloud info">
                    <div className="color--cloud">
                        <h3>Solving Minesweeper</h3>
                    </div>
                </div>
            </section>

            <section className="game background--cloud">
                <Board height={16} width={16} numMines={40}></Board>
            </section>
        
        </section>
      );
    }
  }
  