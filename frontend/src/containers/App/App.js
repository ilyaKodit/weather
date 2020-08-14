import React from 'react';
import './style.css';

import Header from '../Header/index';
import Main from '../Main/index';

class App extends React.Component {
  state = {
    color: '#eaeaef',
  };

  changeColor = color => {
    this.setState({
      color,
    })
  };

  render () {
    const { color } = this.state;
    return (
      <div 
        className="app-wrapper"
        style={{backgroundColor: `${color}`, transition: '0.3s'}}
      >
        <Header />
        <Main changeColor={this.changeColor}/>
    </div>
    )
  }
}

export default App;
