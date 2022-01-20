import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import {useContext, useState} from "react"
import Menu from "./components/menu/Menu"
import Toggle from "./components/toggle/Toggle" 
import { ThemeContext } from "./components/context"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="app" 
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "whitesmoke",
        }}>
      <Toggle/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
