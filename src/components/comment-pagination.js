import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  commentsLoadedSelector,
  commentsLoadingSelector,
  commentListSelector
} from '../selectors'
import { loadPageComments } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'

export class CommentPagination extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    fetchData: PropTypes.func
  }

  render() {
    if (this.props.loading) return <Loader />
    return <ul>{this.items}</ul>
  }

  get items() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id} className="test--comment-list__item">
        <NavLink to={`/comments/${comment.id}`} activeStyle={{ color: 'red' }}>
          {comment.text}
        </NavLink>
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData, loaded, loading } = this.props
    fetchData && !loading && !loaded && fetchData()
  }
}

export default connect(
  (state) => {
    return {
      comments: commentListSelector(state),
      loading: commentsLoadingSelector(state),
      loaded: commentsLoadedSelector(state)
    }
  },
  { fetchData: loadPageComments }
)(CommentPagination)
