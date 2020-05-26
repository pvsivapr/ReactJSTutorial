import React from "react"
import PropTypes from "prop-types"

// const headLine = props => {
// }

const HeadLine = ((props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p style={{textAlign:"right"}}>{props.date}</p>
        </div>
    );
});

export default HeadLine;

//This is an extra no required part
//this is to declare the type to the props
//for this we have to install package 'prop-types'
HeadLine.props = {
    title: PropTypes.string.isRequired
}
HeadLine.defaultProps = {
    title: "Need to add attribute 'title'='some title'"
}