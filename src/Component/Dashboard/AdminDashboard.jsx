import React from "react";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <>
    <div className="min-h-screen w-full p-7">
      <Header />
    <CreateTask />
    <AllTask />
    </div>
    
    </>
  );
};

export default AdminDashboard;
