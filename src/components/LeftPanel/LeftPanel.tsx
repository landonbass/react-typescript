const styles = require("./LeftPanel.css");

import * as React from "react";

export interface LeftPanelProps {items: Array<string>}

export class LeftPanel extends React.Component<LeftPanelProps, {}> {
    render() {
        var els : any[] = [];
        this.props.items.forEach((item, i) => {
            els.push(<li key={i}><a href="#">{item}</a></li>);
        })
        return (
             <div id={styles.sidebarWrapper}>
                <ul className={styles.sidebarNav}>
                    { els }
                </ul>
            </div>
        );
    }
}