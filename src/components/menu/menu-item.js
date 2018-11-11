import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Consumer as LanguageConsumer } from '../../contexts/language'
const menuTranslations = require('../../translations/menu.json')

class MenuItem extends Component {
  static propTypes = {}

  render() {
    const { link, children } = this.props
    return (
      <div>
        <LanguageConsumer>
          {(lang) => (
            <NavLink to={link} activeStyle={{ color: 'red' }}>
              {menuTranslations[lang][children]}
            </NavLink>
          )}
        </LanguageConsumer>
      </div>
    )
  }
}

export default MenuItem
