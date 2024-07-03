import React from 'react'
// import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { image } from "../assets/image1.png";
// import { image2 } from "../assets/image2.webp";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-2xl sm:text-3xl font-bold text-white'><TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Hanshika Srivastava',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am a Frontend Developer',
              1000,
              'I am a Backend Developer',
              1000,
              'I am a Fullstack Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          /></h2>

          <p className='text-gray-500 py-4 max-w-md'>
            Welcome to my Portfolio
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-500 to-blue-500 cursor pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>

        {/* <div>
          <img src={image} alt="My Profile"
            className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div> */}
      </div>
    </div>
  )
}

export default Home
