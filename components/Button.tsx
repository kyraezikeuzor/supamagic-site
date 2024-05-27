import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
    children?:any;
    path?:string;
    outline?: Boolean;
    variant?: Boolean
}

const Button = ({children, path, outline, variant}:ButtonProps) => {
    return (
        <>
            {
            path ? 
            <Link href={path} target='_blank'>
                <button className={`${outline && styles.outline} ${variant && styles.variant} ${styles.button} `}>
                    {children}
                </button>
            </Link>
            :
            <button className={`${outline && styles.outline} ${variant && styles.variant} ${styles.button} `}>
                {children}
            </button>
            }
        </>
    )
}


export default Button;