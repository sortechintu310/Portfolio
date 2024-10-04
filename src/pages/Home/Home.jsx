import Navbar from "../../components/Navbar/Navbar";
import profile from '../../assets/profile.png'
export default function Home() {
    return (
        <div className="home">
            {/* <Navbar /> */}
            <div className="container">
                <Profile />
                <Intro />
            </div>
        </div>
    )
}


function Profile() {
    return (
        <div className="profile">
            <img src={profile} />
        </div>
    )
}

function Intro() {
    return (
        <div>
            <h1>Hey there,</h1>
            <h1>I’m Chintu Sorte.</h1>
            <p>"I’m a postgraduate student with a growing interest in full-stack web development."</p>
            <a href="https://drive.google.com/file/d/1VVGxOTUoAP0jzIgIOQCX9txZ1F1oyhf0/view?usp=sharing"><button>My Resume</button></a>
        </div>
    )
}