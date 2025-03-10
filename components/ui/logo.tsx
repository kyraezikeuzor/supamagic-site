import Link from 'next/link'

type LogoProps = {
    variant?: 'full' | 'minimal';
    className?: string;
    asLink?: boolean;
}

export default function Logo({ variant = 'full', className = '', asLink = true }: LogoProps) {
    const content = (
        <div className={`flex flex-row gap-2 items-center ${className}`}>
            <img className='w-8 h-auto rounded-lg' src='/logos/logo-2.png' alt="Supamagic Logo"/>
            {variant === 'full' && (
                <span className='font-semibold text-xl md:text-2xl'>Supamagic</span>
            )}
        </div>
    );

    if (asLink) {
        return (
            <Link href='/'>
                {content}
            </Link>
        );
    }

    return content;
}