const Teams = ({ employees, setSelectedTeam }) => {
  const filterEmployees = (employeesList, employeesTeam) => {
    const selectedTeamEmployees = employeesList.filter(
      (employee) => employee.teamName === employeesTeam
    );
    return selectedTeamEmployees;
  };

  const teamsList = employees.reduce((acc, employee) => {
    if (!acc.includes(employee.teamName)) {
      if (employee.teamName !== "") {
        acc.push(employee.teamName);
      } else {
        acc.push("NoTeam");
        employee.teamName = "NoTeam";
      }
    }
    return acc;
  }, []);

  teamsList.sort();
  //   console.log(teamsList);
  return (
    <>
      {teamsList.map((team) => {
        const collapseId = `collapse-${team}`;
        const buttonId = `button-${team}`;
        return (
          <div id="accordion" key={team}>
            <div className="card w-50 mx-auto text-center  my-3">
              <div className="card-header" id={team}>
                <h5 className="mb-0 ">
                  <button
                    className="btn team-name"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="true"
                    aria-controls={collapseId}
                    id={buttonId}
                    onClick={() => setSelectedTeam(team)}
                  >
                    {team}
                  </button>
                </h5>
              </div>

              <div
                id={collapseId}
                className="collapse"
                aria-labelledby={team}
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul className="list-group">
                    {filterEmployees(employees, team).map((employee) => {
                      return (
                        <li key={employee.id} className="list-group-item">
                          {employee.teamName} {employee.designation}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Teams;
