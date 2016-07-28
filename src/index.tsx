const styles = require("./app.css"); //required to inject primary stylesheet

import * as React    from "react";
import * as ReactDOM from "react-dom";

import { LeftPanel, LeftNavItem }   from "./components/LeftPanel/LeftPanel";
import { Page }                     from "./components/Page/Page";
import { InfoWidget }               from "./components/Widgets/InfoWidget/InfoWidget";

let links : Array<LeftNavItem> = [{text:"home", href: "#"}, {text:"settings", href: "#"}, {text:"my queries", href: "#"}, {text:"export", href: "#"}];

ReactDOM.render(
    <div id="wrapper">
        <LeftPanel items={links} />
        <Page />
    </div>,
    document.getElementById("container")
)

