"use strict";

const styles = require("./LeftPanel.css");

import * as React from "react";

export interface LeftNavItem {text: string; href: string;}
export interface LeftPanelProps {items: Array<LeftNavItem>}

export class LeftPanel extends React.Component<LeftPanelProps, {}> {
    render() {
        var leftNavItems : any[] = [];
        this.props.items.forEach((item, i) => {
            leftNavItems.push(<li key={i}><a href={item.href}>{item.text}</a></li>);
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