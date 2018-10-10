import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Comment extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  render() {
    console.log('---', 'rendering comment')
    const { comment } = this.props
    return (
      <div style={{ marginTop: '10px' }}>
        {/*<button onClick={this.onButtonClick}>
          	{this.state.isOpen ? 'close' : 'open'}
        </button>*/}
        <h4 ref={this.setTitleRef}>{comment.user}</h4>
        {comment.text}
        {/*this.body*/}
      </div>
    )
  }

  setTitleRef = (ref) => {
    console.log('---', 'comments title', ref)
  }

  onButtonClick = () => {
    this.props.toggleOpen(this.props.article.id)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  get body() {
    const { comment } = this.props
    if (!this.state.isOpen) return null
    return <section>{comment.text}</section>
  }
}

export default Comment
