import { useState } from "react";
import Nav_item from "./Nav_item";


export default function Navbar() {
    // const [activeNavItem,setActiveNavItem] = useState(false);
    return (
        <nav>
            <ul>
                <Nav_item name={"Home"} />
                <Nav_item name={"About"} />
                <Nav_item name={"Skills"} />
                <Nav_item name={"Projects"} />
                <Nav_item name={"Contact Me"} />
            </ul>
        </nav>
    )
}