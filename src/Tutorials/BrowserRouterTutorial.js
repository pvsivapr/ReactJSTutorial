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
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Configuring Browser Routing in Application: - Knowing the elements" />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="BrowserRouter" 
                    description=
                    {
                        [
                            "this holds and controls all the navigation."
                        ]
                    } 
                    text=
                    {
                        [
                            "Add \"Router.js\" file seperately and add all the \"Route\" tags here enclosed in a \"Switch\" tag",
                            "Now add\"BrowserRouter\" in index.js or app.js and now import \"Router.js\" file in to the immediate child page",
                            "Now add \"Link\" tags in desired pages based on the required navigation"
                        ]
                    }
                    />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Link" 
                    description=
                    {
                        [
                            "\"Link\" -> this add the url path for the page, this also includes with the UI elements like button.",
                            "\"Link\" element has the tag \"to\" here we have to give the page path as \"to=\"/pageName\"\", this will be displayed in the browser"
                        ]
                    }
                    />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Switch" 
                    description=
                    {
                        [
                            "Without using \"Switch\" the previous page will not be cleared, instead it loads the current page below the previous page",
                            "\"Switch\" element should enclose all the route tags, so that only one page will be selected and loaded"
                        ]
                    }
                    />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Route" 
                    description=
                    {
                        [
                            "\"Route\" helps to navigate to the respective page based on the link",
                            "\"Route\" element has \"path\" tag, here we have to give the path, this should be the value in \"to\" tag of \"Link\" element e.g.: path=\"/pageName\" ",
                            "\"Route\" element has \"exact\" tag, this has to be specified if two ar more pages having simillar names like \"page1\", \"page12\" if it is not exact, on \"page1\" click \"page12\" also loads as \"page12\" contains almost same start as \"page1\"",
                            "It is best if we declare all the \"Route\" elements in the same page, or else it wont work properly, But you can add \"Link\" elements in any possible child page"
                        ]
                    }
                    />
                    
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Configuring Browser Routing in Application: - General rules and procedure" 
                    description=
                    {
                        [
                            "There are many places you can start initialising the Browser Routing",
                            "Hireracy is first start with \" BrowserRouter \", then add \"Switch\" with/enclosing \"Route\", then add \"Link\". ",
                            "\n Rules are that all \"Switch\" with/enclosing \"Route\" and \"Link\" elements should be enclosed in the \"BrowserRouter\" element only.",
                            "This above rule does not mean that \"BrowserRouter\", \"Link\", \"Switch\" with/enclosing \"Route\" elements donot have to be in the same page",
                            "Assume we have pages like index.js, app.js, home.js, where index.js is the main page that holds app.js, app.js is container for home.js where all the navigation starts",
                            "So we are decided to place the \"Links\" and \"Route\" in home.js",
                            "then the \"BrowserRouter\" should be placed in either in home.js or app.js or in index.js",
                            "if we place the \"Links\" and \"Route\" in app.js then \"BrowserRouter\" should be placed in either in app.js or in index.js, we should not place \"BrowserRouter\" in home.js as home.js is not parent, it is a child to \"app.js\""
                        ]
                    } 
                    text=
                    {
                        [
                            
                        ]
                    }
                    />

                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} 
                    heading="Configuring Browser Routing in Application: - Best Possible way" 
                    description=
                    {
                        [
                            "We followed this procedure in this project, This will clears the navigation confusion"
                        ]
                    } 
                    text=
                    {
                        [
                            "Add \"Router.js\" file seperately and add all the \"Route\" tags here enclosed in a \"Switch\" tag",
                            "Now add\"BrowserRouter\" in index.js or app.js and now import \"Router.js\" file in to the immediate child page",
                            "Now add \"Link\" tags in desired pages based on the required navigation"
                        ]
                    }
                    />                
                </div>
            );
        return uiComponent;
    }
}

export default BrowserRoutingTutorials;