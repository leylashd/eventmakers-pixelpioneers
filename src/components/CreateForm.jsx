"use client";
import React from "react";

export const CreateForm = () => {
  
  async function postEvent(formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const phoneNumber = formData.get("phoneNumber");

    const res = await fetch("https://eventmakers.devscale.id/events/{eventid}/join");
  }
  
    
  return (
    <div>
      <form action={postEvent}>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text font-bold">name</span>
          </div>
          <input name="name" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text font-bold">email</span>
          </div>
          <input name="email" type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text font-bold">phone number</span>
          </div>
          <input name="phoneNumber" type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </label>
        <button type="submit" class="btn text-white bg-black mt-3 ">Submit</button>
      </form>
    </div>
  );
};
