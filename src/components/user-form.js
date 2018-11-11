import React, { Component } from 'react'
import { Consumer as LanguageConsumer } from '../contexts/language'
const userformTranslations = require('../translations/user-form.json')

class UserForm extends Component {
  render() {
    return (
      <LanguageConsumer>
        {(lang) => (
          <div>
            {userformTranslations[lang].username}:{' '}
            <input value={this.props.value} onChange={this.handleUserChange} />
          </div>
        )}
      </LanguageConsumer>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
