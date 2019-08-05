
import React, { Component } from "react"
import Cell from "./Cell"
import '../../../common/Colors.css'
import './Minesweeper.css'

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = this.initBoard(this.props.height, this.props.width, this.props.numMines)    
    }
    
    componentDidMount() {
    }

    initBoard(height, width, mines) {
        let x = 0

        let arr = new Array()
        for (x; x<width; x++) {
            let y = 0

            let innerArr = new Array()
            for (y; y<height; y++) {
                let cellData = {
                    isMine: false, 
                    isFlagged:false, 
                    isHidden:true, 
                    value:0
                }
                innerArr.push(cellData)
            }

            arr.push(innerArr)
        }

        let count = 0
        while (count < mines) {
            let nextPos = this.getNextMinePos(height, width)

            if (!arr[nextPos[0]][nextPos[1]].isMine) {
                arr[nextPos[0]][nextPos[1]].isMine = true
                count += 1
            }
        }

        return this.updateMineCounts(arr, width, height)
    }

    updateMineCounts(data, width, height) {
        let x = 0
        for (x; x<width; x++) {
            let y = 0

            for (y; y<height; y++) {
                if (data[x][y].isMine) {
                    let minX = x-1
                    for (minX; minX < x+2 && minX < width && minX>0; minX++) {
                        let minY = y - 1
                        for (minY; minY<height && minY < height && minY>0; minY++) {
                            data[minX][minY].value+=1
                        }
                    }
                }
            }
        }

        return {board: data}
    }

    getNextMinePos(height, width) {
        let randVal = Math.floor(Math.random() * height*width)

        let x = Math.floor(randVal/width)
        let y = randVal % height
        
        console.log([x,y])
        return [x,y]
    }

    handleCellClick(x,y) {

    }

    handleContextMenu(e,x,y) {
        
    }

    renderCells() {
        let arr = new Array()
        let x = 0
        for (x; x<this.props.width; x++) {
            let innerArr = new Array()
            let y = 0

            for (y; y<this.props.height; y++) {
                let cellInfo = this.state.board[x][y]
                innerArr.push(<Cell key={x*this.props.width+y} isMine={cellInfo.isMine} 
                        isFlagged={cellInfo.isFlagged} isHidden={cellInfo.isHidden} value={cellInfo.value}
                        onClick={() => this.handleCellClick(x, y)}
                        cMenu={(e) => this.handleContextMenu(e, x, y)}
                    />)
            }
            innerArr.push(<div className='clear'></div>)

            arr.push(innerArr)
        }
        return arr
    }

    render() {
        let arr = this.renderCells()
      return (
        <section className="board">
            {arr}
        </section>
      );
    }
  }
  

