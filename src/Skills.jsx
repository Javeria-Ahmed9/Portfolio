import reactImg from "./Images/react.png";
import htmlImg from "./Images/html.png";
import cssImg from "./Images/css.png";
import jSImg from "./Images/javascript.png";
import tsImg from "./Images/ts.png";
import BsImg from "./Images/bootS.jpeg";
import gitImg from "./Images/git.png";
import githubImg from "./Images/github.jpeg";
import verselImg from "./Images/versel.png";
import DOMimg from "./Images/dom.png";
import VSImg from "./Images/vs.jpeg";

export function Skills() {
  return (
    <div id="main3">
      <div id="heading">
        <h1 id="sid7">Skills</h1>
        <h2 id="tyu">
          Here are some of my skills on which I have been working on for the
          past 1 year.
        </h2>
      </div>

      <div id="container">
        <div id="skills">
          <h1 className="head">Frontend</h1>
          <div id="myid">
            <div id="mainContent">
              <div
                id="pic"
                style={{ backgroundImage: `url(${reactImg})` }}
              ></div>
              <h4 id="content">React</h4>
            </div>

            <div id="mainContent">
              <div id="pic" style={{ backgroundImage: `url(${jSImg})` }}></div>
              <h4 id="content">JavaScript</h4>
            </div>
            <div id="mainContent">
              <div
                id="pic"
                style={{ backgroundImage: `url(${htmlImg})` }}
              ></div>
              <h4 id="content">HTML</h4>
            </div>
            <div id="mainContent">
              <div id="pic" style={{ backgroundImage: `url(${cssImg})` }}></div>
              <h4 id="content">CSS</h4>
            </div>
            <div id="mainContent">
              <div
                id="pic"
                style={{
                  backgroundImage: `url(${tsImg})`,
                }}
              ></div>
              <h4 id="content">TypeScript</h4>
            </div>
            <div id="mainContent">
              <div id="pic" style={{ backgroundImage: `url(${BsImg})` }}></div>
              <h4 id="content">BootStrap</h4>
            </div>
          </div>
        </div>
        <div id="other0">
          <h1 className="head">Others</h1>
          <div id="myid">
            <div id="mainContent">
              <div id="pic" style={{ backgroundImage: `url(${gitImg})` }}></div>
              <h4 id="content">Git</h4>
            </div>

            <div id="mainContent">
              <div
                id="pic"
                style={{ backgroundImage: `url(${githubImg})` }}
              ></div>
              <h4 id="content">Github</h4>
            </div>
            <div id="mainContent">
              <div id="pic" style={{ backgroundImage: `url(${VSImg})` }}></div>
              <h4 id="content">VS Code</h4>
            </div>
            <div id="mainContent">
              <div
                id="pic"
                style={{ backgroundImage: `url(${verselImg})` }}
              ></div>
              <h4 id="content">Versel</h4>
            </div>
            <div id="mainContent" style={{ marginLeft: "67px" }}>
              <div id="pic" style={{ backgroundImage: `url(${DOMimg})` }}></div>
              <h4 id="content">DOM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
