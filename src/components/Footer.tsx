import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-900 bg-[#0B0D10]">

            <div className="flex flex-col items-center gap-4 px-6 py-8 text-center
            md:flex-row md:justify-between md:px-8 md:py-10 md:text-left">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={28}
                        height={28}
                    />

                    <p className="font-bold tracking-wider text-white">
                        FITLOG
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;