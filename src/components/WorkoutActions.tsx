'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { LuClipboardPlus } from 'react-icons/lu';
import { toast } from 'react-toastify';

const WorkoutActions = ({ workout }: { workout: any }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

    const handleAddToPlan = () => {

        const alreayAdded = todayPlan.some((item) => item.id === workout.id);

        if (alreayAdded) {
            toast.info("Workout already added");
            return;
        }

        if (todayPlan.length >= 5) {
            toast.warning("You can only add 5 workouts for today");
            return;
        }

        console.log("Adding workout", workout);
        setTodayPlan([...todayPlan, workout]);
        toast.success("Added to today's plan");
    };

    return (

        <button
            onClick={handleAddToPlan}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400
            px-6 py-3 font-semibold text-black cursor-pointer hover:bg-lime-300"
        >
            <LuClipboardPlus />
            Add to Today's Plan
        </button>

    );
};

export default WorkoutActions;