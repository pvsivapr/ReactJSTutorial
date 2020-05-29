import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay,{SideHeadingTextTypes} from "../CustomComponents/SideHeaderWithTextDisplay.js"

class CustomComponentTutorials extends React.Component {
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="Prop-Type Tutorial" date="22-May-2020"/>
                    <Header/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="" points={
                        ["See \"HeaderUI.js\" file for more info",
                            "This is an extra, non essential part",
                            "This is to declare the type to the \"props\", such as title in prop is whether a \"string\" or \"char\" or something else",
                            "For this we have to install package \"prop-types\""]
                    } />
                </div>
            );
        return uiComponent;
    }
}

export default CustomComponentTutorials;