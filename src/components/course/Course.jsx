import React, { useEffect, useState } from "react";

var testing_title = `Title for whatever type of programming`;

var testing_text = `
Text that goes for super super long like very very
long like super super long like very very long like super 
super long like very very long like super super long like ve
ry very long like super super long like very very long like super super
long like very very long like aaaaaaa 
`;

const Course = ({ courseTitle }) => {
  const [title, setTitle] = useState(courseTitle);

  return (
    <div className="flex flex-row space-x-4 items-start px-10 pt-20 pb-4">
      <div className="flex flex-col w-full h-full justify-start">
        <h1 className="font-mono font-bold  text-orange-400 text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default Course;