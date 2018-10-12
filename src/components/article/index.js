import React, { PureComponent } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import CommentList from '../comment-list'
import './style.css'

class Index extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test--article__btn">
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        <CSSTransition
          transitionAppear
          transitionName="article"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    if (this.state.error) return <h3>Error</h3>

    return (
      <section className="test--article__body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default Index
