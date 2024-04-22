"use client";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="sticky left-0 top-0 w-full z-10 easy-in duration-300  ">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black ">
        <Link href="/">
          <h1 className="font-bold text-3xl ">pixelpioneers.</h1>
        </Link>
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="p-4">Home</li>
          </Link>
          <Link href="/">
            <li className="p-4"> Events</li>
          </Link>
          <Link href="/">
            <li className="p-4"> Contact </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
