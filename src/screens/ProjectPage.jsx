import React from 'react';

const ProjectPage = () => {
  return (
<section className="bg-violet-600 dark:bg-violet-600">
<div className="max-w-screen-xl px-8 bg-violet-600  py-8  mx-auto text-center lg:py-16 lg:px-6">
    <div className="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 w-100 px-6" >
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
      A Marketplace for Open Science Projects
      </h2>
      <p className="mb-4 m-6 font-medium">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </p>
      <a
        href="#"
        style={{textAlign: 'left', marginTop:'25px'}}
        className="inline-flex items-left justify-left px-5 py-4 text-base font-medium text-left text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-violet-200 dark:focus:ring-gray-800"
      >
        Request collaboration
        <svg
          className="ml-1 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      
    </div>
  </div>

  <div className="max-w-screen-xl px-4 bg-gradient-to-br from-violet-400 to-violet-200  py-8 mx-auto text-center lg:py-16 lg:px-6">
    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">70</dt>
        <dd className="font-medium text-gray-900 dark:text-gray-900">
          developers
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1K+</dt>
        <dd className="font-medium text-gray-900 dark:text-gray-900">
          contributors
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">400+</dt>
        <dd className="font-medium text-gray-900 dark:text-gray-900">
          organizations
        </dd>
      </div>
    </dl>
  </div>

  <div className=" max-w-screen-xl px-4 py-8 mx-auto  lg:py-8  text-left">
    <div className="mr-auto place-self-center lg:col-span-7 py-6">
      <h1 className="max-w-2xl mb-4 text-2xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Description
      </h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.vvHere at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth. Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth. Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>



    </div>
    <hr></hr>
   
  </div>

 

  <div className=" max-w-screen-xl px-4 py-8 mx-auto  lg:py-8  text-left">
    <div className="mr-auto place-self-center lg:col-span-7 py-6">
      <h1 className="max-w-2xl mb-4 text-2xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Objectives
      </h1>
      <ul class="max-w-lg text-gray-500 text-xl text-medium list-disc list-inside dark:text-gray-400">
    <li>
        At least 10 characters (and up to 100 characters)
    </li>
    <li>
        At least one lowercase character
    </li>
    <li>
        Inclusion of at least one special character, e.g., ! @ # ?
    </li>
</ul>
    </div>
    <hr></hr>
   
  </div>

  


</section>


  );
};

export default ProjectPage;
