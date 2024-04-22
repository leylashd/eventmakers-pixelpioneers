"use client";

import Image from "next/image";
import React from "react";

export const EventList = ({title, image, datetime, author}) => { 
 
  return (
    <div className="card w-96 shadow-xl my-5 bg-slate-50  top-0">
      <figure >
        <img className="object-cover h-96 w-full" src={image} alt="No Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p className="badge badge-outline">{datetime}</p>
        <p className="badge badge-outline">{author}</p>
        <div className="card-actions justify-end">
          <button class="btn btn-xs sm:btn-sm ">Details</button>
        </div>
      </div>
    </div>
  );
};
