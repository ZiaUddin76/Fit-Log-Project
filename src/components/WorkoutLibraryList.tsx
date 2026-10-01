import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutLibraryList = ({ workouts }: { workouts: any[] }) => {
    return (
        <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2
                lg:grid-cols-3'>

            {workouts.map((workout: any) => (
                <WorkoutCard key={workout.id}
                    workout={workout} />
            ))}

        </div>

    );
};

export default WorkoutLibraryList;