import boostImg from "./Images/booster.png";
import { NavLink } from "react-router-dom";

export function Contact() {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "Red" : "",
      textDecoration: isActive ? "" : "underline",
    };
  };
  return (
    <div id="kDiv">
      <div id="InnerDiv3">
        <h1 id="hID3">Contact</h1>
        <h2 id="CnId3">Feel free to reach out to me for any questions !</h2>
      </div>
      <div id="yui">
        <div id="qw">
          <h1 id="h1id">
            Email Me
            <img src={boostImg} id="imgicon"></img>
          </h1>
          <div id="div7">
            <input className="urDiv" type="text" placeholder="Your Email" />
            <input className="urDiv" type="text" placeholder="Your Name" />
            <input className="urDiv" type="text" placeholder="Subject" />
            <textarea
              id="textw"
              className="urDiv"
              type="text"
              placeholder="Message"
            />
            <button id="btnj" className="urDiv">
              Send
            </button>
          </div>
        </div>
        <div id="tt">
          <h1 id="pol">Javeria Ahmed</h1>
          <div id="tw01">
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
          </div>
          <a href="https://www.linkedin.com/in/javeria-ahmed09/" target="-main">
            <div id="lk"></div>
          </a>
          <h3 id="wsd">© 2024 Javeria Ahmed. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}
