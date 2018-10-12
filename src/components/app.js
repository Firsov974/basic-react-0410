import React, { Component } from 'react'
import ArticleList from './article-list'
import ArticlesChart from './articles-chart'
import UserForm from './user-form'
import articles from '../fixtures'
import Filters from './filters'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
