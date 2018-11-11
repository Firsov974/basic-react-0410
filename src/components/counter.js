import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'
import { Consumer as LanguageConsumer } from '../contexts/language'
const counterTranslations = require('../translations/counter.json')

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
    handleIncrement: PropTypes.func
  }

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.handleClick}>
          <LanguageConsumer>
            {(lang) => counterTranslations[lang].increment}
          </LanguageConsumer>
        </button>
      </div>
    )
  }

  handleClick = () => {
    //        this.props.dispatch(increment())
    this.props.handleIncrement()
  }
}

const mapStateToProps = (storeState) => ({
  count: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
