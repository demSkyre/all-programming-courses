import React from 'react';
import Course from '../course/Course';
import Pagination from '../pagination/Pagination';
import Landing from '../compiler/Landing';

/**
    <Course/>
    <Pagination/>
    <Landing/>
 */

const Layout = () => (
  <div class=".h-screen">
    <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-4">
      <div class="col-span-1">
        <Landing/>
      </div>
      <div class="col-span-2">
        <div class="inline-flex">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
      <div class="col-span-1">
        <Course/>
      </div>
    </div>
  </div>
  
);

export default Layout;