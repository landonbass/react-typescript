const styles = require("./app.css");

import * as React    from "react";
import * as ReactDOM from "react-dom";

import { LeftPanel }  from "./components/LeftPanel/LeftPanel";

let links = ["link 1", "link 2"];

ReactDOM.render(
    <div>
        <LeftPanel items={links} />
    </div>,
    document.getElementById("container")
)

