import Image from 'next/image';
import React from 'react';

interface Skill {
  name: string;
  src: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'AWS', src: '/skills/aws.png' },
    { name: 'Azure', src: '/skills/azure.png' },
    { name: '.NET Core', src: '/skills/dotnetcore.png' },
    { name: 'React', src: '/skills/react.png' },
    { name: 'Next.js', src: '/skills/nextjs.png' },
    { name: 'Python', src: '/skills/python.png' },
    { name: 'C#', src: '/skills/csharp.png' },
    { name: 'Java', src: '/skills/java.png' },
    { name: 'TypeScript', src: '/skills/typescript.png' },
    { name: 'JavaScript', src: '/skills/javascript.png' },
    { name: 'R', src: '/skills/r.png' },
    { name: 'HTML', src: '/skills/html.png' },
    { name: 'Tailwind CSS', src: '/skills/tailwind.png' },
    { name: 'SQL', src: '/skills/sql.png' },
    { name: 'Snowflake', src: '/skills/snowflake.png' },
    { name: 'PostgreSQL', src: '/skills/postgres.png' },
    { name: 'MongoDB', src: '/skills/mongo.png' },
    { name: 'Docker', src: '/skills/docker.png' },
    { name: 'GitHub', src: '/skills/github.png' },
    { name: 'Azure DevOps', src: '/skills/azuredevops.png' },
    { name: 'PowerBI', src: '/skills/powerbi.png' },
    { name: 'Tableau', src: '/skills/tableau.png' },
  ];

  const renderSkills = (category: string, categorySkills: Skill[]) => (
    <div className="flex flex-col">
      <h3 className="uppercase tracking-widest pt-10 pb-5 text-black">{category}</h3>
      <div className="grid lg:grid-cols-10 gap-4 justify-center items-center">
        {categorySkills.map((skill, index) => (
          <div
            key={index}
            className="p-2 bg-[#ffed84] shadow-xl rounded-xl"
          >
            <div className="grid justify-center items-center"> 
              <div className='flex flex-col items-center justify-center'>
              <Image src={skill.src} width="40" height="40" alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p>{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const cloudSkills = skills.filter(
    (skill) => skill.name === 'AWS' || skill.name === 'Azure'
  );
  const frameworkSkills = skills.filter(
    (skill) =>
      skill.name === 'React' ||
      skill.name === 'Next.js' ||
      skill.name === '.NET Core'
  );
  const languageSkills = skills.filter(
    (skill) =>
      skill.name === 'Python' ||
      skill.name === 'C#' ||
      skill.name === 'Java' ||
      skill.name === 'TypeScript' ||
      skill.name === 'JavaScript' ||
      skill.name === 'R' ||
      skill.name === 'HTML' ||
      skill.name === 'Tailwind CSS' ||
      skill.name === 'SQL'
  );
  const toolSkills = skills.filter(
    (skill) =>
      skill.name === 'Docker' ||
      skill.name === 'GitHub' ||
      skill.name === 'Azure DevOps'
  );
  const dataSkills = skills.filter(
    (skill) =>
      skill.name === 'PowerBI' ||
      skill.name === 'Snowflake' ||
      skill.name === 'Tableau' ||
      skill.name === 'PostgreSQL' ||
      skill.name === 'MongoDB'
  );

  return (
    <div id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-10">
        <h2 className="uppercase tracking-widest">Skills</h2>
        {renderSkills('Cloud', cloudSkills)}
        {renderSkills('Frameworks', frameworkSkills)}
        {renderSkills('Languages', languageSkills)}
        {/* {renderSkills('Tools', toolSkills)} */}
        {renderSkills('Data', dataSkills)}
      </div>
    </div>
  );
};

export default Skills;
