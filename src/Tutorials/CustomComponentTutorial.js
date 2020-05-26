import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay,{SideHeadingTextTypes} from "../CustomComponents/SideHeaderWithTextDisplay.js"

class CustomComponentTutorials extends React.Component {
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="CustomComponent Tutorial" date="21-May-2020"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Example title" text={
                        ["Example Text 1",
                            "Example Text 2",
                            "Example Text 3",
                            "Example Text 4",
                            "Example Text 5"]
                    } />
                </div>
            );
        return uiComponent;
    }
}

export default CustomComponentTutorials;