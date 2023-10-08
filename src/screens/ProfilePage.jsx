import React from 'react';
import { useParams } from 'react-router-dom';
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'


export const ProfilePage = () => {
    const { id } = useParams();

  return (
<section className="bg-violet-600 dark:bg-violet-600">
<div className="max-w-screen-xl px-8 bg-violet-600  py-8  mx-auto text-center lg:py-16 lg:px-6">
    <div className="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 w-100 px-6" >


    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
{id==1 && 
        <img
        className="w-96 h-96 mb-3 rounded-full shadow-lg"
        src={person1}
        alt="Bonnie image"
      />
      }
      {id==2 && 
        <img
        className="w-96 h-96 mb-3 rounded-full shadow-lg"
        src={person2}
        alt="Bonnie image"
      />
      }
      {id==3 && 
        <img
        className="w-96 h-96 mb-3 rounded-full shadow-lg"
        src={person3}
        alt="Bonnie image"
      />
      }
      
              </div> 
       
        <div class="mr-auto place-self-center text-left lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {id == 1 && "Bonnie Green"}
            {id == 2 && "Bonnie Green"}
            {id == 3 && "Bonnie Green"}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {id==1 && 
"Fullstack Developer"
      }
                  {id==2 && 
"Junior Frontend Developer"
      }
                  {id==3 && 
"Senior Back Developer"
      }

                </p>

{id == 1&&
                <div>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Python</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Django</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Bootstrap</span> 
                </div>
}

{id == 2&&
                <div>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Tailwind</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Bootstrap</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">CSS</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Bulma</span>
                </div>
}

{id == 3&&
                <div>

<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">SQL</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Python</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">Java</span>
<span class="bg-violet-200 text-white text-md font-medium mr-2 px-3 py-1.5 rounded dark:bg-violet-200 dark:text-white">PHP</span>
                </div>
}

      <a
        href="#"
        style={{textAlign: 'left', marginTop:'25px'}}
        className="inline-flex items-left justify-left px-5 py-4 text-base font-medium text-left text-gray-900 border border-gray-300 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-violet-100 dark:focus:ring-gray-800"
      >
        Contact Me
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


      
    </div>
  </div>

  <div className="max-w-screen-xl px-4 bg-gradient-to-br from-violet-400 to-violet-200  py-8 mx-auto text-center lg:py-16 lg:px-6">
    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">            {id == 1 && 
            "3"}
                        {id == 2 && 
            "5"}
                        {id == 3 && 
            "7"}
            </dt>
        <dd className="font-medium uppercase text-gray-900 dark:text-gray-900">
          projects created
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">            {id == 1 && 
            "20"}
                        {id == 2 && 
            "45"}
                        {id == 3 && 
            "35"}
            </dt>
            
        <dd className="font-medium uppercase text-gray-900 dark:text-gray-900">
          contributions
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2  text-3xl md:text-4xl font-extrabold">
            {id == 1 && 
            "4.5"}
                        {id == 2 && 
            "4.6"}
                        {id == 3 && 
            "5"}
<span className='text-xl text-gray-300'>/5</span>
        </dt>

        <dd className="font-medium uppercase text-gray-900 dark:text-gray-900"> rating
        </dd>
      </div>
    </dl>
  </div>

  <div className="max-w-screen-xl px-4 bg-violet-200  py-8 mx-auto text-center lg:py-16 lg:px-6">
  <a
  href="#"
  className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
</a>
  </div>









  


</section>


  );
};

