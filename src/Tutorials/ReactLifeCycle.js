import React from "react"
import Header from "../CustomComponents/HeaderUI.js"
import TextDislay, { SideHeadingTextTypes } from "../CustomComponents/SideHeaderWithTextDisplay.js"

class ReactLifeCycleTutorials extends React.Component 
{
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
            console.log(`The state is updated now and value of clickCount is ${this.state.clickCount}`)
            if(prevState.clickCount !== this.state.clickCount)
            {
                if(this.state.clickCount === 0)
                {
                    this.setState({numberType: "Zero Number"});
                }
                else if(this.state.clickCount % 2 === 0)
                {
                    this.setState({numberType: "Even Number"});
                }
                else
                {
                    this.setState({numberType: "Odd Number"});
                }
            }
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
    
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            clickCount: 0,
            // color: "#00FF00",
            numberType: "Zero Number"
        }
    }

    onIncrementClicked = (()=>{
        this.setState({clickCount: this.state.clickCount+1});
        console.log(`current clickcount is not yet updated it is still ${this.state.clickCount}`)
    })
    onDecrementClicked()
    {
        this.setState({clickCount: this.state.clickCount-1});
        console.log(`current clickcount is not yet updated it is still ${this.state.clickCount}`)
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
                    <p>{this.state.clickCount}</p>
                    <p>This is an {this.state.numberType}</p>
                    <button onClick = {this.onIncrementClicked} >Increment</button>
                    <button onClick = {() => this.onDecrementClicked()} >Decrement</button>
                </div>
            );
        return uiComponent;
    }
}

export default ReactLifeCycleTutorials;