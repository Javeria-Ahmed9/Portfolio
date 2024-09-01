import { Contact } from "./Contact";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Intro() {
  return (
    <div>
      <div id="divContainer">
        <div id="intro">
          <div className="name">
            <h1>Hi, I am </h1>
            <h1>Javeria Ahmed</h1>
          </div>
          <h2 id="profession">
            I am a Programmer <span id="j">| React | TypeScript</span>
          </h2>
          <h4 id="detailintro">
            I am a motivated individual, always eager to take on new challenges.
            With a passion for learning I am dedicated to delivering
            high-quality results. With a positive attitude and a growth mindset,
            I am ready to make a meaningful contribution and achieve great
            things..
          </h4>
          <button id="resume">
            <a
              id="CVlink"
              href="https://drive.google.com/file/d/14xr3m58MRW6M5j_Ztd9ghAsrNjRKsGvY/view?usp=sharing"
              target="-main"
            >
              Check Resume
            </a>
          </button>
        </div>
        <div id="picture"></div>
      </div>
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
