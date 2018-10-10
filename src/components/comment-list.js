import React, { Component } from 'react'
import Comment from './comment'
import commentsDecorator from '../decorators/accordion'

class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  render() {
    const { article, selectedComment, changeSelectComment } = this.props
    const isOpen = selectedComment == article.id
    return (
      <div>
        <button onClick={this.onButtonClick}>
          {this.state.isOpen ? 'Close Comments' : 'Open Comments'}
        </button>
        <ul>{isOpen && this.items}</ul>
      </div>
    )
  }

  get items() {
    const { article, openItemId, toggleOpenItem } = this.props
    const comments = article.comments || []
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  onButtonClick = () => {
    // () =>  this.props.changeSelectComment( article.id )
    const { article, selectedComment, changeSelectComment } = this.props
    changeSelectComment(article.id)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

CommentList.defaultProps = {
  comments: []
}

export default commentsDecorator(CommentList)
