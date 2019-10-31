  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';
import "./components/TodoComponents/Todo.css";
import data from "./components/TodoComponents/Todo";
import Item from "./components/TodoComponents/TodoList";
import ItemForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: data,
    }
  }
  toggleTodo = (event, itemId) => {
    event.preventDefault()

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            checked: !item.checked
          }
        } else {
          return item
        }
      })
    })
  }

  clearChecked = event => {
    event.preventDefault()

    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.checked
      })
    })
  }

  addTodo = (event, itemName) => {
    const newTodo = {
      id: Date.now(),
      name: itemName,
      checked: false
    }

    this.setState({
      todo: [newTodo, ...this.state.todo]
    })
  }

  render() {
      return (
        <div className="App">
          <div className="header">
            <h1>Check it Off</h1>
            <ItemForm addTodo={this.addTodo} />
          </div>
  
          <div className="checkList">
            {this.state.todo.map(item => (
              <Item
                key={item.id}
                item={item}
                onClick={(e) => this.toggleTodo(e, item.id)}
              />
            ))}
  
            <button className="clear-btn" onClick={this.clearChecked}>
              Clear Checked
            </button>
          </div>
        </div>
    );
  }
}



export default App;
