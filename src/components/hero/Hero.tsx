import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';



const Hero = () => {
    return (
        <section className='mx-auto w-full px-4 py-16
        md:px-6 md:py-20 lg:px-8'>

            <div className="rounded-3xl bg-[#15171D] px-8 py-14
            md:px-10 lg:px-12 ">


                <div className='grid items-center gap-4 md:grid-cols-2'>

                    <div>
                        <p className='mb-4 text-sm font-medium tracking-widest text-lime-400'>
                            WORKOUT LIBRARY
                        </p>

                        <h1 className='text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
                            TRAIN WITH INTENT.LOG EVERY SET.
                        </h1>

                        <p className='mt-6 max-w-xl text-gray-400'>
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it <br /> into today's plan,
                            and watch the week's work add up.
                        </p>

                        <Link
                            href="#library"
                            className='mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black'
                        >
                            BROWSE WORKOUTS
                            <FaArrowDown />
                        </Link>
                    </div>

                    <div className='flex justify-end'>

                        <Image src="/banner.png" alt='Workout'
                            width={600}
                            height={600}
                        />

                    </div>

                </div>

            </div>




        </section>
    );
};

export default Hero;