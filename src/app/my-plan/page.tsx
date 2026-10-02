'use client'
import MyPlanCard from '@/components/MyPlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {


    const { todayPlan, savedWorkouts } = useContext(WorkoutContext);
    console.log("Today's Plan: ", todayPlan);
    console.log("Saved Workouts:", savedWorkouts);


    const [activeTab, setActiveTab] = useState('today');


    const totalMinutes = todayPlan.reduce((total, workout) =>
        total + workout.duration, 0);

    const totalCalories = todayPlan.reduce((total, workout) =>
        total + workout.caloriesBurned, 0);




    return (

        <div className='px-8'>
            <h1 className='mt-10'>MY PLAN</h1>

            <p className='mt-1 text-gray-400'>
                Cap of five lifts for today. Finish them, then load more.
            </p>


            <div className="mt-8 grid grid-cols-3 rounded-xl bg-[#15171D] px-6 py-7">

                <div className="px-6">
                    <p className="text-sm text-gray-400">EXERCISES</p>
                    <p className="mt-2 text-3xl font-bold text-white">
                        {todayPlan.length}
                    </p>
                </div>

                <div className="border-l border-gray-700 px-6">
                    <p className="text-sm text-gray-400">MINUTES</p>
                    <p className="mt-2 text-3xl font-bold text-white">
                        {totalMinutes}
                    </p>
                </div>

                <div className="border-l border-gray-700 px-6">
                    <p className="text-sm text-gray-400">CALORIES</p>
                    <p className="mt-2 text-3xl font-bold text-white">
                        {totalCalories}
                    </p>
                </div>

            </div>


            <div className="mt-10 flex gap-8 border-b border-gray-800">

                <button
                    onClick={() => setActiveTab('today')}
                    className={`pb-3 text-sm font-semibold ${activeTab === 'today'
                        ? 'border-b-2 border-lime-400 text-white'
                        : 'text-gray-500'
                        }`}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setActiveTab('saved')}
                    className={`pb-3 text-sm font-semibold ${activeTab === 'saved'
                        ? 'border-b-2 border-lime-400 text-white'
                        : 'text-gray-500'
                        }`}
                >
                    Saved
                </button>

            </div>



            {activeTab === 'today' && (
                todayPlan.length === 0 ? (
                    <div className="mt-8 rounded-xl bg-[#15171D] px-6 py-16 text-center">
                        <h2 className="text-xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex rounded-full bg-lime-400 px-6
                            py-3 font-semibold text-black cursor-pointer hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) :
                    (
                        <div className='mt-8 space-y-4'>
                            {todayPlan.map((workout) => (
                                <MyPlanCard key={workout.id}
                                    workout={workout}
                                    type="today" />
                            ))}
                        </div>
                    )
            )}


            {activeTab === 'saved' && (
                savedWorkouts.length === 0 ? (
                    <div className="mt-8 rounded-xl bg-[#15171D] px-6 py-16 text-center">

                        <h2 className="text-xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Browse the library and save a workout for later.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex rounded-full bg-lime-400 
                            px-6 py-3 font-semibold text-black cursor-pointer hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>

                    </div>
                ) : (
                    <div className="mt-8 space-y-4">
                        {savedWorkouts.map((workout) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                type = "saved"
                            />
                        ))}
                    </div>
                )
            )}

        </div>

    );
};

export default MyPlanPage;