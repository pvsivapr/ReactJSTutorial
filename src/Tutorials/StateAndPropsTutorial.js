import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay,{SideHeadingTextTypes} from "../CustomComponents/SideHeaderWithTextDisplay.js"

class StateAndPropsTutorials extends React.Component {
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="State and Props" date="22,26-May-2020"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="props : " text={
                        ["For better understanding check \"SideHeaderWithTextDisplay.js\" or \"HeaderUI.js\" file and how we used them",
                            "In those files we didnot declared any variables associated with props object",
                            "We are directly using the \"tag name\" and calling the value as \"props.respectiveTagName\"",
                            "We are able to get the respective value"]
                    } />
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading=" 'state' vs 'props' " text={
                        ["React \"props\" are read only --> you can receive the \"props\" and show it in the \"component\"",
                            "\"props\" always flows from top to bottom",
                            "\"state\" represents the data at a particular point of time",
                            "\"state\" makes the \"component\" interactive",
                            "The \"component\" do not know whether the data which is receiving is from state or \"props\"",
                            "When the \"state\" or \"props\" changes the \"component\""]
                    } />
                </div>
            );
        return uiComponent;
    }
}

export default StateAndPropsTutorials;