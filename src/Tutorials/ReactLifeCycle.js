import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay, { SideHeadingTextTypes } from "../CustomComponents/SideHeaderWithTextDisplay.js"

class ReactLifeCycleTutorials extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            clickCount: 0,
            // color: "#00FF00",
            // numberType: "zero"
        }
    }

    componentWillMount()
    {
        console.log("Component Will Mount");
    }
    componentDidMount()
    {
        console.log("Component Did Mount");
    }
    componentWillUpdate()
    {
        console.log("Component Will Updated");
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("Component Did Updated");
        if(prevState !== this.state)
        {

        }
        else
        {
            console.log("The state is still the same")
        }
    }
    componentWillUnmount()
    {
        console.log("Component Will Unmount");
    }
    
    
    render() {
        const uiComponent =
            (
                <div>
                    <Header title="React LifeCycle" date="28-May-2020" />
                    <TextDislay type={SideHeadingTextTypes.BulletPointsWithHeading} heading="Most important and useable methods" text={
                        [
                            "componentDidMount(){} -> ",
                            "componentDidUpdate(prevProps, prevState){} -> ",
                            "componentWillUnmount(){} -> "
                        ]
                    } />
                </div>
            );
        return uiComponent;
    }
}

export default ReactLifeCycleTutorials;