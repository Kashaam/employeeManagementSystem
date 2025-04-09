import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex gap-2 items-center px-10 mt-6">
        <div className="h-8 w-8 rounded-full bg-slate-200 relative border-1">
          <FaArrowLeft className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <h1 className="font-semibold text-3xl ">Create Task</h1>
      </div>
      <div>
        <form className="flex flex-col mt-10 gap-4 p-10" action="">
          <h1 className="text-lg font-medium">Task Title</h1>
          <input
            className="text-sm outline-none bg-zinc-200 px-3 py-2 rounded-md"
            type="text"
          />
          <h1 className="text-lg font-medium mt-6">Description</h1>
          <textarea
            className="text-sm outline-none bg-zinc-200 px-3 py-2 rounded-md "
            rows={4}
          />
          <h1 className="text-lg font-medium mt-6">Date</h1>
          <input
            className="text-sm outline-none bg-zinc-200 px-3 py-2 rounded-md "
            type="date"
          />
          <h1 className="text-lg font-medium mt-6">Assign To</h1>
          <input
            className="text-sm outline-none bg-zinc-200 px-3 py-2 rounded-md "
            type="text"
          />
          <h1 className="text-lg font-medium mt-6">Category</h1>
          <input
            className="text-sm outline-none bg-zinc-200 px-3 py-2 rounded-md "
            type="text"
          />
          <button className="bg-blue-300 text-lg px-3 py-2 rounded-lg mt-10 text-white font-semibold">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
