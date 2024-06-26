"use client";

import Link from "next/link";

export const Hero = ({heading}) => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-500/70 z-[2]" />
        <div className="p-40 text-white z-[2] mt-[-0rem] text-center">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <div className="py-6 text-xl">
            <p>Craft your memorable experiences with our platform. </p>
            <p>We`re ready to assist you in promoting events, ensuring widespread visibility, and maximizing attendance.</p>
            <p>Let`s collaborate to turn your vision into reality.</p>
          </div>
          <Link href="/login" className="btn hover:btn-neutral mb-4 mr-2">
            Login
          </Link>
          <Link href="/register" className="btn btn-warning mb-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
