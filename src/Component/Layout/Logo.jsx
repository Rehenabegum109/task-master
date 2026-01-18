import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center flex-1 gap-2'>
        <Image alt='logo-task-master' src={'/assets/logo.jpg'}
        width={50}
        height={50}
        />
        <h2 className='text-xl font-bold'>Task Master</h2>
        </Link>
    );
};

export default Logo;