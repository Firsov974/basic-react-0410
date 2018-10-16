import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div>
      <section className="test--comment__body">
        {comment.text} <b>by {comment.user}</b>
      </section>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

export default Comment
