import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
const Employees = ({ employees, selectedTeam, onCardClick }) => {
  return (
    <div className="container text-center">
      <ul className="list-of-cards mt-4">
        {employees.map((employee) => (
          
            <div
              key={employee.id}
              className={
                employee.teamName === selectedTeam ? "card bold-card" : "card"
              }
              onClick={() => onCardClick(employee)}
            >
              {employee.gender === "male" ? (
                <img src={maleProfile} className="card-img" />
              ) : (
                <img src={femaleProfile} className="card-img" />
              )}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <h5 className="card-title">Full Name: {employee.fullName}</h5>
                <p className="card-text">
                  <b>Dseignation</b>: {employee.designation}
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
