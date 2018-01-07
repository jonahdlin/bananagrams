import React from 'react';
import Header from './Header';
import BoardContainer from './BoardContainer';
import ChatContainer from './ChatContainer';
import GameList from './GameList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showGame: true //server controlled instead of showGame? 
    }
  }

  render() {
    var div;
    if (this.state.showGame) {
      div = <div className='App'>
        <Header />
        <ChatContainer />
        <BoardContainer />
      </div>
    } else {
      div = <div className='Menu'>
        <ChatContainer />
        <GameList />
      </div>
    }
    return div;
  }
}

export default App;