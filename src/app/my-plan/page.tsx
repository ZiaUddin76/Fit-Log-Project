'use client';

import MyPlanCard from '@/components/MyPlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    const { todayPlan, savedWorkouts } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState('today');

    const [sortBy, setSortBy] = useState('duration');


    const totalMinutes = todayPlan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = todayPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );


    const currentWorkouts = activeTab === 'today' ? todayPlan : savedWorkouts;


    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {

        if (sortBy === 'duration') {
            return a.duration - b.duration;
        }
        if (sortBy === 'calories') {
            return a.caloriesBurned - b.caloriesBurned;
        }
        if (sortBy === 'rating') {
            return b.rating - a.rating;
        }

        return 0;

    });



    return (
        <div className="px-6 py-10 md:px-10 lg:px-12">

            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-extrabold text-white">
                    MY PLAN
                </h1>

                <p className="mt-1 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* METRICS */}
            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15171D] md:grid-cols-3">

                <div className="px-6 py-7">
                    <p className="text-xs text-gray-500">
                        Exercises
                    </p>

                    <p className="mt-2 text-4xl font-extrabold text-lime-400">
                        {todayPlan.length}
                    </p>
                </div>

                <div className="border-t border-gray-800 px-6 py-7 md:border-l md:border-t-0">
                    <p className="text-xs text-gray-500">
                        Minutes
                    </p>

                    <p className="mt-2 text-4xl font-extrabold text-white">
                        {totalMinutes}
                    </p>
                </div>

                <div className="border-t border-gray-800 px-6 py-7 md:border-l md:border-t-0">
                    <p className="text-xs text-gray-500">
                        Calories
                    </p>

                    <p className="mt-2 text-4xl font-extrabold text-white">
                        {totalCalories}
                    </p>
                </div>

            </div>


            {/* TABS + SORT */}
            <div className="mt-8 flex items-center justify-between">

                {/* TABS */}
                <div className="flex rounded-xl border border-gray-800 bg-[#15171D] p-1">

                    <button
                        onClick={() => setActiveTab('today')}
                        className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${activeTab === 'today'
                            ? 'bg-[#252932] text-white'
                            : 'text-gray-500'
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${activeTab === 'saved'
                            ? 'bg-[#252932] text-white'
                            : 'text-gray-500'
                            }`}
                    >
                        Saved
                    </button>

                </div>


                {/* SORT */}
                <div className="flex items-center gap-3">

                    <span className="text-xs text-gray-500">
                        Sort By
                    </span>

                    

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none rounded-lg border border-gray-800 bg-[#15171D] px-4 py-2 pr-9 text-xs text-gray-300 outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                            ⌄
                        </span>
                    </div>

                </div>

            </div>


            {/* TODAY'S PLAN */}
            {activeTab === 'today' && (
                todayPlan.length === 0 ? (

                    <div className="mt-6 rounded-xl border border-gray-800 bg-[#15171D] px-6 py-16 text-center">

                        <h2 className="text-xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex cursor-pointer rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    <div className="mt-6 space-y-4">

                        {sortedWorkouts.map((workout) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                type="today"
                            />
                        ))}

                    </div>

                )
            )}


            {/* SAVED */}
            {activeTab === 'saved' && (
                savedWorkouts.length === 0 ? (

                    <div className="mt-6 rounded-xl border border-gray-800 bg-[#15171D] px-6 py-16 text-center">

                        <h2 className="text-xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Browse the library and save a workout for later.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex cursor-pointer rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    <div className="mt-6 space-y-4">

                        {sortedWorkouts.map((workout) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                type="saved"
                            />
                        ))}

                    </div>

                )
            )}

        </div>
    );
};

export default MyPlanPage;