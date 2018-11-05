import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import DomRoute from './routes/domRouter'
import {Link} from "react-router-dom"


const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const User = () => <h2>Users</h2>
function ComponentWithRegex({match}) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.derection}</h3>
    </div>
  )
}
const Topic = ({match}) => <h3>Requested Parma: {match.params.id}</h3>
const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
      <li>
        <Link to="/order/asc">Direction</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic}/>
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic</h3>}
    />
    <Route
      path="/order/:direction"
      component={ComponentWithRegex}
    />
  </div>
)

function RouterConfig({ history }) {
  return (
    <div>
      <Router history={history}>
        <div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/products" exact component={Products}/>
            <Route path="/router" exact component={DomRoute}/>
            <Route path="/index" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User}/>
            <Route path="/topics" component={Topics}/>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default RouterConfig;
