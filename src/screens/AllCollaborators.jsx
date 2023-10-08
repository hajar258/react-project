import React from 'react';
import galaxy1 from '../assets/galaxy1.jpg';
import galaxy2 from '../assets/galaxy2.jpg';
import galaxy3 from '../assets/galaxy3.jpg';
import galaxy4 from '../assets/galaxy4.jpg';
import galaxy5 from '../assets/galaxy5.jpg';
import galaxy6 from '../assets/galaxy6.jpg';

const AllCollaboratoers = () => {  
  return (
<section className="bg-violet-600 dark:bg-violet-600" >
<div className="max-w-screen-xl px-8 bg-violet-600  py-8  mx-auto text-center lg:py-16 lg:px-6" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${galaxy1})` ,backgroundPosition: 'center center',backgroundSize: 'cover',

backgroundRepeat: 'no-repeat', width:'100%'}}>
    <div className="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 w-100 px-6" >
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
      Explore Projects
      </h2>
    </div>
    
  </div>
  
  <div className="max-w-screen-xl px-4 bg-violet-600  py-8 mx-auto text-center lg:py-16 lg:px-6">
    <form className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
  <div className="flex">
    <label
      htmlFor="search-dropdown"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Your Email
    </label>
    <button
      id="dropdown-button"
      data-dropdown-toggle="dropdown"
      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      type="button"
    >
      All categories{" "}
      <svg
        className="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      id="dropdown"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        <li>
          <button
            type="button"
            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Mockups
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Templates
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Design
          </button>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Logos
          </button>
        </li>
      </ul>
    </div>
    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search projects..."
        required=""
      />
      <button
        type="submit"
        className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-violet-200 rounded-r-lg border border-violet-200 hover:bg-violet-200 focus:ring-4 focus:outline-none focus:ring-violet-200 dark:bg-violet-200 dark:hover:bg-violet-200 dark:focus:ring-violet-200"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  </div>
    </form>

  <div className="grid gap-8 lg:grid-cols-3">
    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy1} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>

    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy2} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>

    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy3} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>

    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy4} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>

    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy5} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>

    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={galaxy6} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-violet-100  dark:text-violet-100 ">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="/project-view"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div>



    </div>
  </div>










  


</section>

  );
};

export default AllCollaboratoers;
