import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addComment } from '../ac'
import { connect } from 'react-redux'
import './comment-form.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div className="form--add__comm">
        <input
          type="text"
          className="form--add__user"
          placeholder="User"
          value={this.state.user}
          onChange={this.handleUserChange}
        />
        <textarea
          value={this.state.text}
          className="form--add__text"
          onChange={this.handleTextChange}
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="form--add__btn"
        >
          Submit
        </button>
      </div>
    )
  }

  handleUserChange = (ev) => {
    this.setState({ user: ev.target.value })
  }

  handleTextChange = (ev) => {
    this.setState({ text: ev.target.value })
  }

  handleSubmit = () => {
    const { addComment } = this.props
    addComment({ ...this.state, articleId: this.props.articleId })
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
