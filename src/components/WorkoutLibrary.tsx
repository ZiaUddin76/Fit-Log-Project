import React from 'react';
import WorkoutLibraryList from './WorkoutLibraryList';


const WorkoutLibrary = async () => {


    const getWorkouts = async () => {
        const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

        const data = await res.json();

        return data;
    }

    const workouts = await getWorkouts();

    console.log(workouts);



    return (
        <section id='library'
            className='px-4 md:px-6 lg:px-8' >

            <div>
                <h1 className='text-3xl font-bold'>
                    THE LIBRARY
                </h1>

                <p className='text-gray-400'>
                    Twelve lifts covering every major muscle group.
                </p>

                <WorkoutLibraryList workouts={workouts} />
            

            </div>

        </section>
    );
};

export default WorkoutLibrary;