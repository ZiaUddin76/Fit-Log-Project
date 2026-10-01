import { WorkoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LuClock3, LuFlame, LuStar, LuX } from 'react-icons/lu';
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


        <div className="flex items-center justify-between gap-6 rounded-xl bg-[#15171D] p-4">

            {/* Left: Image */}
            <div className="shrink-0">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={180}
                    height={120}
                    className="h-28 w-44 rounded-lg object-cover"
                />
            </div>

            {/* Middle: Workout Info */}
            <div className="flex-1">
                <h2 className="text-xl font-bold text-white">
                    {workout.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-5 text-sm text-gray-300">

                    <div className="flex items-center gap-1.5">
                        <LuClock3 />
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LuFlame />
                        <span>{workout.caloriesBurned} cal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LuStar />
                        <span>{workout.rating}</span>
                    </div>

                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex shrink-0 items-center gap-2">

                <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-600 px-4 py-2 text-sm font-medium text-white"
                >
                    View Details
                </Link>

                {type === "today" && (

                    <button
                        onClick={handleMarkAsDone}
                        className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black"
                    >
                        Mark as Done
                    </button>

                )}


                <button
                    onClick={handleRemove}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                    <LuX />
                </button>

            </div>

        </div>


    );
};

export default MyPlanCard;