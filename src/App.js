import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newItem: "",
      list:[]
    }
  }

  addItem(todoValue){
    const item = {
      id: Date.now(),
      value: todoValue,
      done: false
    }

    const list = [...this.state.list]
    list.push(item)

    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this.setState({list: updatedList})
  }

  updateItemStatus(id){
    this.setState({list: this.state.list.map(item => (item.id === id ? Object.assign(item,{done: !item.done}):item))})
  }

  updateInput(input) {
    this.setState({newItem: input})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt='react logo' width='100'/>
          <p>TODO App</p>
        </header>

        <div className="Add-task">
          <label>Enter the task</label>
          <input type="text" placeholder="Enter the task" style={{width: "40%"}} value={this.state.newItem} onChange={e => {this.updateInput(e.target.value)}} required/>
          <button type="button" onClick={() => {this.addItem(this.state.newItem)}} disabled={!this.state.newItem.length}>Add Task</button> 
        </div>

        <div className="Task-list">
          <h3>Task List</h3>
          <ul>
            {
              this.state.list.map(item => {
                return (
                  <li>
                    <input type="checkbox" checked={item.done} onClick={() => this.updateItemStatus(item.id)}/>
                    <label>{item.value}</label>
                    <button type="button" onClick={() => {this.deleteItem(item.id)}}>Delete</button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <footer className="App-footer">
          <p>Developed By : Samarth Gupta</p>
        </footer>
      </div>
    )
  }
}

export default App