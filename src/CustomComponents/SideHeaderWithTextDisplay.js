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

    LoadParagraphs() {
        var parasHtml = [];
        if (this.props.description !== null && this.props.description !== undefined) {
            this.props.description.forEach(textItem => {
                parasHtml.push(<p style={this.genTextStyle} key={textItem.toString()}>{textItem}</p>);//Without unique "key" throws an error in console
            })
            if (parasHtml !== null && parasHtml !== undefined) {
                return <div>{parasHtml}</div>;
            }
            else
            {
                return undefined;
            }
        }
    }

    LoadBulletPoints() {
        var pointsHtml = [];
        //console.log(this.props.points);
        if (this.props.points !== null && this.props.points !== undefined) {
            this.props.points.forEach(point => {
                pointsHtml.push(<li key={point.toString()}>{point}</li>);//Without unique "key" throws an error in console
            })
            //console.log(pointsHtml);
            if (pointsHtml !== null && pointsHtml !== undefined) {
                //return pointsHtml;
                return <ul style={this.genTextStyle}>{pointsHtml}</ul>;
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

        var dynamicParas;
        var processedParas = this.LoadParagraphs();
        if (processedParas !== null && processedParas !== undefined) {
            dynamicParas = processedParas;//<ul style={this.genTextStyle}>{processedTexts}</ul>;
        }
        else
        {
            dynamicParas = <div></div>
        }

        var dynamicBulletPoints;
        var processedBulletPoints = undefined;
        if(this.props.type === SideHeadingTextTypes.BulletPointsWithHeading)
        {
            processedBulletPoints = this.LoadBulletPoints();
        }
        else if(this.props.type === SideHeadingTextTypes.Paragraph)
        {

        }
        else
        {

        }

        if (processedBulletPoints !== null && processedBulletPoints !== undefined) {
            dynamicBulletPoints = processedBulletPoints;//<ul style={this.genTextStyle}>{processedTexts}</ul>;
        }
        else
        {
            dynamicBulletPoints = <div></div>
        }

        var  uiComponent = 
        (
            <div>
                <p style={{ color: "black", textAlign: "left", fontSize: 28 }}>{this.props.heading}</p>
                {/* <p style={this.genTextStyle}>{this.props.description}</p> */}
                {dynamicParas}
                {dynamicBulletPoints}
            </div>
        );

        return uiComponent;
    }
}

export default SideHeadingWithText;