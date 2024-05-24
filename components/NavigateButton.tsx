'use client'
import React, {useState, useEffect} from 'react'
import Button from './Button'
import Icon from './Icon'


type NavigateButtonProps = {
  targetElementId: string;
  navigateButtonId: string;
  children:React.ReactNode;
}

export default function NavigateButton({targetElementId, navigateButtonId, children}:NavigateButtonProps) {
    useEffect(() => {
        const navigateButton = document.getElementById(navigateButtonId);
        const targetSection = document.getElementById(targetElementId);
    
        if (navigateButton && targetSection) {
          navigateButton.addEventListener('click', () => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          });
        }
    
        return () => {
          if (navigateButton && targetSection) {
            navigateButton.removeEventListener('click', () => {
              targetSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        };
      }, []);


    return (
        <div id={navigateButtonId}>
            {children}
        </div>
    )
}