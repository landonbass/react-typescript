import * as React                   from 'react'
import { NavLink }                  from '../NavLink/NavLink'
import { LeftPanel, LeftNavItem }   from "../LeftPanel/LeftPanel";

export default class extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <h1>Sample App</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}