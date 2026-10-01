import React from 'react';
import WorkoutCard from './WorkoutCard';


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


                <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2
                lg:grid-cols-3'>

                    {workouts.map((workout: any) => (
                        <WorkoutCard key={workout.id}
                            workout={workout} />
                    ))}

                </div>



            </div>

        </section>
    );
};

export default WorkoutLibrary;