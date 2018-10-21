import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'

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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  filters: state.filters
})

export default connect(mapStateToProps)(Filters)
