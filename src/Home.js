//Starts Packages to support react application
import React from "react"
import { Route, Switch, Link } from "react-router-dom"
//Ends Packages to support react application

// //Starts Packages for local Views Starts from Here
// import CustomComponentTuts from "./Tutorials/CustomComponentTutorial.js"
// import PropTypesTuts from "./Tutorials/PropTypesTutorial.js"
// import StateAndPropsTuts from "./Tutorials/StateAndPropsTutorial.js"
// import RoutingTuts from "./Tutorials/RoutingTutorial.js"
// import ReactLifeCycleTuts from "./Tutorials/ReactLifeCycle.js"
// //Ends Packages for local Views Starts from Here

// //Extra
// import BrowserRoutingTuts from "./Tutorials/BrowserRouterTutorial.js"
import AppRouter from "./AppLevelRouter.js"

export default class Home extends React.Component {
    // constructor(){}
    render() {
        const uiComponent =
            (
                <div>
                    <a href="https://reactjs.org/docs/lists-and-keys.html#keys" target="_blank">check when you are free</a>


                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/CustomComponents">ComponentTut</Link>
                        </li>
                        <li>
                            <Link to="/Prototypes">PrototypeTut</Link>
                        </li>
                        <li>
                            <Link to="/StateAndProps">StateAndPropTut</Link>
                        </li>
                        <li>
                            <Link to="/Routing">RoutingTut</Link>
                        </li>
                        <li>
                            <Link to="/LifeCycle">LifeCycleTut</Link>
                        </li>
                        <li>
                            <Link to="/Examples">Examples</Link>
                        </li>
                        {/* <li>
                            <Link to="/BrowserRouter">BrowserRouterTuts</Link>
                        </li> */}
                    </ul>

<AppRouter />

                    {/* <Switch>
                        <Route exact path="/">
                            <RoutingTuts/>
                        </Route>
                        <Route path="/CustomComponents">
                            <CustomComponentTuts/>
                        </Route>
                        <Route path="/Prototypes">
                            <PropTypesTuts/>
                        </Route>
                        <Route path="/StateAndProps">
                            <StateAndPropsTuts/>
                        </Route>
                        <Route path="/Routing" component={RoutingTuts} />
                        <Route path="/LifeCycle" component={ReactLifeCycleTuts} />
                        <Route path="/BrowserRouter" component={BrowserRoutingTuts} />
                    </Switch> */}



                </div>
            );
        return uiComponent;
    }
}