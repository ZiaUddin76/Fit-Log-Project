import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';

const WorkoutCard = ({ workout }: any) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="overflow-hidden rounded-xl bg-[#15171D]">

                {/* Image */}
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={300}
                    className="h-100 w-full object-cover"
                />

                {/* Card Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-2 py-1 text-[10px] 
                            tracking-wide font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="text-sm font-bold uppercase text-white">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-2 text-xs text-gray-500">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-800"></div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-[10px] text-gray-400
                ">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaClock className="text-lime-400" /> {workout.duration} min</span>

                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaFire className="text-lime-400" /> {workout.caloriesBurned} kcal</span>

                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaStar className="text-lime-400" /> {workout.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;