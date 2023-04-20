import React from 'react';
var testing_title = `Title for whatever type of programming`;

var testing_text = `
Text that goes for super super long like very very
long like super super long like very very long like super 
super long like very very long like super super long like ve
ry very long like super super long like very very long like super super
long like very very long like aaaaaaa 
`;

const Course = ({ imgUrl, date, text, onClickFunction }) => (
  <div className="flex flex-row space-x-4 items-start px-10 py-20">
    <div className="flex flex-col w-full h-full justify-start">
      <h1 className="font-mono font-bold  text-orange-400 text-2xl">{testing_title}</h1>
      <p className="font-mono text-white">{testing_text}</p>
    </div>
  </div>
  
);

export default Course;