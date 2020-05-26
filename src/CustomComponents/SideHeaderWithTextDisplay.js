import React from "react"

// export enum TextType {
//         paragraph,
//         paragraphWithHeading,
//         bulletPointsWithHeading,
//     }

export const SideHeadingTextTypes = {
    Paragraph: "paragraph",
    ParagraphWithHeading: "paragraphWithHeading",
    BulletPointsWithHeading: "bulletPointsWithHeading"
}

class SideHeadingWithText extends React.Component {

    // TextTypes = {
    //     Paragraph: "paragraph",
    //     ParagraphWithHeading: "paragraphWithHeading",
    //     BulletPointsWithHeading: "bulletPointsWithHeading"
    // }

    // headingStyle = {
    //     color: "Black",
    //     textAlign: "left",
    //     fontSize: 28
    //   }
    genTextStyle = {
        color: "Black",
        textAlign: "left",
        fontSize: 20
    }

    // constructor(props){
    //     super(props);

    // }

    //this cannot be used in render return as it is ui method, do not accept dynamic running of function in it
    // onTextLoading = ((_className)=>{
    //     console.log(_className);
    //     var textElement = document.getElementById(_className);
    //     console.log(this.props.text);
    //     if(this.props.text != null && this.props.text != undefined)
    //     {
    //         var innerHTMLForText = "";
    //         this.props.text.forEach(element => {
    //             innerHTMLForText += `<li>${element}</li>`;
    //         })
    //         console.log(innerHTMLForText);
    //         if(innerHTMLForText !== "")
    //         {
    //             textElement.innerHTML = innerHTMLForText;
    //         }
    //     }
    // });

    LoadBulletPoints() {
        var textHtml = [];
        //console.log(this.props.text);
        if (this.props.text !== null && this.props.text !== undefined) {
            this.props.text.forEach(textItem => {
                textHtml.push(<li key={textItem.toString()}>{textItem}</li>);//Without unique "key" throws an error in console
            })
            //console.log(textHtml);
            if (textHtml !== null && textHtml !== undefined) {
                //return textHtml;
                return <ul style={this.genTextStyle}>{textHtml}</ul>;
            }
            else
            {
                return undefined;
            }
        }
        //Another way to loop
        /*
        const listItems = numbers.map((number) =>
        <li key={number.toString()}>
        {number}
        </li>
        );
        */
    }

    render()
     {
        //This also works
        // var dynamicTexts;
        //     var textHtml = [];
        //     if (this.props.text !== null && this.props.text !== undefined) {
        //         this.props.text.forEach(element => {
        //             textHtml.push(<li>{element}</li>);
        //         })
        //         console.log(textHtml);
        //         if (textHtml !== null && textHtml !== undefined) {
        //             dynamicTexts = <ul>{textHtml}</ul>;
        //         }
        //         else
        //         {
        //             dynamicTexts = <ul></ul>
        //         }
        //     }

        var dynamicTexts;
        var processedTexts = undefined;
        if(this.props.type === SideHeadingTextTypes.BulletPointsWithHeading)
        {
            processedTexts = this.LoadBulletPoints();
        }
        else if(this.props.type === SideHeadingTextTypes.Paragraph)
        {

        }
        else
        {

        }

        if (processedTexts !== null && processedTexts !== undefined) {
            dynamicTexts = processedTexts;//<ul style={this.genTextStyle}>{processedTexts}</ul>;
        }
        else
        {
            dynamicTexts = <div></div>
        }

        var  uiComponent = 
        (
            <div>
                <p style={{ color: "black", textAlign: "left", fontSize: 28 }}>{this.props.heading}</p>
                {dynamicTexts}
            </div>
        );

        return uiComponent;
    }
}

export default SideHeadingWithText;