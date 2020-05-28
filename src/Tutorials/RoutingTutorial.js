import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay,{SideHeadingTextTypes} from "../CustomComponents/SideHeaderWithTextDisplay.js"

class RoutingTutorials extends React.Component 
{
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="Routing" date="27-May-2020"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Introduction" text={
                        ["Normal web apps we call different/another page by using <a href=\"./Contacts.html\">ButtonName</a>(this is a traditional HTML way of page navigation)",
                            "But for like react single page applications we use a process called routing",
                            "For this we have to install:",
                            "React-Router -> Common core components, web and the react native",
                            "React-Router-DOM -> version: 5.2.0 -> is designed for web browsers",
                            "React-Router-Native -> this is for react native part(mobile development)"
                        ]
                    } />
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Building blocks of react router" text={
                        ["Browser Router",
                            "Link, Switch",
                            "Link, Navlink"
                        ]
                    } />

                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Browser Router"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Browser router - will follow user friendly urls like:" text={
                        [
                            "www.companyname.com/aboutus",
                            "www.companyname.com/product/computer",
                            "www.companyname.com/product/homeessentials"
                        ]
                    } />
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Hash router"/>
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Hash router - will follow urls like:" text={
                        [
                            "www.companyname.com/#/aboutus",
                            "www.companyname.com/#/product/computer",
                            "www.companyname.com/#/product/homeessentials"
                        ]
                    } />
                    <p>Between Browser Router and Hash Router we have to use one of them based on the server we are using</p>
                    <p>For hash Router we have to use Some or more extra configrations has to be installed to the server</p>
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Key words" text={
                        [
                            "Map",
                            "find",
                            "Exact",
                            "key"
                        ]
                    }/>

                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Nested Routing" />

                    
                </div>
            );
        return uiComponent;
    }
}

export default RoutingTutorials;