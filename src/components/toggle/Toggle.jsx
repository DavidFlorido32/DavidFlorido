import React, {useContext} from 'react'
import "./toggle.scss";
// import Sun from "../../../public/assets/sun.png";
// import Moon from "../../../public/assets/moon.png";
import {ThemeContext} from "../context.js"


const Toggle = ()=> {
    
    const theme = useContext(ThemeContext)
    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t"> 
            <img className="t-icon" src="assets/sun.png" alt="" />
            <img className="t-icon" src="assets/moon.png" alt="" />
            <div className="t-button" 
                onClick={handleClick}
                style={{left: theme.state.darkMode ? 0 : 25}}
                ></div>
        </div>
    )
}

export default Toggle
