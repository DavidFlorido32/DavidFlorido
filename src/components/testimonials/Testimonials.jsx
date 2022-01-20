import './testimonials.scss'
import {useContext} from 'react'
import { ThemeContext } from '../context'

export default function Testimonials() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    
    const data =[
        {
            id: 1,
            name: "Sofia",
            title: "Master Senior Dancer ",
            img: "assets/man.png",
            icon:"assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleaceat magnam dolorem"
        },
        {
            id: 2,
            name: "Gabriel",
            title: "megaSenior Basket Player",
            img: "assets/man.png",
            icon:"assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleaceat magnam dolorem",
            featured: true,
        },
        {
            id: 3,
            name: "Yotas",
            title: "Eterno Estudiante",
            img: "assets/man.png",
            icon:"assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pleaceat magnam dolorem"
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                    <div className={d.featured ? "card featured" : "card"} style={{backgroundColor: darkMode && "#333"}}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left " alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center" style={{backgroundColor: darkMode && "#222"}}>
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}
