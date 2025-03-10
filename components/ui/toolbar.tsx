'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import Button from './button'
import { Navigate } from './navigate'
import Modal from './modal'
import styles from './toolbar.module.css'
import { Calendar, Menu } from 'lucide-react'
import { cal30MinLink } from "@/assets/content/links"

export default function Toolbar() {
    return (
      <nav className={`${styles.navbar} ${styles.sticky}`}>
        <div className={styles['navbar-content']}>
            <div className='flex flex-row items-center gap-4'>
                <Logo />
                <div className='hidden md:flex flex-row gap-4 text-base font-medium'>
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
                <div className='md:hidden'>
                    <Modal
                        modalClassName="absolute bottom-24 right-4 w-48"
                        toggleElement={<Menu size={20} />}
                    >
                        <div className="flex flex-col gap-4">
                            <Navigate targetId="process" navigateId="processNavMobile" parentPage="/">
                                How it Works
                            </Navigate>
                            <Navigate targetId="pricing" navigateId="pricingNavMobile" parentPage="/">
                                Pricing
                            </Navigate>
                            <Navigate targetId="faq" navigateId="faqNavMobile" parentPage="/">
                                FAQ
                            </Navigate>
                        </div>
                    </Modal>
                </div>
                <Button path={cal30MinLink}>
                    Book a call <Calendar className='text-inherit'/>
                </Button>
            </div>
        </div>
      </nav>
    )
}