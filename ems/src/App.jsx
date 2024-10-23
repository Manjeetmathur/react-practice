import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState();
  // localStorage.clear()
  // setLocalStorage()

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      // console.log("User login hai");
      // console.log(loggedInUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log(user);
    } else if (authData) {
      const emp = authData.employees.find(
        (e) => email === e.email && password === e.password
      );

      if (emp) {
        // console.log(emp);
        setUser("employee");
        setLoggedInUserData(emp);
        console.log(loggedInUserData);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: emp })
        );
      }
      // console.log(user);
    } else {
      alert("Invalid credential . . . ");
    }
  };

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard data={loggedInUserData} changeUser={setUser} />
      ) : (
        ""
      )}
      {user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : (
        ""
      )}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;
