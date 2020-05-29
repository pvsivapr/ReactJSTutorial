import React from "react"
import {Route, Link} from "react-router-dom"
import Skill from "./Skill.js"

const Skills = ({match}) => {

    console.log(match.url)

    const resourceData = [
        {
            id: 1,
            key: 1,
            name: "Siva",
            description: "Xamarin.Forms",
            status: "Unavailable"
        },
        {
            id: 2,
            key: 2,
            name: "Sivaprasad",
            description: "React JS",
            status: "Unavailable"
        },
        {
            id: 3,
            key:3,
            name: "Sivaprasad Reddy",
            description: "Kotlin",
            status: "Unavailable"
        },
        {
            id: 4,
            key: 4,
            name: "Sivaprsad Reddy Pulagam",
            description: "CSharp",
            status: "Unavailable"
        },
        {
            id: 5,
            key: 5,
            name: "PVSPReddy",
            description: "JavaScript",
            status: "Unavailable"
        }
    ];



    const resourceDataLinks = resourceData.map(skill => {
        return(
            <li>
                <Link to={`${match.url}/${skill.id}`}>{skill.name}</Link>
            </li>
        );
    })


    return (
        <div>
            <p>Skills</p>
            <ul>{resourceDataLinks}</ul>
            {/* <Route 
            path={`${match.url}/:skillId`}
            render={props=> <Skill obtainedData={resourceData}{... props} />}
            /> */}
            <Route 
            path={`${match.url}/:skillId`}
            component={props=> <Skill obtainedData={resourceData}{... props} />}
            />

            {/* //not working */}
            {/* <Route 
            path={`${match.url}/:skillId`}>
                {props => <Skill obtainedData={resourceData}{...props} />}
                </Route> */}
        </div>
    );
}

export default Skills;