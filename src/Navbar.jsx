import { NavLink } from "react-router-dom";

export function Myintro() {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "Red" : "",
      textDecoration: isActive ? "" : "underline",
    };
  };
  return (
    <div id="mainDiv">
      <div id="navbar">
        <h2 id="nameid">&lt;Javeria/Ahmed&gt;</h2>
        <div id="two">
          <h4>
            <NavLink style={activeState} to={"/"}>
              About
            </NavLink>
          </h4>
          <h4>
            <NavLink style={activeState} to={"/skills"}>
              Skills
            </NavLink>
          </h4>
          <h4>
            <NavLink style={activeState} to={"/projects"}>
              Projects
            </NavLink>
          </h4>
          <h4>
            <NavLink style={activeState} to={"/education"}>
              Education
            </NavLink>
          </h4>
          <h4>
            <NavLink style={activeState} to={"/contact"}>
              Contact
            </NavLink>
          </h4>
        </div>
        <h3 id="gihubid">
          <a id="git" href="https://github.com/Javeria-Ahmed9/" target="-main">
            Github Profile
          </a>
        </h3>
      </div>
    </div>
  );
}
