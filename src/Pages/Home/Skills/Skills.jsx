import React from 'react';
import 'daisyui/dist/full.css'; // Import Daisy UI styles


const Skills = () => {
  const skills = [
    { name: 'HTML', progress: 99 },
    { name: 'CSS', progress: 95 },
    { name: 'JavaScript', progress: 80 },
    { name: 'React Js', progress: 75 },
    { name: 'Node Js', progress: 70 },
    { name: 'Mongo DB', progress: 60 },
    { name: 'Java', progress: 55 },
  ];

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="font-extrabold text-4xl text-pink-500 text-center mt-32 mb-8">Skills</h1>

        <div className="space-y-1">
        {skills.map((skill, index) => (
          <div className="flex items-center" key={index}>
            <span className="w-1/3 font-bold ml-40">{skill.name}</span>
            <div className="w-1/3">
              <div className="flex items-center h-3 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-pink-400 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      
      <div className="radial-progress ml-40 mt-8  text-pink-400" style={{"--value":99}}> 99% <small>Bootstrap </small></div>
      <div className="radial-progress ml-40 mt-8 text-pink-400" style={{"--value":93}}> 93% <small>React <br /><small>Bootstrap</small></small></div>
      <div className="radial-progress ml-40 mt-8 text-pink-400" style={{"--value":95}}> 95% <small>Tailwind</small></div>
       <div className="radial-progress ml-40 mt-8 text-pink-400" style={{"--value":97}}> 97% <small>Daisy UI</small></div>
       
      </div>
    </div>
    </div>
    
    
  );
};

export default Skills;