import React from 'react';

import Header from './Header';
import BoardContainer from './BoardContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showGame: true //server controlled instead of showGame? 
    }
  }

  render() {
    var div;
    if (this.state.showGame){
      div = <div className='App'>
      <Header />
      <BoardContainer />
      </div>
    } else {
      div = <div className='Menu'> <h1>Menu features go here </h1> </div>
    }
    return div;
  }
}

export default App;