"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { EventTable } from './eventTable';

export const CreateForm = () => {
    const router = useRouter()
    
    async function createEvent(formData){
        const title = formData.get("title")
        const description = formData.get("description")
        const image = formData.get("image")
        const dateTime = formData.get("dateTime")
        const author = formData.get("author")

        console.log(title, description, image, dateTime, author)
        const res = await fetch("https://eventmakers.devscale.id/events/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title, description, image, dateTime, author})
            });
        const data = await res.json();
        router.refresh();
    }
    


  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="w-full max-w-8xl">
        <form className="p-8 bg-gray-100 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-left">Add New Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
                <label htmlFor="event-name" className="block mb-1">Event Name</label>
                <input type="text" id="event-name" name='title' className="input input-bordered w-full min-w-[180px]" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="author" className="block mb-1">Author</label>
                <input type="text" id="author" name='author' className="input input-bordered w-full min-w-[180px]" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="event-date" className="block mb-1">Event Date</label>
                <input type="date" id="event-date" name='dateTime' className="input input-bordered w-full min-w-[180px]" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="event-image" className="block mb-1">Event Image</label>
                <input type="text" id="event-image" name='image' className="input input-bordered w-full min-w-[180px]" />
            </div>
          </div>
          <div className="flex flex-col mb-5">
              <label htmlFor="description" className="block mb-1">Description</label>
              <input type="text" id="description" name='description' className="input input-bordered input-lg" />
          </div>
          <button formAction={createEvent} type="submit" className="w-full bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
              CREATE EVENT
          </button>
        </form>
        <div className='text-2xl font-semibold mt-6 text-left'>
            {/* <EventTable/> */}
        </div>
      </div>
    </div>
  );
};
