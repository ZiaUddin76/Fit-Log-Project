import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LuClock3, LuFlame, LuStar, LuX, LuCheck } from 'react-icons/lu';
import { toast } from 'react-toastify';

const MyPlanCard = ({ workout, type }: { workout: any; type: "today" | "saved"; }) => {

    const { todayPlan, setTodayPlan, savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);

    const handleRemove = () => {

        if (type === "today") {
            const updatedPlan = todayPlan.filter((item) => item.id !== workout.id);
            setTodayPlan(updatedPlan);
            toast.success("Workout removed from today's plan");
        }

        if (type === "saved") {
            const updatedSaved = savedWorkouts.filter((item) => item.id !== workout.id);
            setSavedWorkouts(updatedSaved);
            toast.success("Workout removed from saved");
        }


    };


    const handleMarkAsDone = () => {
        const updatedPlan = todayPlan.filter((item) => item.id !== workout.id);
        setTodayPlan(updatedPlan);
        toast.success("Workout completed 🎉");
    };


    return (


        <div className="flex flex-col gap-4 rounded-xl bg-[#15171D] p-4 md:flex-row md:items-center md:justify-between md:gap-6">

            {/* Left: Image */}
            <div className="w-full shrink-0 md:w-auto">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={180}
                    height={120}
                    className="h-40 w-full rounded-lg object-cover
                    md:h-28 md:w-44"
                />
            </div>

            {/* Middle: Workout Info */}
            <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-white">
                    {workout.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-300 md:gap-5">

                    <div className="flex items-center gap-1.5">
                        <LuClock3 className='text-lime-400' />
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LuFlame className='text-lime-400' />
                        <span>{workout.caloriesBurned} cal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LuStar className='text-lime-400' />
                        <span>{workout.rating}</span>
                    </div>

                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex w-full shrink-0 flex-wrap items-center gap-2 md:w-auto md:flex-nowrap">

                <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-600 px-3 py-2 text-sm
                    font-medium text-white cursor-pointer hover:bg-gray-600 md:px-4"
                >
                    View Details
                </Link>

                {type === "today" && (

                    <button
                        onClick={handleMarkAsDone}
                        className="rounded-full bg-lime-400 px-3 py-2 text-sm 
                        font-semibold text-black cursor-pointer hover:bg-lime-300
                        flex items-center gap-1 md:px-4"
                    >
                        <LuCheck size={17} strokeWidth={4} />
                        Mark as Done
                    </button>

                )}


                <button
                    onClick={handleRemove}
                    className="flex h-9 w-9 items-center justify-center rounded-full
                    cursor-pointer text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                    <LuX />
                </button>

            </div>

        </div>


    );
};

export default MyPlanCard;