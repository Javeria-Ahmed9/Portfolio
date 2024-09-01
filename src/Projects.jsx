import weatherImg from "./Images/weather.png";
import todoImg from "./Images/todolist.png";
import stopwatchImg from "./Images/stopwatch.png";
import recordImg from "./Images/record.png";
import digitalwatch from "./Images/digitalwatch.png";
import bmiImg from "./Images/bmi.png";
import tictacImg from "./Images/tictac.png";
import cpImg from "./Images/cp.png";
import calculatorImg from "./Images/calculator.png";
import counterImg from "./Images/counter.png";

export function Projects() {
  return (
    <div id="maindivID">
      <div id="headid">
        <h1 id="sid1">Projects</h1>
        <h2 id="uoh">
          i have worked on a different projects.Here are some of my projects.
        </h2>
      </div>
      <div id="mainDiv1">
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${weatherImg})` }}
          ></div>
          <a href="https://weather-app-five-nu-56.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${todoImg})` }}
          ></div>
          <a href="https://to-do-list-app-virid-phi.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${stopwatchImg})` }}
          ></div>
          <a href="https://stop-watch-app2.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${recordImg})` }}
          ></div>
          <a href="https://record-keeper-app.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${digitalwatch})` }}
          ></div>
          <a href="https://digital-watch-kohl.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div id="project" style={{ backgroundImage: `url(${bmiImg})` }}></div>
          <a href="https://bmi-calculator-nine-wine.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${tictacImg})` }}
          ></div>
          <a href="https://tic-tac-toe-11.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${calculatorImg})` }}
          ></div>
          <a href="https://calculator-app-teal-five.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div id="project" style={{ backgroundImage: `url(${cpImg})` }}></div>
          <a href="https://color-picker-app-seven.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
        <div id="Box">
          <div
            id="project"
            style={{ backgroundImage: `url(${counterImg})` }}
          ></div>
          <a href="https://counter-ivory-omega.vercel.app/" target="-main">
            Click me to test this app
          </a>
        </div>
      </div>
    </div>
  );
}
