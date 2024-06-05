import React from 'react';
import showImage from '../assets/show-image.png'; // Ensure this path is correct
import { FaStar } from 'react-icons/fa';

function Card() {
  return (
    <div className='flex flex-col lg:flex-row h-full p-6'> {/* Keep base as flex-col */}
      <div className='w-full lg:w-2/5 bg-blue-300 p-6 rounded-lg shadow-lg flex flex-col justify-center mb-6 lg:mb-0'>
        <img src={showImage} alt="Show" className='w-full object-cover rounded mb-4' />
        <h2 className='text-2xl font-bold mb-4'>About</h2>
        <p className='text-lg'>Dive into the world of fan reviews on The Big Bang Theory! The show's dedicated review site lets you explore what other viewers think.
          Browse existing reviews to see opinions on specific moments, 
          from Sheldon's antics in season 3 to Leonard and Penny's will-they-won't-they tension in season 1.
          Feeling passionate? You can add your own review too! Share your thoughts on a favorite episode, a hilarious scene, or a character's development. 
          With both existing reviews and the option to add your own, the site becomes a hub for fans to discuss, dissect, and celebrate this beloved sitcom.</p>
      </div>
      <div className='w-full lg:w-3/5 lg:ml-6 p-6 rounded-lg shadow-lg bg-gray-100 flex flex-col justify-center'>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold'>IMDb Rating</h3>
          <p className='text-lg'>8.1/10</p>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold'>Rotten Tomatoes</h3>
          <p className='text-lg'>81% Fresh</p>
        </div>
        <div className='awards-section d-flex flex-wrap justify-content-between align-items-center'> {/* New awards section */}
          <h2 className="text-2xl font-bold text-gold-500">Awards & Accolades</h2>
          <div className="award-details">
            <p className="text-lg">
            🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆<span className="underline font-bold text-gold-500">10 Emmy Awards(out of 46 nominations) </span>  - This prestigious television award recognized the show's overall excellence. Jim Parsons, in particular, won the Emmy Award for Outstanding Lead Actor in a Comedy Series an impressive four times!
            </p>
            <p className="text-lg">
            🎖️ <span className='underline font-bold text-gold-500'>Golden Globe Award for Best Actor (Jim Parsons)</span> - Jim Parsons' portrayal of Sheldon was truly award-worthy, earning him this coveted Golden Globe.
            </p>
          </div>
          <p className="text-lg text-center font-semibold text-green-600">
          🏵️🏵️🏵️🏵️🏵️🏵️🏵️ 14 People's Choice Awards!🏵️🏵️🏵️🏵️🏵️🏵️🏵️  </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
