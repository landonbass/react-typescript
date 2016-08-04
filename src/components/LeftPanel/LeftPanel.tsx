const styles = require("./LeftPanel.css");

import * as React from "react";
import { NavLink } from '../NavLink/NavLink'

export interface LeftNavItem {text: string; href: string; onlyActiveOnIndex?:boolean}
export interface LeftPanelProps {items: Array<LeftNavItem>}

export class LeftPanel extends React.Component<LeftPanelProps, {}> {
    render() {
        var leftNavItems : any[] = [];
        this.props.items.forEach((item, i) => {
            leftNavItems.push(<li key={i}><NavLink to={item.href} onlyActiveOnIndex={item.onlyActiveOnIndex || false}>{item.text}</NavLink></li>);
        })
        return (
             <div id={styles.sidebarWrapper}>
                <ul className={styles.sidebarNav}>
                    { leftNavItems }
                </ul>
            </div>
        );
    }
}