import React from "react";

class ItemForm extends React.Component {
  constructor() {
    // super() needed for use of state
    super()
    this.state = {
      value: ""
    }
  }
  // onChange event handler
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  // funtion to add ne todo
  handleSubmit = (event) => {
    //prevent reload
    event.preventDefault()

    this.props.addTodo(event, this.state.value)

    this.setState({
      value: ""
    })
  }
  // to display on screen
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