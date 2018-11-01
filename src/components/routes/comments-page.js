import React, { Component, Fragment } from 'react'
import CommentPagination from '../comment-pagination'
import { Route } from 'react-router-dom'
import Comment from '../comment'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'comments-page match: ', this.props.match)
    return (
      <Fragment>
        <CommentPagination />
        <Route path="/comments/page/:id" children={this.getComments} />
      </Fragment>
    )
  }

  getComments = ({ match }) => {
    console.log('---', 'comments match: ', match)

    if (!match) return <h1>Please Select A Page</h1>

    const { id } = match.params
    return <Comment id={id} key={id} isOpen />
  }
}

export default CommentsPage
