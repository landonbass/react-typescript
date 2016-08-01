import * as React                   from 'react'
import { NavLink }                  from '../NavLink/NavLink'
import { LeftPanel, LeftNavItem }   from "../LeftPanel/LeftPanel";

export default class extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}