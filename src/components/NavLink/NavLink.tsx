const styles = require("./NavLink.css");

import * as React from 'react'
import { Link }   from 'react-router'

export interface NavLinkProps {to: string; onlyActiveOnIndex?: boolean;}

export class NavLink extends React.Component<NavLinkProps, {}>{
  render() {
    return <Link {...this.props} activeClassName={styles.activeLink}/>
  }
}

