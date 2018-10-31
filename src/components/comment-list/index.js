import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { commentsLoadingSelector, commentsSelector } from '../../selectors'
import { loadAllComments } from '../../ac'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    if (this.props.loading) return <Loader />

    const {
      article: { id },
      comments = [],
      isOpen
    } = this.props
    if (!isOpen) return null

    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment id={comment.id} />
          </li>
        ))}
      </ul>
    )
  }

  componentDidUpdate(oldProps) {
    const { isOpen, fetchData, comments = [], article } = this.props
    if (!oldProps.isOpen && isOpen && !comments.length && fetchData)
      fetchData(article.id)
  }
}

const createMapStateToProps = () => {
  return (state, ownProps) => ({
    comments: commentsSelector(state, ownProps),
    loading: commentsLoadingSelector(state)
  })
}

export default connect(
  createMapStateToProps(),
  { fetchData: loadAllComments }
)(toggleOpen(CommentList))
