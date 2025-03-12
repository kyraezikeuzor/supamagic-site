'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import Button from './button'
import { Navigate } from './navigate'
import Modal from './modal'
import styles from './toolbar.module.css'
import { Calendar, Menu, Phone } from 'lucide-react'
import { cal30MinLink } from "@/assets/content/links"

export default function Toolbar() {
    return (
      <nav className={`${styles.navbar} ${styles.sticky}`}>
        <div className={styles['navbar-content']}>
            <div className='flex flex-row items-center gap-4'>
                <Logo variant="minimal" asLink={false} />
                <div className='flex flex-row gap-3 text-base font-medium'>
                    <Navigate targetId="process" navigateId="processNav" parentPage="/">
                        How it Works
                    </Navigate>
                    <Navigate targetId="pricing" navigateId="pricingNav" parentPage="/">
                        Pricing
                    </Navigate>
                    <Navigate targetId="faq" navigateId="faqNav" parentPage="/">
                        FAQ
                    </Navigate>
                </div>
                
                <Button path={cal30MinLink}>
                    <span className='hidden lg:block'>Book a call</span> <Phone className='text-inherit'/>
                </Button>
            </div>
        </div>
      </nav>
    )
}