export default function Skills(){
    return(
        <div className="skills">
            <h1>What i know??</h1>
            <div className="container">
              <Skill skillname={"C Programming"}/>
              <Skill skillname={"C++ Programming"}/>
              <Skill skillname={"SQL"}/>
              <Skill skillname={"JavaScript"}/>
              <Skill skillname={"HTML"}/>
              <Skill skillname={"CSS"}/>
              <Skill skillname={"Node.js"}/>
              <Skill skillname={"Express"}/>
              <Skill skillname={"PostgreSQL"}/>
              <Skill skillname={"React.js"}/>
              <Skill skillname={"Python"}/>
            </div>
        </div>
    )
}

function Skill({skillname}){
    return(
    <div className="skill">
        <h4>{skillname}</h4>
    </div>
    )
}