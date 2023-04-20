import React, { useState } from 'react';
import Course from '../course/Course';
import Landing from '../compiler/Landing';
import { jscourses } from '../../constants/js-course/courseContent';

/**
    <Course/>
    <Pagination/>
    <Landing/>
 */

const Layout = () => {
  const [currentCourse, setCurrentCourse] = useState(jscourses[0]);
  const [passed, setPassed] = useState(true);
  const [firstPage, setFirstPage] = useState(currentCourse.page);

  const nextTest = () => {
    setPassed(false);
    setCurrentCourse(jscourses[1]);
  };

  return (
    <div class="">
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
        <div class="col-span-1">
          <Landing jsDefault={currentCourse.code}/>
        </div>
        <div class="col-span-2 h-10">
          <div class="inline-flex float-right px-16">
            <button class="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-500 text-gray-800 font-bold py-2 rounded-l px-20 focus:outline-none" disabled={(firstPage === 1) || !passed}>
              Anterior
            </button>
            <button onClick={nextTest} class="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-500 text-gray-800 font-bold py-2 rounded-r px-20 focus:outline-none" disabled={!passed}>
              Siguiente
            </button>
          </div>
        </div>
        <div class="col-span-1">
          <Course courseTitle={currentCourse.title}/>
          <div className="px-10">
            <div className="">
              <textarea id="message" rows="16" class="resize-none font-mono text-white block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." disabled readonly>
                {currentCourse.description}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;