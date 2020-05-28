import React from "react"
import Header from "../CustomComponents/HeaderUI.js"

import TextDislay,{SideHeadingTextTypes} from "../CustomComponents/SideHeaderWithTextDisplay.js"

import "./GeneralStyles/GeneralStyles.css"

class BrowserRoutingTutorials extends React.Component 
{
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="Browser Routing" date="27-May-2020"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Browser router - will follow user friendly urls like:" text={
                        [
                            "www.companyname.com/aboutus",
                            "www.companyname.com/product/computer",
                            "www.companyname.com/product/homeessentials"
                        ]
                    } />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Configuring Browser Routing in Application:" text={
                        [
                            
                        ]
                    } />                    
                </div>
            );
        return uiComponent;
    }
}

export default BrowserRoutingTutorials;