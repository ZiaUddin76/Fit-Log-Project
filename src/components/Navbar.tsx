'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';





const Navbar = () => {


    const pathname = usePathname();

    const { planCount, savedCount } = useContext(WorkoutContext);

    const [menuOpen, setMenuOpen] = useState(false);





    return (
        <nav className='relative flex justify-between items-center px-8 py-5
        md:px-6 md:py-5 lg:px-8 border-b border-gray-900'>

            <div className='flex items-center'>
                <Image src="/logo.png" alt='Logo'
                    width={50} height={50} />
                <p className='font-bold tracking-wider'>FITLOG</p>
            </div>

            <div className='hidden md:block'>
                <ul className='flex items-center gap-6'>
                    <li>
                        <Link href="/#library"
                            className={pathname === '/' ? 'text-lime-400' : ''} >
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/my-plan"
                            className={pathname === '/my-plan' ? 'text-lime-400' : ''}>
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <Link href="/my-plan" className="flex items-center gap-2">
                    <span>Plan</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                        {planCount}
                    </span>
                </Link>

                <Link href="/my-plan" className="flex items-center gap-2">
                    <span>Saved</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-500 text-xs">
                        {savedCount}
                    </span>
                </Link>
            </div>

            {/* mobile hamburger */}


            <button onClick={() => setMenuOpen(!menuOpen)}
                className='md:hidden text-2xl'>
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 z-50 w-full border-t
                 border-gray-800 bg-[#0a0a0a] p-6 md:hidden">
                    <ul className="flex flex-col gap-5">
                        <Link href="/#library"
                            onClick={() => setMenuOpen(false)}
                            className={pathname === '/' ? 'text-lime-400' : ''} >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className={pathname === '/my-plan' ? 'text-lime-400' : ''}>
                            My Plan
                        </Link>

                        <li>
                            <Link href="/my-plan">Plan 0</Link>
                        </li>

                        <li>
                            <Link href="/my-plan">Saved 0</Link>
                        </li>
                    </ul>
                </div>
            )}


        </nav>
    );
};

export default Navbar;