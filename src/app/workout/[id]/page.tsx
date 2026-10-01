import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiPlusSquare } from 'react-icons/fi';
import { LuBookmark, LuClipboardPlus, LuSquarePlus } from 'react-icons/lu';

const WorkoutDetails = async ({ params }: { params: Promise<{ id: string }>; }) => {


    const { id } = await params;


    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

    const workout = await res.json();

    console.log(workout);



    return (
        <div>

            <div className='flex'>

                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={600}
                        height={300}
                        className="h-100 w-full object-cover"
                    />
                </div>


                <div>

                    <h1>{workout.name}</h1>

                    <p> {workout.description} </p>

                    {/* Muscle Groups */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-2 py-1 text-[10px] 
                            tracking-wide font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                    <div>

                        <p>EQUIPMENT {workout.equipment} </p>
                        <p>DIFFICULTY {workout.difficulty} </p>
                        <p>SETS {workout.sets} </p>
                        <p>REPS {workout.reps} </p>
                        <p>DURATION {workout.duration} </p>
                        <p>CALORIES {workout.calories} </p>
                        <p>RATING {workout.rating} </p>

                    </div>


                    <div>
                        <h1>INSTRUCTION</h1>

                        {workout.instructions}

                    </div>


                    <div>

                        <Link
                            href="#"
                            className='mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black'
                        >
                            <LuClipboardPlus />
                            BROWSE WORKOUTS

                        </Link>


                        <Link
                            href=""
                            className='mt-8 inline-flex items-center gap-2 rounded-full
                            bg-[#374151] px-6 py-3 font-semibold text-white'
                        >
                            <LuBookmark />
                           Save For Later

                        </Link>

                    </div>



                </div>


            </div>

        </div>
    );
};

export default WorkoutDetails;