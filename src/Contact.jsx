import { useEffect, useState } from "react";
import boostImg from "./Images/booster.png";
import { NavLink } from "react-router-dom";

export function Contact() {
  let [mail, setMail] = useState("");
  let [name, setName] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handledata);
    function handledata(event) {
      if (event.key == "Enter") {
        handleClick(mail);
      }
    }
    return () => document.removeEventListener("keydown", handledata);
  });

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "Red" : "",
      textDecoration: isActive ? "" : "underline",
    };
  };

  function mailFunction(event) {
    setMail(event.target.value);
  }
  function nameFunction(event) {
    setName(event.target.value);
  }
  function subjectFunction(event) {
    setSubject(event.target.value);
  }
  function messageFunction(event) {
    setMessage(event.target.value);
  }
  let handleClick = (mail) => {
    if (
      mail.trim() !== "" &&
      name.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== "" &&
      new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(mail)
    ) {
      console.log(
        `email is: ${mail} ,name is ${name},subject is ${subject},message is ${message}`
      );
      alert("email send sucessfully");
      setMail("");
      setName("");
      setSubject("");
      setMessage("");
    } else {
      alert("Sending failed! Either email is incorrect or any field is empty");
    }
  };

  return (
    <div id="kDiv">
      <div id="InnerDiv3">
        <h1 id="hID3">Contact</h1>
        <h2 id="CnId3">Feel free to reach out to me for any questions !</h2>
      </div>
      <div id="yui">
        <div id="qw">
          <div id="h1id">
            <h5 id="yuoi">Email Me</h5>
            <img src={boostImg} id="imgicon"></img>
          </div>
          <div id="div7">
            <input
              value={mail}
              id="kolp"
              onChange={mailFunction}
              className="urDiv"
              placeholder="Your Email"
            />
            <input
              value={name}
              onChange={nameFunction}
              className="urDiv"
              type="text"
              placeholder="Your Name"
            />
            <input
              value={subject}
              onChange={subjectFunction}
              className="urDiv"
              placeholder="Subject"
            />
            <textarea
              value={message}
              onChange={messageFunction}
              id="textw"
              className="urDiv"
              placeholder="Message"
            />
            <button
              id="btnj"
              onClick={() => handleClick(mail)}
              className="urDiv"
            >
              Send
            </button>
          </div>
        </div>
        <div id="tt">
          <h1 id="pol">Javeria Ahmed</h1>
          <div id="tw01">
            <h4 className="rtyu">
              <NavLink style={activeState} to={"/"}>
                About
              </NavLink>
            </h4>
            <h4 className="rtyu">
              <NavLink style={activeState} to={"/skills"}>
                Skills
              </NavLink>
            </h4>
            <h4 className="rtyu">
              <NavLink style={activeState} to={"/projects"}>
                Projects
              </NavLink>
            </h4>
            <h4 className="rtyu">
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
