'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Icon from './Icon'
import Modal from './Modal'
import styles from './Toolbar.module.css'


export default function Navbar() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
        if (window.scrollY > heroHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles['navbar-content']}>
            <Logo/>
            
            <div className='flex flex-row gap-2'>
                <Button>Book me <Icon fillColor='inherit' size='sm' icon='Calendar'/></Button>
            </div>
        </div>
      </nav>
    )
}