import Hero from "@/components/hero/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import React, { Suspense } from "react";



const HomePage = () => {
  return (
    <main>

      <Hero />

      <Suspense fallback={
        <div className="flex min-h[300px] items-center justify-center">

          <p className="text-gray-400">
            Loading Workouts
          </p>

        </div>
      }>

        <WorkoutLibrary />

      </Suspense>

    </main>
  )
}



export default HomePage;