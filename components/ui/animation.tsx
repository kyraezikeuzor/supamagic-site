'use client'
import React, {useEffect, useRef, useState } from 'react'
import styles from './animation.module.css'
import { 
    generateKeyframes, 
    gradientBgStyle, 
    gradientsContainerStyle, 
    g1Style, g2Style, g3Style, g4Style, g5Style, 
    interactiveStyle, 
    textContainerStyle } 
from './animation.styles'
type CSSProperties = React.CSSProperties;

export default function AnimationMorphGradient({children}:{children:React.ReactNode}) {
    const screenRef = useRef<HTMLDivElement>(null);
    const [screenHeight, setScreenHeight] = useState(0);


    useEffect(()=>{
        if(screenRef.current){
            setScreenHeight(screenRef.current?.offsetHeight);
            console.log(screenHeight);
        }

        const styleSheet = document.createElement("style");
        styleSheet.innerText = generateKeyframes();
        document.head.appendChild(styleSheet);
        
        return () => {
          document.head.removeChild(styleSheet);
        };
      
    })
    
    return (
    <div className='relative w-screen h-[200vh]'>
        <div style={gradientBgStyle('200vh') as CSSProperties}>
            <div style={gradientsContainerStyle('200vh') as CSSProperties}>
                <div style={g1Style('50%') as CSSProperties}></div>
                <div style={g2Style('50%') as CSSProperties}></div>
                <div style={g3Style('50%') as CSSProperties}></div>
                <div style={g4Style('50%') as CSSProperties}></div>
                <div style={g5Style('50%') as CSSProperties}></div>
                <div style={interactiveStyle('50%') as CSSProperties}></div>
            </div>
            <div style={textContainerStyle('200vh') as CSSProperties}>
                {children}
            </div>
        </div>
    </div>
    )
}