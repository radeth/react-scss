import React, { Component } from 'react';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      version: 'one'
    }
  }
  renderSwitch(version){
    switch(version){
      case'one':
        return(
          <div>version one</div>
        )
      break
      case'two':
      return(
        <div>version two</div>
      )
      break
    }
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.versionOne.bind(this)}>version one</button>
        <button onClick={this.versionTwo.bind(this)}>version two</button>
        {this.renderSwitch(this.state.version)}
        
      </div>
    );
  }
  versionOne() {
    this.setState({
      version: 'one'
    })
  }
  versionTwo() {
    this.setState({
      version: 'two'
    })
  }
 
}

export default App;
