import React from 'react';


const Hero = () => {
  return (

    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto  lg:col-span-7" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'start'

        }}>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" style={{ textAlign: 'left' }}>
            ScienceConnect
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" style={{ textAlign: 'left' }}>
            SciConnect is a powerful web-based tool designed to foster collaboration and communication between open science project creators and skilled potential contributors. This platform aims to connect individuals who are passionate about advancing scientific research and promote open collaboration within the scientific community.
          </p>
          <a href="#" style={{ textAlign: 'left' }} className="inline-flex items-left justify-left px-5 py-3 text-base font-medium text-left text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Get Started</a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img style={{ height: 400, width: 400 }}
            src="https://images.pexels.com/photos/355938/pexels-photo-355938.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="mockup"
          />
        </div>
      </div>
    </section>


  );
};

export default Hero;
