"use client";

import React from "react";

export const EventList = ({title, image, datetime, author, participant}) => {
  return (
    <div className="card w-96 shadow-xl my-5 bg-slate-50  top-0">
      <figure >
        <img className="object-cover h-96 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p className="badge badge-outline">{datetime}</p>
        <div className="badge badge-outline">{author}</div>
        <div className="card-actions justify-end">
          <button class="btn btn-xs sm:btn-sm ">Details</button>
        </div>
      </div>
    </div>
  );
};
