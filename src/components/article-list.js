import React, { Component } from 'react'
import Article from './article'
import accordionDecorator from '../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
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

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    })
  ).isRequired,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func
}

const ArticleListWithAccordion = accordionDecorator(ArticleList)

export default ArticleListWithAccordion
