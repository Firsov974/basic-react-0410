import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'
import { filterByIds } from '../../ac'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter
          articles={this.props.articles}
          selected={this.props.filters.id}
        />
        <DateRange filter={this.props.filters.dates} />
        <button onClick={this.handleFilterClick}>filter</button>
      </div>
    )
  }

  handleFilterClick = () => {
    console.log('---', 'todo: implement filter')
    this.props.handleFilter()
  }
}

const mapDispatchToProps = {
  handleFilter: filterByIds
}

export default connect(
  (state) => ({
    articles: state.articles,
    filters: state.filters
  }),
  mapDispatchToProps
)(Filters)
