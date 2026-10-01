'use client';

import React, { createContext, useState, ReactNode, useEffect } from 'react';


interface IWorkoutContext {

    todayPlan: any[];
    setTodayPlan: React.Dispatch<React.SetStateAction<any[]>>;

    savedWorkouts: any[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<any[]>>;
}


export const WorkoutContext = createContext<IWorkoutContext>({

    todayPlan: [],
    setTodayPlan: () => { },
    savedWorkouts: [],
    setSavedWorkouts: () => { },
});


export const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [todayPlan, setTodayPlan] = useState<any[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        try {
            const savedPlan = localStorage.getItem("todayPlan");
            const saved = localStorage.getItem("savedWorkouts");

            if (savedPlan) {
                setTodayPlan(JSON.parse(savedPlan));
            }

            if (saved) {
                setSavedWorkouts(JSON.parse(saved));
            }
        }

        catch (error) {
            console.log("Local storage error: ",error);

            setTodayPlan([]);
            setSavedWorkouts([]);
        }


        setLoaded(true);;
    }, []);


    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "todayPlan",
            JSON.stringify(todayPlan)
        );
    }, [todayPlan, loaded]);


    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "savedWorkouts",
            JSON.stringify(savedWorkouts)
        );
    }, [savedWorkouts, loaded]);



    return (
        <WorkoutContext.Provider value={{

            todayPlan,
            setTodayPlan,
            savedWorkouts,
            setSavedWorkouts,
        }}>
            {children}
        </WorkoutContext.Provider>
    );

};