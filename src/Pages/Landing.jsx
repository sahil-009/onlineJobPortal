import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { Link } from 'react-router-dom';
// import Autoplay from 'embla-carousel-react'
const companies = [
  { name: 'Amazon', id: 1, path: '/companies/amazon.svg' },
  { name: 'Atlassian', id: 2, path: '/companies/atlassian.svg' },
  { name: 'Google', id: 3, path: '/companies/google.webp' },
  { name: 'IBM', id: 4, path: '/companies/ibm.svg' },
  { name: 'Meta', id: 5, path: '/companies/meta.svg' },
  { name: 'Microsoft', id: 6, path: '/companies/microsoft.webp' },
  { name: 'Netflix', id: 7, path: '/companies/netflix.png' },
  { name: 'Uber', id: 8, path: '/companies/uber.svg' },
];

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

        <Carousel
        // plugins={[Autoplay({delay: 2000})]}
         className="w-full py-10" autoplay={true} autoplaySpeed={3000}>
          <CarouselContent>
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img src={path} alt={name} className="h-9 sm:h-14 object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
};

export default Landing;
