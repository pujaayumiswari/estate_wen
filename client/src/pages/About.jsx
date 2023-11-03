import React from 'react';
import './About.css'
import Testimonial from './Testimonials';


export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-blue-800 flex justify-center p-3'>
          ABOUT AYESTATE
        </h1>
        <img src='https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' />
        <p className='mb-4 text-slate-700'>
          AyEstate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>
        <p className='mb-4 text-slate-700'>
          Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </p>
        <p className='mb-4 text-slate-700'>
          Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
        </p>
      </div>
      <h1 className='text-3xl font-bold mb-4 text-blue-800 flex justify-center p-3'>
        OUR SERVICES
      </h1>
     
<div class="container mx-auto p-4 lg:h-screen flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-full h-auto object-cover rounded-lg" />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">House</h1>
                <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              </div>
            </div>

           
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-full h-auto object-cover rounded-lg" />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Apartment</h1>
                <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              </div>
            </div>

           
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?auto=format&fit=crop&q=80&w=1936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-full h-auto object-cover rounded-lg " />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Villa</h1>
                <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              </div>
            </div>
        </div>
    </div>
      <h1 className='text-3xl font-bold mb-4 text-blue-800 flex justify-center p-3'>
          TESTIMONIALS
        </h1>
  <div>
    <Testimonial />
  </div>
    </div>
  );
}
