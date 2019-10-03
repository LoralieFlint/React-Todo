import React from "react";

class ItemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addTodo(event, this.state.value)

    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="Checked">Add</button>
      </form>
    );
  }
}

export default ItemForm;