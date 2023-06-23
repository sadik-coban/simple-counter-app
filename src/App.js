import React from "react";
import "./App.css";
import {Button} from "./Button";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 0
    }
    this.decreaseClick = this.decreaseClick.bind(this)
    this.resetClick = this.resetClick.bind(this)
    this.increaseClick = this.increaseClick.bind(this)
  }

  decreaseClick() {
    this.setState( state => ({
      count: state.count -= 1
    }))
  }
  resetClick() {
    this.setState({
      count: 0
    })
  }
  increaseClick() {
    this.setState( state => ({
      count: state.count += 1
    }))
  }
  render() {
    let numberColor = "#008000"
    if (this.state.count === 0) {
      numberColor = "black";
    }
    else if (this.state.count < 0) {
      numberColor = "red";
    }
    return (
      <div className="container">
        <h2>Counter</h2>
        <h2 style = {{color:numberColor}}>{this.state.count}</h2>
        <div className = "buttons">
          <Button name="DECREASE" onClick={this.decreaseClick} />
          <Button name="RESET" onClick={this.resetClick} />
          <Button name="INCREASE" onClick={this.increaseClick} />
        </div>
      </div>
    );
  }
}

export default App;
