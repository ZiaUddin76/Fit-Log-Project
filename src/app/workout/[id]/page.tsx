
import SaveWorkout from '@/components/SaveWorkout';
import WorkoutActions from '@/components/WorkoutActions';
import Image from 'next/image';
import React from 'react';
import {
    LuClock3,
    LuFlame,
    LuStar,
    LuBookmark,
} from 'react-icons/lu';

const WorkoutDetails = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {

    const { id } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    const workout = await res.json();


    return (
    <main className="min-h-screen px-6 py-10 md:px-10">

        <div className="w-full p-6 md:p-8">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* LEFT — IMAGE */}
                <div className="w-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={700}
                        height={600}
                        className="h-[600px] w-full rounded-lg object-cover"
                    />
                </div>


                {/* RIGHT — DETAILS */}
                <div className="flex flex-col">

                    <h1 className="text-3xl font-extrabold uppercase text-white">
                        {workout.name}
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>


                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">

                        {workout.muscleGroups?.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                            >
                                {muscle}
                            </span>
                        ))}

                    </div>


                    {/* Workout Information */}
                    <div className="mt-5 overflow-hidden rounded-lg border border-gray-800 bg-[#15171D]">

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                EQUIPMENT
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                DIFFICULTY
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                SETS
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                REPS
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                DURATION
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                CALORIES
                            </span>
                            <span className="text-xs text-gray-300">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-3">
                            <span className="text-[10px] font-semibold text-gray-500">
                                RATING
                            </span>
                            <span className="text-xs text-gray-300">
                                ★ {workout.rating}
                            </span>
                        </div>

                    </div>


                    {/* Instructions */}
                    <div className="mt-6">

                        <h2 className="text-sm font-bold uppercase text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-3 space-y-2">

                            {workout.instructions?.map(
                                (instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-xs leading-5 text-gray-400"
                                    >
                                        <span className="text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>
                                    </li>
                                )
                            )}

                        </ol>

                    </div>


                    {/* Buttons */}
                    <div className="mt-auto flex flex-wrap justify-start gap-3 pt-8">

                        <WorkoutActions workout={workout} />

                        <SaveWorkout workout={workout} />

                    </div>

                </div>

            </div>

        </div>

    </main>

);

};

export default WorkoutDetails;