import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="flex items-center justify-center h-full min-h-screen w-screen text-center py-16">
      <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-20">
        <section>
          <h1 className="gradient-title text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter py-4">
            Find your dream job
            <span className="block mt-2 text-gray-300 text-xl sm:text-3xl">
              and get
              <img
                src="./logo.png"
                alt="Job Portal Logo"
                className="inline-block h-8 sm:h-12 lg:h-16 ml-2 align-middle mt-2"
              />
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-lg lg:text-xl max-w-xl mx-auto">
            Explore thousands of job opportunities and find the perfect candidate!
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link to="/Job">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg">
              Explore Jobs
            </Button>
          </Link>
          <Link to="/PostJob">
            <Button className="bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg">
              Post a Job
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
