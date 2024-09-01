import uocImg from "./Images/uoc.jpeg";
import rcsImg from "./Images/royal.jpeg";
import gghsiMg from "./Images/gghs.png";

export function Education() {
  return (
    <div id="mDiv">
      <div id="InnerDiv">
        <h1 id="hID">Eductaion</h1>
        <h2 id="CnId">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </h2>
      </div>
      <div id="javId">
        <div id="edu1" style={{ alignSelf: "flex-start" }}>
          <div id="mDiv1">
            <img src={uocImg} />
          </div>
          <div id="mI">
            <h2 id="nm">University Of Chakwal</h2>
            <h4 id="gh">Bachelor of Physics (BS-Physics)</h4>
            <h3 id="fg"> July 2020 - Aug 2024</h3>
            <h3 id="fd"> Grade: 3.91/4.00 CGPA</h3>
            <div id="Introd">
              I completed my BS Physics from University Of Chakwal(UOC),
              Chakwal, where I studied Natural Science of Matter.
            </div>
          </div>
        </div>
        <div id="edu2" style={{ alignSelf: "flex-end" }}>
          <div id="mDiv1">
            <img src={rcsImg} />
          </div>
          <div id="mI">
            <h2 id="nm">Royal College Of Sciences Chakwal</h2>
            <h4 id="gh">ICS(XII), Science with Computer</h4>
            <h3 id="fg">2018-2020</h3>
            <h3 id="fd">Grade: 86.69% </h3>
            <div id="Introd">
              I completed my class 12 high school education at RCS, Chakwal,
              where I studied Science with Computer Science.
            </div>
          </div>
        </div>
        <div id="edu3" style={{ alignSelf: "flex-start" }}>
          <div id="mDiv1">
            <img src={gghsiMg} />
          </div>
          <div id="mI">
            <h2 id="nm">GGHS Jabairpur</h2>
            <h4 id="gh">Matric(X), Science with Computer </h4>
            <h3 id="fg">2016-2018</h3>
            <h3 id="fd"> Grade: 87.33% </h3>
            <div id="Introd">
              I completed my class 10 education at GGHS, Jabaipur, where I
              studied Science with Computer Application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
