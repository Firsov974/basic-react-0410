import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'
import { filtratedArticlesSelector } from '../selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    console.log('---', 'rendering article list')
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return Object.keys(articles).map((id) => (
      <li key={id} className="test--article-list__item">
        <Article
          article={articles[id]}
          isOpen={openItemId === id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

export default connect((state) => {
  console.log('---', 'article list connect')
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordionDecorator(ArticleList))
