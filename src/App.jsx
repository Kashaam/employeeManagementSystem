import React, { useContext, useEffect, useState } from "react";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);


useEffect(()=>{
  const loggedInUser = localStorage.getItem('lggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
   setUser(userData.role);
   setLoggedInUserData(userData.data)
  }

}, [])



  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    } else if ( authData ) {
      const employee = authData.employees.find((e) => {
        return email == e.email && e.password == password})
        if(employee) {
          setUser("employee");
          setLoggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}))
        }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
