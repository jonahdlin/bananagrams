import React from 'react';

import BoardSquare from './BoardSquare';

class Board extends React.Component {
  render() {
    const props = this.props;

    const boardTiles = props.boardTiles.map((row, i) =>
      <div className='board-row' key={i}>{
        row.map((square, j) => <BoardSquare
          content={square}
          size={props.squareSize}
          key={j}
          releasedTileAt={(x, y, val) => props.releasedTileAt(x, y, val, i, j)}
        />
        )}</div>
    );

    return <div className='board-and-rack-container'>
      <div className='board'>
        {boardTiles}
      </div>
    </div>
  }
}

export default Board;