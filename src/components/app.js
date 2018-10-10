import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import UserForm from './user-form'
import articles from '../fixtures'

class App extends Component {
  state = {
    selected: null,
    selectedComment: null
  }

  render() {
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectionChange}
          isMulti
        />
        <ArticleList
          articles={articles}
          ref={this.setArticleListRef}
          changeSelectComment={this.changeSelectComment}
          selectedComment={this.state.selectedComment}
        />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  changeSelectComment = (selectedComment) => {
    if (selectedComment == this.state.selectedComment) {
      this.setState({ selectedComment: null })
    } else {
      this.setState({ selectedComment })
    }
  }

  handleSelectionChange = (selected) => this.setState({ selected })

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  setArticleListRef = (ref) => {
    console.log('---', 'article list ref', ref, findDOMNode(ref))
  }
}

export default App
