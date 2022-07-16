import React from "react";
import grid1 from "../image/grid1.JPG";
import grid2 from "../image/grid2.jpg";
import grid3 from "../image/grid3.png";
import grid4 from "../image/grid4.jpg";

export const Specialities = () => {
  return (
    <>
      <div
        className="OurSpecialities_Wraapper"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
      >
        <div className="Title">
          <h2>Our Specialities</h2>
        </div>
        <div className="Specialities_Grid_Content">
          <ul>
            <div className="grid-item1 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid1} alt="image" style={{height:"230px"}}/>
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>Modular Operation Theatres</p>
                </div>
              </li>
            </div>
            <div className="grid-item2 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid4} alt="image" style={{height:"230px"}} />
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>Easten Gujarat's the first Japanese City Scan Machine</p>
                </div>
              </li>
            </div>
            <div className="grid-item3 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid2} alt="image" style={{height:"230px"}}/>
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>lorem ksf sje eod skemdme sjend sle ske</p>
                </div>
              </li>
            </div>
            <div className="grid-item4 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid2} alt="image" style={{height:"230px"}}/>
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>lorem ksf sje eod skemdme sjend sle ske</p>
                </div>
              </li>
            </div>
            <div className="grid-item5 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid1} alt="image" style={{height:"230px"}}/>
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>lorem ksf sje eod skemdme sjend sle ske</p>
                </div>
              </li>
            </div>
            <div className="grid-item6 grid-item-cmn">
              <li className="grid-hvr">
                <img src={grid4} alt="image" style={{height:"230px"}}/>
              </li>
              <li>
                <div className="Grid-Content" style={{fontWeight:"bold"}}>
                  <p>lorem ksf sje eod skemdme sjend sle ske</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div
        className="Hostpital_Wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        style={{marginTop:"-50px"}}
      >
        <div className="Hospital_Content">
          <ul style={{marginBottom:"20px",marginTop:"-66px"}}>
            <li>
              <span>
                <i class="fa fa-ambulance"></i>
              </span>
              <p>Emergency Service</p>
            </li>
           
            <li>
              <span>
                <i class="fa fa-clock-o"></i>
              </span>
              <p>Available 24/7</p>
            </li>
            <li>
              <span>
                <i class="fa fa-ambulance"></i>
              </span>
              <p>Waste Management Data</p>
            </li>
            <li>
              <span>
              <i class="fas fa-certificate"></i>
              </span>
              <p>Licenced &amp; Ensured</p>
            </li>
           
          </ul>
          <div className="SpecialitiesWave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{marginTop:"-60px"}}>
              <path
                fill="#f6f6f6"
                fill-opacity="1"
                d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,213.3C840,203,960,117,1080,96C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
