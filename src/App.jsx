
import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.twoColor,
    };
  }

  boxClick = () => {
    this.setState(oneState => ({
      color: oneState.color === 'red' ? 'blue' : 'red',
    }));
  };

  render() {
    return (
      <div
        style={{
          width: '220px',
          height: '220px',
          backgroundColor: this.state.color,
        }}
        onClick={this.boxClick}
      ></div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='box'>
        <Square twoColor="red" />
        <Square twoColor="blue" />
      </div>
    );
  }
}

export default App;



