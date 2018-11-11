import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './routes/articles-page'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './menu'
import { Provider as UserProvider } from '../contexts/user'
import { Provider as LangProvider } from '../contexts/language'
import LanguageForm from './languageForm'

class App extends Component {
  state = {
    user: 'roma',
    lang: 'en'
  }

  setUser = (user) => this.setState({ user })

  setLanguage = (lang) => this.setState({ lang })

  render() {
    return (
      <UserProvider value={this.state.user}>
        <div>
          <LanguageForm value={this.state.lang} onChange={this.setLanguage} />
          <LangProvider value={this.state.lang}>
            <Menu>
              <MenuItem link="/articles" children="Articles" />
              <MenuItem link="/filters">Filters</MenuItem>
              <MenuItem link="/counter">Counter</MenuItem>
              <MenuItem link="/comments">Comments</MenuItem>
            </Menu>
            <UserForm value={this.state.user} onChange={this.setUser} />

            <Switch>
              <Redirect from="/" exact to="/articles" />
              <Route path="/counter" component={Counter} exact />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => <h1>New Article Page</h1>}
              />
              <Route path="/articles" component={ArticlesPage} />
              <Route path="/error" render={() => <h1>Error Page</h1>} />
              <Route path="*" render={() => <h1>Not Found Page</h1>} />
            </Switch>
          </LangProvider>
        </div>
      </UserProvider>
    )
  }
}

export default App
