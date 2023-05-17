import { Outlet } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import SearchTeams from "./components/SearchTeams";

function App({ selectedTeam, employees }) {
  return (
    <>
      <NavBar />
      <SearchTeams
        selectedTeam={selectedTeam}
        employees={employees}
        // setSelectedTeam={setSelectedTeam}
      />
      <Outlet />
    </>
  );
}

export default App;
