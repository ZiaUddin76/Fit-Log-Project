import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">

            <p className="text-sm font-bold tracking-widest text-lime-400">
                404 ERROR
            </p>

            <h1 className="mt-3 text-6xl font-extrabold text-white">
                PAGE NOT FOUND
            </h1>

            <p className="mt-4 max-w-md text-gray-400">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-8 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
                GO TO WORKOUTS
            </Link>

        </div>
    );
};

export default NotFound;