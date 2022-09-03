// @ts-nocheck
import React from 'react'
import { createRoot } from 'react-dom/client'

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <h1>setState的问题</h1>
        <div>我点击了{this.state.count}次</div>
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App></App>)
