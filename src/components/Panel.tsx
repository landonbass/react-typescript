import * as React from "react";

export interface PanelProps {items: Array<string>}

export class Panel extends React.Component<PanelProps, {}> {
    render() {
        var els : any[] = [];
        this.props.items.forEach((item) => {
            els.push(<p>{item}</p>);
        })
        return (
            <div>{els}</div>
        );
    }
}