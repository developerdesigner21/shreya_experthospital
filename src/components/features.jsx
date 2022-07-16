import img1 from "../image/s1.png";
import img2 from "../image/s2.png";
import img3 from "../image/s3.png";
import img4 from "../image/s4.png";

export const Features = props => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="mt-20 Specialities_Wrapper">
          <div className="section-title">
            <h2>Our Features</h2>
          </div>
          <div className="SpecialitiesGrid">
            <div className="Specialties_Item">
              {" "}
              <div className="Round-shape">
                <img src={img1} alt="img" />
              </div>
              <h3>Complex Eye Surgeries</h3>
            </div>
            <div className="Specialties_Item">
              <div className="Round-shape">
                <img src={img2} />
              </div>
              <h3>Health Checkup Packages</h3>
              {/* <p>demo</p> */}
            </div>
            <div className="Specialties_Item">
              {" "}
              <div className="Round-shape">
                <img src={img3} />
              </div>
              <h3>Newest Technology</h3>
              {/* <p>demo</p> */}
            </div>
            <div className="Specialties_Item">
              {" "}
              <div className="Round-shape">
                <img src={img4} />
              </div>
              <h3>Client Satisfaction</h3>
              {/* <p>demo</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
