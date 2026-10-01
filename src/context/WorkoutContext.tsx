'use client';

import React, { createContext, useState, ReactNode } from 'react';


interface IWorkoutContext {
    planCount: number;
    setPlanCount: React.Dispatch<React.SetStateAction<number>>;

    savedCount: number;
    setSavedCount: React.Dispatch<React.SetStateAction<number>>;

    todayPlan: any[];
    setTodayPlan: React.Dispatch<React.SetStateAction<any[]>>;

    savedWorkouts: any[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<any[]>>;
}


export const WorkoutContext = createContext<IWorkoutContext>({
    planCount: 0,
    setPlanCount: () => { },
    savedCount: 0,
    setSavedCount: () => { },
    todayPlan: [],
    setTodayPlan: () => { },
    savedWorkouts: [],
    setSavedWorkouts: () => { },
});


export const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);
    const [todayPlan,setTodayPlan] = useState<any[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<any[]>([]);



    return (
        <WorkoutContext.Provider value={{
            planCount,
            setPlanCount,
            savedCount,
            setSavedCount,
            todayPlan,
            setTodayPlan,
            savedWorkouts,
            setSavedWorkouts,
        }}>
            {children}
        </WorkoutContext.Provider>
    );

};