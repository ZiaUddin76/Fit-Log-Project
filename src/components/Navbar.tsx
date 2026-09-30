import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between
        items-center'>

            <div>
                <Image src="/logo.png" alt='Logo'
                    width={100} height={80} />
            </div>

            <div>
                <ul>
                    <li>
                        <Link href="" >
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link href="" >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <button></button>
            </div>


        </nav>
    );
};

export default Navbar;