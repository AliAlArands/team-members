import Employees from "./Employees";
const Home = ({employees, selectedTeam, setSelectedTeam, setEmployees}) => {
 

  const handleCardClick = (employee) => {
    const newEmployeesList = employees.map((emp) =>
      emp.id === employee.id
        ? emp.teamName === selectedTeam
          ? { ...emp, teamName: "" }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmployees(newEmployeesList);
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));
  };

  return (
    <>
     
      <div
        className="select"
        onChange={(event) => {
          setSelectedTeam(event.target.value);
        }}
      >
        <select
          className="form-select mb-2 w-50 mx-auto"
          aria-label="Default select example"
        >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        onCardClick={handleCardClick}
      />
    </>
  );
};

export default Home;
