'use client';

import React, { createContext, useState, ReactNode } from 'react';


interface IWorkoutContext {
    planCount: number;
    setPlanCount: React.Dispatch<React.SetStateAction<number>>;
    savedCount: number;
    setSavedCount: React.Dispatch<React.SetStateAction<number>>;
}


export const WorkoutContext = createContext<IWorkoutContext>({
    planCount: 0,
    setPlanCount: () => { },
    savedCount: 0,
    setSavedCount: () => { },
});


export const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);


    return (
        <WorkoutContext.Provider value={{
            planCount,
            setPlanCount,
            savedCount,
            setSavedCount,
        }}>
            {children}
        </WorkoutContext.Provider>
    );

};