import * as React                   from 'react'
import { NavLink }                  from '../NavLink/NavLink'
import { LeftPanel, LeftNavItem }   from "../LeftPanel/LeftPanel";

let links : Array<LeftNavItem> = [{text:"home", href: "/", onlyActiveOnIndex:true}, {text:"settings", href: "/settings"}];

export default class extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <LeftPanel items={links}/>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}