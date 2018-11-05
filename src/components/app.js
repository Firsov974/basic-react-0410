import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './routes/articles-page'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsPage from './routes/comments-page'
import { Provider as UserProvider } from '../contexts/user'

class App extends Component {
  state = {
    user: 'roma'
  }

  setUser = (user) => this.setState({ user })

  render() {
    return (
      <UserProvider value={this.state.user}>
        <div>
          <nav>
            <div>
              <NavLink to="/articles" activeStyle={{ color: 'red' }}>
                articles
              </NavLink>
            </div>
            <div>
              <NavLink to="/filters" activeStyle={{ color: 'red' }}>
                filters
              </NavLink>
            </div>
            <div>
              <NavLink to="/counter" activeStyle={{ color: 'red' }}>
                counter
              </NavLink>
            </div>
            <div>
              <NavLink to="/comments/1" activeStyle={{ color: 'red' }}>
                comments
              </NavLink>
            </div>
          </nav>
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
        </div>
      </UserProvider>
    )
  }
}

export default App
