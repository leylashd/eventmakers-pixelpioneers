import React from 'react';

export const EventTable = () => {
  return (
    <div className="overflow-x-auto overflow-container">
      <table className="table-auto min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold border-b-2 border-black">Event</th>
            <th className="text-left py-3 px-4 uppercase font-semibold border-b-2 border-black">Description</th>
            <th className="text-left py-3 px-4 uppercase font-semibold border-b-2 border-black">Date</th>
            <th className="text-left py-3 px-4 uppercase font-semibold border-b-2 border-black">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr>
            <td className="text-left py-3 px-4 event-name border-b-2 border-black">Event 2</td>
            <td className="text-left py-3 px-4 event-desc border-b-2 border-black">Description 2</td>
            <td className="text-left py-3 px-4 border-b-2 border-black">2024-04-05</td>
            <td className="text-left py-3 px-4 border-b-2 border-black">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Edit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="text-left py-3 px-4 event-name border-b-2 border-black">Event 3</td>
            <td className="text-left py-3 px-4 event-desc border-b-2 border-black">Description 3</td>
            <td className="text-left py-3 px-4 border-b-2 border-black">2024-04-06</td>
            <td className="text-left py-3 px-4 border-b-2 border-black">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Edit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
