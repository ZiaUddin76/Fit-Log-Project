'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { LuBookmark } from 'react-icons/lu';
import { toast } from 'react-toastify';

const SaveWorkout = ({ workout }: { workout: any }) => {


    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);

    const handleSave = () => {
        const alreadySaved = savedWorkouts.some((item) => item.id === workout.id);

        if (alreadySaved) {
            toast.info("Workout already saved");
            return;
        }

        setSavedWorkouts([...savedWorkouts, workout]);
        toast.success("Saved for later");
    };


    return (

        <button
            onClick={handleSave}
            className="mt-8 inline-flex items-center gap-2 rounded-full
            px-6 py-3 font-semibold text-white cursor-pointer hover:bg-gray-600
            border border-gray-700"
        >
            <LuBookmark />
            Save For Later
        </button>

    );
};

export default SaveWorkout;