import * as React    from "react";
import * as ReactDOM from "react-dom";

import { Panel }  from "./components/Panel";

let links = ["link 1", "link 2"];

ReactDOM.render(
    <div>
        <Panel items={links} />
    </div>,
    document.getElementById("container")
)

