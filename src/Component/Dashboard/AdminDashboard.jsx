import React from "react";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <>
    <div className="min-h-screen w-full p-7">
    <CreateTask />
    <AllTask />
    </div>
    
    </>
  );
};

export default AdminDashboard;
