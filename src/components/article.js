import React, { PureComponent } from 'react'

class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  render() {
    console.log('---', 'rendering article')
    const { article } = this.props
    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>
          {this.state.isOpen ? 'close' : 'open'}
        </button>
        {this.body}
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
