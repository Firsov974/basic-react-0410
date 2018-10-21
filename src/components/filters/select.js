import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterByIds } from '../../ac'

class SelectFilter extends Component {
  state = {
    selected: null
  }

  handleChange = (selected) => {
    this.setState({ selected })
  }
  //  handleChange = (selected) => {
  //	const { filterByIds } = this.props.filterByIds(selected)
  //  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selected}
        //        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { filterByIds }
)(SelectFilter)
