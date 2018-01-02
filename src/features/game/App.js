import React from 'react';

import Header from './Header';
import BoardContainer from './BoardContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <BoardContainer />
      </div>
    );
  }
}

export default App;