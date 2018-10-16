import React, { PureComponent } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import CommentList from '../comment-list'
import './style.css'
import PropTypes from 'prop-types'

class Index extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    // const { article, isOpen } = this.props
    return (
      <div>
        <h3>
          {this.props.article.title}
          <button onClick={this.handleClick} className="test--article__btn">
            {this.props.isOpen ? 'close' : 'open'}
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

  //  handleClick = () => this.props.toggleOpen(this.props.article.id)
  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    // const { isOpen, article } = this.props
    if (!this.props.isOpen) return null
    if (this.state.error) return <h3>Error</h3>

    return (
      <section className="test--article__body">
        {this.props.article.text}
        <CommentList comments={this.props.article.comments} />
      </section>
    )
  }
}

Index.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  }),
  isOpen: PropTypes.bool
}

export default Index
