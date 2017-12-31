import React from 'react';

import Tile from './Tile';

class BoardSquare extends React.Component {
  render() {
    const props = this.props;
    if(props.content) {
      console.log(props.content);
    }
    return <div
      className='board-square-container'
      ref={dom => this.squareDom = dom}
      style={{
        height: props.size,
        width: props.size
      }}
    >{
        props.content ?
          <Tile content={props.content} onReleaseDrag={e => this.props.releasedTileAt(e.clientX, e.clientY, props.content)} />
          : <div className='board-square-empty'></div>
      }</div>
  }
}

export default BoardSquare;