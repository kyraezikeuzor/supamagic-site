import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'
import { cn } from '@/lib/utils'

type ButtonProps = {
    children?: React.ReactNode;
    path?: string;
    outline?: boolean;
    variant?: boolean;
    className?: string;
}

const Button = ({children, path, outline, variant, className}:ButtonProps) => {
    const buttonClass = cn(
        styles.button,
        outline && styles.outline,
        variant && styles.variant,
        className
    );

    return (
        <>
            {path ? 
                <Link href={path} target='_blank'>
                    <button className={buttonClass}>
                        {children}
                    </button>
                </Link>
                :
                <button className={buttonClass}>
                    {children}
                </button>
            }
        </>
    )
}

export default Button;