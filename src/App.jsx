import React, { useContext, useEffect, useState } from "react";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);


useEffect(()=>{
  const loggedInUser = localStorage.getItem('lggedInUser')
  if(authData){
   setUser(loggedInUser.role);
  }

}, [authData])



  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    } else if (
      authData &&
      authData.employees.find((e) => {
        return email == e.email && e.password == password})
    ) {
      setUser("employee");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "employee"}))
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
