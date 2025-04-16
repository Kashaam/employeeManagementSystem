import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [date, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      date,
      description,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
      }
    });
    setUserData(data);

    setTaskDate("");
    setTaskTitle("");
    setTaskDescription("");
    setCategory("");
    setAssignTo("");
  };

  return (
    <div className=" bg-gray-50 flex flex-col mt-4">
      {/* Header */}
      {/* <div className="flex items-center gap-4 px-8 pt-6">
        <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
          <FaArrowLeft className="text-gray-600" />
        </button>
        <h1 className="text-3xl font-semibold text-gray-800">Create Task</h1>
      </div> */}

      {/* Form Section */}
      <form onSubmit={submitHandler} className="px-10 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Task Title
              </label>
              <input
                value={title}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                placeholder="Enter task title"
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date
              </label>
              <input
                value={date}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Assign To
              </label>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                type="text"
                placeholder="Assignee name"
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                placeholder="e.g., Bug, Feature"
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full md:w-1/2">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              placeholder="Add task details..."
              className="flex-grow bg-white border border-gray-300 rounded-md px-4 py-2 text-sm resize-none h-full min-h-[275px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Centered "Create Task" Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 w-full cursor-pointer hover:bg-blue-700 text-white text-lg py-2 px-6 rounded-md font-semibold transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
