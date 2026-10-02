'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';





const Navbar = () => {


    const pathname = usePathname();

    const { todayPlan, savedWorkouts } = useContext(WorkoutContext);

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
                        <Link
                            href="/#library"
                            className={`rounded-full px-4 py-2 transition ${pathname === '/'
                                ? 'bg-lime-400/10 text-lime-400 font-bold'
                                : 'text-white'
                                }`}
                        >
                            Workouts
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my-plan"
                            className={`rounded-full px-4 py-2 transition ${pathname === '/my-plan'
                                ?'bg-lime-400/10 text-lime-400 font-bold'
                                : 'text-white'
                                }`}
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <Link href="/my-plan" className="flex items-center gap-2">
                    <span>Plan</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                        {todayPlan.length}
                    </span>
                </Link>

                <Link href="/my-plan" className="flex items-center gap-2">
                    <span>Saved</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-500 text-xs">
                        {savedWorkouts.length}
                    </span>
                </Link>
            </div>

            {/* mobile hamburger */}


            <button onClick={() => setMenuOpen(!menuOpen)}
                className='md:hidden text-2xl cursor-pointer'>
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 z-50 w-full border-t
                 border-gray-800 bg-[#0a0a0a] p-6 md:hidden">
                    <ul className="flex flex-col gap-5">
                        <li>
                            <Link
                                href="/#library"
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-full px-4 py-2 transition ${pathname === '/'
                                    ? 'bg-lime-400/10 text-lime-400 font-bold'
                                    : 'text-white'
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-full px-4 py-2 transition ${pathname === '/my-plan'
                                    ? 'bg-lime-400/10 text-lime-400 font-bold'
                                    : 'text-white'
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-plan">Plan {todayPlan.length} </Link>
                        </li>

                        <li>
                            <Link href="/my-plan">Saved {savedWorkouts.length} </Link>
                        </li>
                    </ul>
                </div>
            )}


        </nav>
    );
};

export default Navbar;