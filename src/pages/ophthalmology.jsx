import { useState } from "react";
import emailjs from "emailjs-com";
import { Navigation } from "../components/navigation";
import Cataract from "../image/Cataract.jpg";
import Refrective from "../image/refrective.jpg";
import Cornea from "../image/cornea.jpg";
import Retina from "../image/retina.jpg";
import Glaucoma from "../image/glaucoma.jpg";
import Oculopasty from "../image/oculoplasty.jpg";
import Paediatric from "../image/paediatric.jpg";
import { Contact } from "../components/contact";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Ophthalmology = (props) => {
  const ContactBtn = () => {
    <a href="#"></a>;
  };
  return (
    <>
    <div>
      <div>
        <Navigation />
      </div>
      <div className="container">
        <div className=" section-title" style={{ marginTop: "10%" }}>
          <h2>Ophthalmology Services</h2>
        </div>
        {/* <div id="Team_Item" className="" style={{display:"grid"}}> */}

        <div className="" style={{}}>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  01. Cataract Surgery
                </h4>
                <p style={{ color: "black" }}>
                  Cataract surgery is a procedure to remove the lens of your eye
                  and, in most cases, replace it with an artificial lens.
                  Normally, the lens of your eye is clear. A cataract causes the
                  lens to become cloudy, which eventually affects your vision.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Cataract}
                />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Refrective}
                />
              </div>
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  02. Refractive Surgery
                </h4>
                <p style={{ color: "black" }}>
                  Refractive surgery is a surgical procedure performed to
                  correct the refractive error (spectacle power) of the eye.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  03. Cornea Surgery
                </h4>
                <p style={{ color: "black" }}>
                  A cornea transplant is an operation to remove all or part of a
                  damaged cornea and replace it with healthy donor tissue.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Cornea}
                />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    // marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Retina}
                />
              </div>
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  04. Retina Surgery
                </h4>
                <p style={{ color: "black" }}>
                  Retinal detachment surgery involves reattaching the retina to
                  the back of the eye and sealing any breaks or holes in the
                  retina.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  05. Glaucoma Surgery
                </h4>
                <p style={{ color: "black" }}>
                  The most common type of surgery for glaucoma is called
                  trabeculectomy. It involves removing part of the eye-drainage
                  tubes to allow fluid to drain more easily. Glaucoma surgery
                  may be carried out under local anaesthetic (while you're
                  awake) or general anaesthetic (while you're asleep).
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Glaucoma}
                />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    // marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Paediatric}
                />
              </div>
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  06. Paediatric Ophthalmology
                </h4>
                <p style={{ color: "black" }}>
                  Pediatric ophthalmologists focus on the development of the
                  visual system and the various diseases that disrupt visual
                  development in children. Pediatric ophthalmologists also have
                  expertise in managing the various ocular diseases that affect
                  children.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #f3f3f3",
              // display: "flex",
              marginBottom: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              className="parent_wrap"
              style={{
                display: "grid",
                // marginTop: "-4%",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
                alignItems: "center",
                padding: "1.5rem 1rem",
                gridGap: "1rem",
                // marginTop:"1rem"
              }}
            >
              <div className="" style={{}}>
                <h4
                  style={{
                    color: "#005da9",
                    fontWeight: "bolder",
                    fontSize: "21px",
                    padding: "0 0 0.5rem",
                  }}
                >
                  07. Oculoplasty Surgery
                </h4>
                <p style={{ color: "black" }}>
                  Oculoplastic surgery, includes a wide variety of surgical
                  procedures that deal with the orbit (eye socket), eyelids,
                  tear ducts, and the face. It also deals with the
                  reconstruction of the eye and associated structures.
                  <br />
                  <span
                    onClick={ContactBtn}
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 22px",
                      marginTop: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Read More
                  </span>
                </p>
              </div>
              <div className="" style={{}}>
                <img
                  style={{
                    height: "300px",
                    width: "90%",
                    marginLeft: "40px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={Oculopasty}
                />
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
    <Contact />
    </>
  );
};
