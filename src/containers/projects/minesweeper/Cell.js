
import React, { Component } from "react"
import '../../../common/Colors.css'
import './Minesweeper.css'

export default class ProjectSection extends Component {
    getChar() {
        if (this.props.isFlagged) {
            return "🚩"
        }

        if (this.props.isHidden) {
            return ""
        }

        if (this.props.isMine) {
            return "💣"
        }

        return this.props.value
    }

    render() {
        let cName = (this.props.isHidden) ? "cell hidden" : "cell"

        cName += this.props.highlight
 
        return (
            <section className={cName} onClick={this.props.onClick} onContextMenu={this.props.onCtxMenu}>
                {this.getChar()}
            </section>
        );
    }
  }
  