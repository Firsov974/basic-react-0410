import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment__btn">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    // const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="test--comment__list">
        <CSSTransition
          transitionAppear
          transitionName="comment"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {comments.map((comment) => (
            <li key={comment.id} className="test--comment-list__item">
              <Comment comment={comment} />
            </li>
          ))}
        </CSSTransition>
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div className="test--comment__body">{body}</div>
  }

  componentDidMount() {
    const { fetchData } = this.props

    fetchData && fetchData()
  }
}

const CommentListWithToggleOpen = toggleOpen(CommentList)

export default CommentListWithToggleOpen
