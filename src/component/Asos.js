import React from "react";
import Ras1 from "../AI/images/rasm.svg";
import Ras2 from "../AI/images/Slide 1.svg";
import Ras3 from "../AI/images/Slide 2.png";
import Ras4 from "../AI/images/Slide 3.png";
import Ras5 from "../AI/images/Slide 4.png";

export const Asos = () => {
  return (
    <div className="Asos">
      <div className="asos_wrapper">
        <div>
          <img className="asos_rasm" src={Ras1} />
        </div>
        <div className="asos_learn">
          <h3> Apply Ai deep Learning and Data Sciense to solve</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="asos_card">
        <div className="card1">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              marginTop: "30px",
            }}
            src={Ras2}
          />
          <h3>Naxly as the Winners in Global Agency Wards</h3>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?{" "}
          </p>
        </div>
        <div className="card1">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              marginTop: "30px",
            }}
            src={Ras3}
          />
          <h3>Naxly as the Winners in Global Agency Wards</h3>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?{" "}
          </p>
        </div> <div className="card1">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              marginTop: "30px",
            }}
            src={Ras4}
          />
          <h3>Naxly as the Winners in Global Agency Wards</h3>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?{" "}
          </p>
        </div> <div className="card1">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              marginTop: "30px",
            }}
            src={Ras5}
          />
          <h3>Naxly as the Winners in Global Agency Wards</h3>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?{" "}
          </p>
        </div>
        <div className="card1">
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              marginTop: "30px",
            }}
            src={Ras2}
          />
          <h3>Naxly as the Winners in Global Agency Wards</h3>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, non blanditiis autem id dolore illum exercitationem
            deserunt commodi officia aperiam?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
