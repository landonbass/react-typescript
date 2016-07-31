"use strict";

import * as React from "react";

export interface InfoWidgetProps {message: string;}

export class InfoWidget extends React.Component<InfoWidgetProps, {}> {
    render () {
        return (
            <div className = "col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                    <span className="info-box-icon bg-agua">
                        <i className="fa fa-star-o"></i>
                    </span>

                    <div className="info-box-content">
                        <span className="info-box-text">Hello</span>
                        <span className="info-box-number">12</span>
                    </div>
                    
                    this is a test
                </div>
            </div>
        );
    }
}