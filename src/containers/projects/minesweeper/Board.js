import '../../../common/Colors.css'
import '../../../common/Section.css'
import './MineSweeper.css'
import Cell from './Cell'
import React from 'react';

export default class Board extends React.Component {
    
    renderBoard(data) {
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
                return (
                    <div key={dataitem.x * datarow.length + dataitem.y}>
                        <Cell
                            onClick={() => this.handleCellClick(dataitem.x, dataitem.y)}
                            cMenu={(e) => this._handleContextMenu(e, dataitem.x, dataitem.y)}
                            value={dataitem}
                        />
                        {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}
                    </div>);
            })
        });
    }

    // Component methods
    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
            this.setState({
                boardData: this.initBoardData(nextProps.height, nextProps.width, nextProps.mines),
                gameWon: false,
                mineCount: nextProps.mines,
            });
        }
    }

    render() {
        return (
            <div className="board">
                <div className="game-info">
                    <span className="info">mines: {this.state.mineCount}</span><br />
                    <span className="info">{this.state.gameWon ? "You Win" : ""}</span>
                </div>
                {
                    this.renderBoard(this.state.boardData)
                }
            </div>
        );
    }
}