import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterByIds } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    handleFilter: PropTypes.func
  }

  handleChange = (selected) => {
    console.log('---', ' handleChange ')
    this.props.handleFilter(selected)
  }

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
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapDispatchToProps = {
  handleFilter: filterByIds
}

export default connect(
  null,
  mapDispatchToProps
)(SelectFilter)
