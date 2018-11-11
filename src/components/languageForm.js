import React, { Component } from 'react'

class LanguageForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'en' }
  }

  render() {
    // <input value={this.props.value} onChange={this.handleLanguageChange} />
    return (
      <div>
        <select value={this.state.value} onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    )
  }

  handleLanguageChange = (ev) => {
    this.props.onChange(ev.target.value)
    this.setState({ value: ev.target.value })
  }
}

export default LanguageForm
