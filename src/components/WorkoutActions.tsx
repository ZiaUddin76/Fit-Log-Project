'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { LuClipboardPlus } from 'react-icons/lu';

const WorkoutActions = ({ workout }: { workout: any }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

    const handleAddToPlan = () => {

        const alreayAdded = todayPlan.some((item) => item.id === workout.id);

        if (alreayAdded) {
            return;
        }

        if (todayPlan.length >= 5) {
            return;
        }

        console.log("Adding workout", workout);
        setTodayPlan([...todayPlan, workout]);
    };

    return (

        <button
            onClick={handleAddToPlan}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black"
        >
            <LuClipboardPlus />
            Add to Today's Plan
        </button>

    );
};

export default WorkoutActions;