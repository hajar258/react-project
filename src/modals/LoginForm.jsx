import React from 'react';
import orion_img from '../assets/Orion_Nebula.jpeg'


export const LoginForm = () => {
  return (
<section class="bg-violet-600 dark:bg-violet-600" style={{ backgroundImage: `url(${orion_img}` ,backgroundPosition: 'center center',backgroundSize: 'cover',

backgroundRepeat: 'no-repeat', width:'100%'}}>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center text-bold  text-xl mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="/" alt="logo"/>
          SciConnect    
      </a> */}
      <div class="w-full bg-violet-500  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-violet-500  dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 class="leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h2>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white text-left" >Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white text-left">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-white rounded bg-white focus:ring-3 focus:ring-prwhiteimary-300 dark:bg-violet-100 dark:border-violet-600 dark:focus:ring-transaprent dark:ring-offset-violet-400" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-violet-600 hover:underline dark:text-violet-500">Forgot password?</a>
                  </div>
                 
                  <button type="submit" class="w-full text-black bg-violet-100 hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-100 dark:hover:bg-primary-700 "> <a href='/my-projects'>Sign in</a></button>

                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  );
};

export default LoginForm;
