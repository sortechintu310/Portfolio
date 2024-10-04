import Home from "./pages/Home/Home";
import './App.css'
import './index.css'
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App(){
  return(
    <main>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </main>
  )
}