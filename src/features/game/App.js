import React from 'react';

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
        <BoardContainer />
      </div>
    );
  }
}

export default App;
