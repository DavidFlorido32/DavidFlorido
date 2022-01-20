import './intro.scss'
import {ArrowBackIos} from '@material-ui/icons';
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            strings: ['Web Developer', 'Apps Developer', 'Content Creator' ],
            backDelay: 1500,
            backSpeed: 60
        })
    }, [])
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>David Florido</h1>
                    <h3><span ref={textRef}></span>
                    </h3>
                    <a href="#portfolio">
                        <ArrowBackIos className="icon"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
