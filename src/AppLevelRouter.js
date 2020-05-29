//Starts Packages to support react application
import React from "react"
import { Switch, Route } from "react-router-dom"
//Ends Packages to support react application

//Starts Packages for local Views Starts from Here
import CustomComponentTuts from "./Tutorials/CustomComponentTutorial.js"
import PropTypesTuts from "./Tutorials/PropTypesTutorial.js"
import StateAndPropsTuts from "./Tutorials/StateAndPropsTutorial.js"
import RoutingTuts from "./Tutorials/RoutingTutorial.js"
import ReactLifeCycleTuts from "./Tutorials/ReactLifeCycle.js"
import {ExamplesList} from "./Examples/ExamplesList.js"

import BrowserRoutingTuts from "./Tutorials/BrowserRouterTutorial.js"
import Skills from "./Examples/Skills.js"
//Ends Packages for local Views Starts from Here

export default function AppLevelRouters()
{
    var appLevelRouters =
        (
            <Switch>
                <Route exact path="/">
                    <RoutingTuts />
                </Route>
                <Route path="/CustomComponents">
                    <CustomComponentTuts />
                </Route>
                <Route path="/Prototypes">
                    <PropTypesTuts />
                </Route>
                <Route path="/StateAndProps">
                    <StateAndPropsTuts />
                </Route>
                <Route path="/Routing" component={RoutingTuts} />
                <Route path="/LifeCycle" component={ReactLifeCycleTuts} />
                <Route path="/BrowserRouter" component={BrowserRoutingTuts} />
                <Route path="/Examples" component={ExamplesList} />
                <Route path="/Skills" component={Skills} />
            </Switch>
        )
    return appLevelRouters;

};