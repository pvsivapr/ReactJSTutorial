import React from "react"
import {Link, Route} from "react-router-dom"

import Skills from "./Skills.js"

export function ExamplesList(){
    const uiComponents = (
        <div>
            {/* <Skills /> */}
            <Link to="/Skills">Skills Example</Link>
            {/* <Route path="/Skills" render={Skills}>
                {/* <Skills /> * /}
            </Route> */}
        </div>
    )
    return uiComponents;
}