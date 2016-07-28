const styles = require("./app.css"); //required to inject primary stylesheet

import * as React    from "react";
import * as ReactDOM from "react-dom";

import { LeftPanel, LeftNavItem }  from "./components/LeftPanel/LeftPanel";

let links : Array<LeftNavItem> = [{text:"home", href: "#"}, {text:"settings", href: "#"}, {text:"my queries", href: "#"}, {text:"export", href: "#"}];

ReactDOM.render(
    <div>
        <LeftPanel items={links} />
    </div>,
    document.getElementById("container")
)

