import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex flex-row gap-2 items-center'>
            <img className='w-6 h-auto' src='/logos/spricalabs-logo-1.png'/>
            <span className='font-semibold text-xl md:text-2xl'>Sprica Labs</span>
        </Link>
    )
}