import React, { Component, Fragment } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'
import { Consumer as LanguageConsumer } from '../../contexts/language'
const articleTranslations = require('../../translations/article.json')

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'articles-page match: ', this.props.match)
    //      const title = this.props.match.isExact && <h1>Select an Article</h1>
    console.log('---', 1)
    return (
      <Fragment>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </Fragment>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)

    if (!match)
      return (
        <LanguageConsumer>
          {(lang) => <h1>{articleTranslations[lang].empty}</h1>}
        </LanguageConsumer>
      )

    const { id } = match.params
    return <Article id={id} key={id} isOpen />
  }
}

export default ArticlesPage
