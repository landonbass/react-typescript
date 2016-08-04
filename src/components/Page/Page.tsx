const styles = require("./Page.css");

import * as React from "react";

export interface PageProps {}

export class Page extends React.Component<PageProps, {}> {
    render() {
        return (
            <div id={styles.pageContentWrapper}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}