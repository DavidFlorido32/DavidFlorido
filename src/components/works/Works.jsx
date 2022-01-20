import './works.scss'
import { useEffect, useState, useContext} from 'react';
import {ArrowBackIos} from '@material-ui/icons';
import { ThemeContext } from '../context'


export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const data =[
        {
            id: "1",
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YQOGItXHXcq8vd1mEJryDgHaEK%26pid%3DApi&f=1",
            title: "Web Design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi dolore nemo labore voluptas placeat enim consectetur ex! Sint iste accusamus asperiores minus tenetur enim architecto id aliquid ad minima?",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DLPiK7U162EUzYpiymlJgwHaKt%26pid%3DApi&f=1"
        },
        {
            id: "2",
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YQOGItXHXcq8vd1mEJryDgHaEK%26pid%3DApi&f=1",
            title: "Mobile Application",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi dolore nemo labore voluptas placeat enim consectetur ex! Sint iste accusamus asperiores minus tenetur enim architecto id aliquid ad minima?",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DpKSS0SCUVm5FKQjsMnyegHaLH%26pid%3DApi&f=1"
        },
        {
            id: "3",
            icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YQOGItXHXcq8vd1mEJryDgHaEK%26pid%3DApi&f=1",
            title: "Atletic man ",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi dolore nemo labore voluptas placeat enim consectetur ex! Sint iste accusamus asperiores minus tenetur enim architecto id aliquid ad minima?",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8qYKTGAXOcVnXro130PG-QHaJ4%26pid%3DApi&f=1"
        }
    ] 

    const handleClick = (way)=>{
        way === "left" ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
            : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                    <div className="container">
                        <div className="item" style={{backgroundColor: darkMode && "#333"}}>
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBackIos className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowBackIos className="arrow right" onClick={()=>handleClick()}/>

        </div>
    )
}
