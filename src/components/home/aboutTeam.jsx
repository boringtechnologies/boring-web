import React from "react";
import "../../styles/home.styles.scss";

function AboutTeam() {
  return (
    <div className="section team">
      <h1>
        Meet the 'Futurists' - the team that codes the future, one line at a
        time!
      </h1>
      <div className="member">
        <div className="part-one">
          <div className="pic"></div>
          <div className="content">
            <h3>
              Introducing Lola, the web developer who's not afraid to think
              outside the box!
            </h3>
            <p className="big">WEB DEVELOPER</p>
          </div>
        </div>
        <p className="part-two">
          She's not just a fullstack developer, she's a true artist. With a keen
          eye for design and a knack for illustration, Lola can make your
          website not just functional, but beautiful. Whether you need a simple
          brochure website or a complex web application, Lola can bring your
          vision to life. Lola will not only build you a website that works, but
          also one that will be a work of art. With her unique combination of
          technical skills and creative flair, she's the perfect choice for all
          your web development needs.
        </p>
      </div>
      <div className="member">
        <div className="part-one">
          <div className="content reverse">
            <h3>
              Ladies and gentlemen, allow me to introduce you to Samuel - the
              rocket scientist of the software development world!
            </h3>
            <p className="big">SOFTWARE DEVELOPER</p>
          </div>
          <div className="pic reverse"></div>
        </div>
        <p className="part-two">
          With a degree in physics and aerospace engineering, he's not just a
          whiz at coding, he's a master of the universe. Samuel's superpower?
          Making backend development and audio and video processing look like
          child's play. Need a backend developer who can make your website blast
          off? Look no further, Samuel's got you covered. With his skills, he's
          the perfect candidate to take your business to new heights.
        </p>
      </div>
    </div>
  );
}

export default AboutTeam;
