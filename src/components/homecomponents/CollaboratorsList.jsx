import React from 'react';
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'

const CollaboratorsList = () => {
  return (
<section className="bg-violet-600 dark:bg-violet-600">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Top Collaborators 
      </h2>
      <p className="font-light text-violet-100  sm:text-xl dark:text-violet-100">
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </p>
    </div>
    <div className="grid gap-8 lg:grid-cols-3">
    {/* <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}
{/* 
    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}

    {/* <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}
{/* 
    <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}

    {/* <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}

    {/* <div className="max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100  dark:hover:bg-violet-100 dark:focus:ring-blue-800"
    >
      View More
    </a>
  </div>
    </div> */}

    <div className="w-full max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-4">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={person1}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="/profile-view/1"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100 dark:hover:bg-violet-100 dark:focus:ring-blue-800"
          >
            View Profile
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-500 bg-gray-300 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-300 dark:text-black dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:border-gray-300 dark:focus:ring-gray-300"
          >
            Message
          </a>
        </div>
      </div>
    </div>

    <div className="w-full max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-4">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={person2}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="/profile-view/2"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100 dark:hover:bg-violet-100 dark:focus:ring-blue-800"
          >
            View Profile
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-500 bg-gray-300 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-300 dark:text-black dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:border-gray-300 dark:focus:ring-gray-300"
          >
            Message
          </a>
        </div>
      </div>
    </div>

    <div className="w-full max-w-sm bg-gradient-to-br from-violet-400 to-violet-200 border border-gray-200 rounded-lg shadow dark:bg-gradient-to-br from-violet-400 to-violet-200 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-4">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={person3}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="/profile-view/3"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-violet-100 rounded-lg hover:bg-violet-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-100 dark:hover:bg-violet-100 dark:focus:ring-blue-800"
          >
            View Profile
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-500 bg-gray-300 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-300 dark:text-black dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:border-gray-300 dark:focus:ring-gray-300"
          >
            Message
          </a>
        </div>
      </div>
    </div>

    




    </div>
  </div>
</section>

  );
};

export default CollaboratorsList;
