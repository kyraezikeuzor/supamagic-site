import Logo from './Logo'
import Link from 'next/link'
import {cal30MinLink} from '@/assets/content/links'
import AnimationMeshGradient from '@/components/AnimationMeshGradient'

export default function Footer() {
    return (
        <footer className='flex flex-col gap-5 lg:gap-20 m-5 lg:mx-[10vw] my-[20vh] rounded-2xl bg-[--clr-base-accent] px-[5vw] py-[5vh]'>
            <section className='flex flex-col gap-10 lg:flex-row justify-between'>
                <Logo/>
                <div className='font-semibold lg:text-lg'>
                    <Link href={cal30MinLink}>Hire us</Link>
                </div>
            </section>
            <div>
                <span>Sprica Labs 2024</span>
            </div>
        </footer>
    )
}