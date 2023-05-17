import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home.jsx";
import Teams from "./components/Teams.jsx";

const AppWrapper = () => {
  const [selectedTeam, setSelectedTeam] = useState("TeamA");
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  const router = createBrowserRouter({
    path: "/",
    element: <App selectedTeam={selectedTeam} employees={employees} />,
    children: [
      {
        index: true,
        element: (
          <Home
            selectedTeam={selectedTeam}
            employees={employees}
            setEmployees={setEmployees}
            setSelectedTeam={setSelectedTeam}
          />
        ),
      },
      {
        path: "teams",
        element: (
          <Teams setSelectedTeam={setSelectedTeam} employees={employees} />
        ),
      },
    ],
  });
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);
