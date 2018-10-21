import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterByDates } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  //  state = {
  //    from: null,
  //    to: null
  //  }
  static propTypes = {
    handleFilter: PropTypes.func
  }

  //  handleDayClick = (day) =>
  //    this.setState(DateUtils.addDayToRange(day, this.state))

  handleDayClick = (day) => {
    console.log('---', ' handleDayClick ')
    this.props.handleFilter(DateUtils.addDayToRange(day, this.props.filter))
  }

  render() {
    const { from, to } = this.props.filter
    //    const { from, to } = this.state
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  from: state.filters.dates.from,
  to: state.filters.dates.to
})

const mapDispatchToProps = {
  handleFilter: filterByDates
}

export default connect(
  mapStateToProps,
  //  null,
  mapDispatchToProps
)(DateRange)
