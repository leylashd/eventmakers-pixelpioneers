import React from 'react';

// INI BERLAKU BUAT MANAGE CRUD
export default function Layout({ children }) {
  return (
    <div className='flex h-screen relative'>
      <aside className='w-[320px] bg-black p-6 text-white border-r border-slate-600'>
        <div className=' btn-warning text-white font-bold mb-7 text-2xl'>🎉 Event Makers</div>
        <div className='mb-4 text-xl btn btn-outline btn-warning'>All Event</div>
        <div className='text-xl btn btn-outline btn-warning '>Manage My Event</div>
      </aside>
      <main className='w-[calc(100vw-200px)] p-6 pt-0'>{children}</main>
    </div>
  );
};
