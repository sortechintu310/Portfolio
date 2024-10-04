import todo from '../../assets/todo.jpg'
import keeper from '../../assets/keeper.png'
import weatherapp from '../../assets/weatherapp.png'
import restapi from '../../assets/restapi.png'


export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="container">
                    <Project img={restapi} title={"REST-Api"} desc={"This project is a simple REST API built with Node.js and Express, using PostgreSQL for data storage."} link={"https://github.com/sortechintu310/REST-api/"} livelink={"https://github.com/sortechintu310/REST-api/"} />
                    <Project img={weatherapp} title={"GetWeather (Node.js)"} desc={"GetWeather is a app built using nodejs and express which shows live weather data of a particular city."} link={"https://github.com/sortechintu310/GetWeather/"} livelink={"https://getweather-tlay.onrender.com/"} />
                    <Project img={keeper} title={"Keeper App (React.js)"} desc={"Keeper is a small frontend clone of Google Keep Notes built using React."} link={"https://github.com/sortechintu310/Keeper"} livelink={"https://keeperapp-sortechintu310.netlify.app"} />
                    <Project img={todo} title={"TODO App (React.js)"} desc={"A simple and responsive Todo app built with React. It allows users to add, edit, and delete tasks."} link={"https://github.com/sortechintu310/Todo-React"} livelink={"https://github.com/sortechintu310/Todo-React"} />
            </div>
        </div>
    )
}

function Project({ img, title, desc, link,livelink }) {
    return (
        <>
        <div className="box">
            <div className='imagecontainer'>
                <img src={img} />
            </div>
            <div className="bottom-container">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={link}><button className="githublinkbtn">Github link</button></a>
                <a href={livelink}><button>Live link</button></a>
            </div>
        </div>
        </>
    )
}