const SearchTeams = ({ selectedTeam, employees}) => {
  let count = employees.reduce((acc, employee) => {
    if (employee.teamName === selectedTeam) {
      return acc + 1;
    }
    return acc;
  }, 0);
  //   console.log(selectedTeam)

  return (
    <div className="text-center">
      <h1>Team Member Allocation</h1>
      <p>
        {selectedTeam} has {count} {count > 1 ? "Members" : "Member"}
      </p>
      
    </div>
  );
};

export default SearchTeams;
