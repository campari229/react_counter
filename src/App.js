import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <>
        <h1>
          Counter:
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.addOne}>
          Count
        </button>
      </>
    );
  }
}

export default App;
