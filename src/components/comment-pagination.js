import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsCurPageSelector, commentListSelector } from '../selectors'
import { loadCommentsByPage, incrementPage, decrementPage } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'
import './comment-pagination.css'

export class Pagination extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    page: PropTypes.number,
    fetchData: PropTypes.func
  }

  changePage(page) {
    const { fetchData } = this.props
    fetchData(page)
  }

  render() {
    const { curPage = 1, pagesCount } = this.props

    const pagesArr = Array.from({ length: pagesCount }, (v, i) => i + 1)
    return (
      <nav aria-label="Page navigation example">
        <h3>{this.props.page}</h3>
        <ul className="hr">
          <NavLink
            to={`/comments/${+curPage - 1 < 1 ? 1 : +curPage - 1}`}
            activeStyle={{ color: 'red' }}
          >
            Previous
          </NavLink>
          {pagesArr &&
            pagesArr.map((item) => {
              return (
                <li
                  key={item}
                  style={{ color: item === curPage ? 'red' : 'blue' }}
                  onClick={() => this.changePage(item)}
                >
                  <NavLink
                    to={`/comments/${item}`}
                    activeStyle={{ color: 'red' }}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            })}
          <NavLink
            to={`/comments/${
              +curPage + 1 > pagesCount ? curPage : +curPage + 1
            }`}
            activeStyle={{ color: 'red' }}
          >
            Next
          </NavLink>
        </ul>
      </nav>
    )
  }

  handlePrevClick = () => {
    this.props.handleDecrementPage(this.props.page)
  }

  handleNextClick = () => {
    this.props.handleIncrementPage(this.props.page)
  }
}

const mapStateToProps = (state) => ({
  comments: commentListSelector(state),
  page: commentsCurPageSelector(state)
})

const mapDispatchToProps = {
  handleIncrementPage: incrementPage,
  handleDecrementPage: decrementPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
