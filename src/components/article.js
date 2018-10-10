import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  render() {
    console.log('---', 'rendering article')
    const {
      article,
      isOpen,
      toggleOpen,
      changeSelectComment,
      selectedComment
    } = this.props
    console.log('aaaa')
    console.log(article)
    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>
          {this.state.isOpen ? 'close' : 'open'}
        </button>
        {this.body}
        <CommentList
          article={article}
          isOpen={isOpen}
          changeSelectComment={changeSelectComment}
          selectedComment={selectedComment}
          toggleOpen={toggleOpen}
        />
      </div>
    )
  }

  setTitleRef = (ref) => {
    console.log('---', 'article title', ref)
  }

  onButtonClick = () => {
    this.props.toggleOpen(this.props.article.id)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  get body() {
    const { article } = this.props
    if (!this.state.isOpen) return null
    return <section>{article.text}</section>
  }
}

export default Article
