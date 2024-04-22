"use client";

import React, {useEffect, useState} from "react";
import {useRef} from "react";

export const JoinEvent = ({eventid}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const FormRef = useRef();
  async function postEvent(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");

    setIsLoading(true);

    const res = await fetch(`https://eventmakers.devscale.id/events/${eventid}/join`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
      }),
    });
    const data = await res.json();
    console.log(data);
    FormRef.current.reset();
    setIsLoading(false);
    setIsSuccessful(true);
  
    setTimeout(() => {
      setIsSuccessful(false);
    }, 2000); 
  }

  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isSubmitted]);

  return (
    <div>
      <form action={postEvent} ref={FormRef}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">name</span>
          </div>
          <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">email</span>
          </div>
          <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">phone number</span>
          </div>
          <input name="phoneNumber" type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <button onClick={() => setIsSubmitted(true)} className="btn text-white bg-black mt-3 ">
          {isLoading ? <span className="loading loading-infinity loading-lg"></span> : "Submit"}
        </button>
      </form>
      
      {isSuccessful && (
        <div className="mt-3" role="alert" class="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Successfully submitted</span>
        </div>
      )}
    </div>
  );
};
