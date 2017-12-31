import React from 'react';
import _ from 'lodash';
import Board from './Board';

const boardSize = {
  h: 10,
  w: 10
};

const squareSize = 60

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rackTiles: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      boardTiles: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, 'a', null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'z', null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, 'b', null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ] // Should pick a better data type later
    }
  }

  releasedTileAt(x, y, val, origX, origY) {
    const boardBounding = this.boardDom.getBoundingClientRect();
    const boardX = boardBounding.top;
    const boardY = boardBounding.left;
    const xTile = Math.floor((x - boardX) / squareSize);
    const yTile = Math.floor((y - boardY) / squareSize);

    if (xTile + 1 > boardSize.w || xTile + 1 < 1 || yTile + 1 > boardSize.h || yTile + 1 < 1) {
      console.log('out of board');
      this.forceUpdate();
    } else if (xTile === origY && yTile === origX) {
      this.forceUpdate();
    } else {
      let newBoard = this.state.boardTiles.slice();
      let newRack = this.state.rackTiles.slice();
      const tileToReplace = newBoard[yTile][xTile];

      if (tileToReplace) {
        console.log('Replacing ' + tileToReplace + ' with ' + val);
        newRack.push(tileToReplace);
      } else {
        console.log('Moved ' + val + ' to ' + xTile + ', ' + yTile);
      }

      newBoard[origX][origY] = null;
      newBoard[yTile][xTile] = val;

      this.setState({
        boardTiles: newBoard,
        rackTiles: newRack
      });
    }
  }

  render() {
    const state = this.state;
    console.log(state.boardTiles);
    return <div
      className='board'
      ref={dom => this.boardDom = dom}
    >
      <Board
        rackTiles={state.rackTiles}
        boardTiles={state.boardTiles}
        squareSize={squareSize}
        releasedTileAt={(x, y, val, origX, origY) => this.releasedTileAt(x, y, val, origX, origY)}
      />
    </div>
  }
}

export default BoardContainer;