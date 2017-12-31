import React from 'react';
import Draggable from 'react-draggable';

class Tile extends React.Component {
  componentWillUnmount() {
    console.log('I\'m dying!');
  }
  
  render() {
    const props = this.props;

    let tileDiv = <Draggable
      onStop={e => props.onReleaseDrag(e)}
    >
      <div className='tile'>{props.content}</div>
    </Draggable>;

    return tileDiv;
  }
}

export default Tile;