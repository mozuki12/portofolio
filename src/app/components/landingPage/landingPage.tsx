import React from 'react';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-landing-Page h-screen flex justify-center items-center">
        <div className="absolute ">
          <h1 className="text-4xl font-bold text-[#585a8e] p-20px text-center  ">Muhammad Fauzil Adim</h1>
          <img src="/gweh.png" alt="Logo" className="mx-auto w-1/4 rounded-full mb-4" />
          <h1 className="text-2xl font-bold text-[#585a8e] mb-4 text-right mr-10">Graphic Designer & Front End Developer</h1>
          <h2 className="text-lg text-white max-w-md mx-auto mb-8 text-right mr-12">
            I am a graduate of TELKOM Vocational High School with a major in Software Engineering (RPL).
            I am enthusiastic and quick to learn new things with a keen eye for detail and an aspiration to work in the creative field.
            I have experience as a digital marketer and proficiency in design tools such as Adobe Illustrator, Adobe Photoshop, FIGMA, as well as programming languages like HTML and CSS.
          </h2>
        </div>
      </div>
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-100 rounded-lg p-4 m-4 w-64 h-48 text-center">
            <h3 className="text-xl font-bold">Adobe Illustrator</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 m-4 w-64 h-48 text-center">
            <h3 className="text-xl font-bold">Adobe Photoshop</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 m-4 w-64 h-48 text-center">
            <h3 className="text-xl font-bold">FIGMA</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 m-4 w-64 h-48 text-center">
            <h3 className="text-xl font-bold">After Effect</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;