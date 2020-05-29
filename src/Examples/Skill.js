import React from "react"

const Skill = ((props) => {

    let skill = props.obtainedData.find(item => item.id == props.match.params.skillId); //= props.obtainedData.

    let skillData;

    if(skill)
    {
        skillData = 
        (
            <div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <hr/>
                <h4>{skill.status}</h4>
            </div>
        )
    }
    else
    {
        skillData = 
        (
            <div></div>
        )
    }
    return (skillData);
})

export default Skill;