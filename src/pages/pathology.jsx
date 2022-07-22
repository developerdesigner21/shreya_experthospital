import { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import Price1 from "../image/price1.png";
import Price2 from "../image/price2.png";
import Price3 from "../image/price3.png";
import Price4 from "../image/price4.png";
import Price5 from "../image/price5.png";
import Price6 from "../image/price6.png";
import Price7 from "../image/price7.png";
import Price8 from "../image/price8.png";
import Price9 from "../image/price9.png";
import Price10 from "../image/price10.png";
import Price11 from "../image/price11.png";
import grid1 from "../image/grid1.JPG";
import grid2 from "../image/grid2.jpg";
import grid3 from "../image/grid3.png";
import grid4 from "../image/grid4.jpg";
import Pathback from "../image/pathback2.png";
import { Carousel } from "react-responsive-carousel";
import Testback from "../image/testback1.png";
import JsonData from "../data/data.json";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Pathology = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <div>
        <Navigation />
        <div>
          <img src={Pathback} style={{ width: "100%", marginTop: "6%" }} />
        </div>
        <div className="container-fluid" style={{ display: "table" }}>
          <div className=" section-title" style={{ marginTop: "10px" }}>
            <div>
              <h2>Our Health Packages</h2>
            </div>
          </div>
          <div>
            <div
              class="container"
              style={{
                display: "flex",
                // textAlign: "center",
                letterSpacing: "2px",
                marginTop: "-50px",
              }}
            >
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  // backgroundImage:`url(${Testback})`
                  // height:"390px"
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    BASIC HEALTH CHECKUP
                  </h5>
                  {/* <div style={{marginTop:"-14px",marginLeft:"35%"}}>
                    <img
                    src={Price1}
                    style={{
                      height: "230px",
                      width: "200px",
                      marginTop: "-85px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                  <span style={{backgroundColor:"#005da9",color:"white",padding:"7px"}}>
                  <i class="fa fa-rupee">700/-</i>
                  </span>
                  </div> */}
                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC Indices</li>
                    <li>Blood Group</li>
                    <li>FBS</li>
                    <li>Lipid Profile</li>

                    <li>Urine R/M</li>
                    <li>S.G.P.T</li>
                    <li>S. Creatinine</li>
                  </ul>
                  <div>
                    <img
                      src={Price1}
                      style={{
                        height: "200px",
                        width: "350px",
                        marginTop: "25%",
                        float: "right",
                        marginRight: "-55px",
                        marginBottom: "-2%",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  // height:"390px"
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    Health Checkup-A
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBCMP</li>

                    <li>Lipid Profile</li>
                    <li>Kidney Profile</li>
                    <li>Liver Profile</li>
                    <li>Urine R/M</li>
                    <li>Iron</li>
                    <li>Calcium</li>
                    <li>Vitamin B12</li>
                    <li>TSH</li>
                    <li>RBS</li>
                  </ul>
                  <img
                    src={Price2}
                    style={{
                      height: "200px",
                      width: "350px",
                      // marginTop: "%",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    Health Checkup-B
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBCMP</li>

                    <li>Lipid Profile</li>
                    <li>Kidney Profile</li>
                    <li>Liver Profile</li>
                    <li>Urine R/M</li>
                    <li>Iron</li>
                    <li>Calcium</li>
                    <li>Vitamin B12</li>
                    <li>Vitamin D3</li>
                    <li>TSH,T3,T4</li>
                    <li>RBS</li>
                  </ul>
                  <img
                    src={Price3}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "-20px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    HEALTH CHECKUP-C
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBCMP</li>

                    <li>Lipid Profile</li>
                    <li>Kidney Profile</li>
                    <li>Liver Profile</li>
                    <li>Urine R/M</li>
                    <li>Iron</li>
                    <li>Calcium</li>
                    <li>Vitamin B12</li>
                    <li>Vitamin D3</li>
                    <li>TSH,T3,T4</li>
                    <li>RBS</li>
                    <li>HIV/HBsAg</li>
                  </ul>
                  <img
                    src={Price4}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "-35px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="container" style={{ display: "flex" }}>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    FEVER PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC</li>
                    <li>MP</li>
                    <li>SGPT</li>
                    <li>Billirubin</li>
                    <li>Widal</li>
                    <li>Urine R/M</li>
                  </ul>
                  <img
                    src={Price5}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "80px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    DIABETIC PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBCMP</li>
                    <li>Urine R/M</li>
                    <li>Creat</li>

                    <li>Liver Profile</li>
                    <li>Urine R/M</li>
                    <li>Urine for Micro ALB</li>
                    <li>FBS</li>
                    <li>PPBS</li>

                    <li>HBA1C</li>

                    <li>Lipid Profile</li>
                    <li>S.Electrolytes</li>
                    <li>Urea</li>
                  </ul>
                  <img
                    src={Price6}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "-40px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    ARTHRITIS PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>R.A. Test</li>
                    <li>S.Phosphorus</li>
                    <li>Uric Acid</li>
                    <li>CRP</li>
                    <li>CBC</li>
                    <li>Liver Profile</li>
                    <li>ESR</li>
                    <li>RBS</li>
                    <li>Calcium</li>
                  </ul>
                  <img
                    src={Price7}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "15px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    HAIR/SKIN PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC</li>
                    <li>T3T4TSH</li>
                    <li>FBS</li>
                    <li>Feritinine</li>
                    <li>Vitamin B12</li>
                    <li>Vitamin D3</li>
                    <li>Lipid Profile</li>
                    <li>Iron</li>
                    <li>Calcium</li>

                    <li>SGPT</li>
                  </ul>
                  <img
                    src={Price8}
                    style={{
                      height: "200px",
                      width: "350px",
                      // marginTop: "-85px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="container" style={{ display: "flex" }}>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    ANAEMIA PROFILE-1
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC With Indices, ESR</li>
                    <li>Ferritin</li>

                    <li>Iron</li>

                    <li>Vitamin B12</li>
                    <li>TIBC</li>
                  </ul>
                  <img
                    src={Price9}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "80%",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    ANAEMIA PROFILE-2
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC With Indices, ESR</li>
                    <li>Retic Count</li>
                    <li>S.Creatinine</li>
                    <li>SGPT</li>
                    <li>Ferritin</li>
                    <li>Vitamin B12</li>
                    <li>LDH</li>
                    <li>Iron</li>
                    <li>TIBC</li>
                    <li>Stool R/M</li>
                    <li>Bilirubin</li>
                  </ul>
                  <img
                    src={Price10}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "32%",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>

              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    CARDIAC PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>CBC</li>
                    <li>Urine R/M</li>
                    <li>Lipid Profile</li>
                    <li>FBS-PPBS</li>
                    <li>C.R.P</li>
                    <li>SGPT, SGOT, CPK Total/ CPKMB</li>
                    <li>Homocysteine</li>
                    <li>Troponin-T</li>
                    <li>Vitamin B12</li>
                    <li>HBA1C</li>
                    <li>Iron</li>
                    <li>NT-Pro-BNP</li>
                  </ul>
                  <img
                    src={Price11}
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "17%",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  />
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: "25rem",
                  border: "1px solid #D3D3D3",
                  // padding: "15px",
                  borderBottomLeftRadius: "55px",
                  borderTopRightRadius: "55px",
                  marginRight: "30px",
                  boxShadow: "5px 10px 18px #D3D3D3",
                  letterSpacing: "2px",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                      color: "white",
                      padding: "15px",
                      marginTop: "-1px",
                      // borderTopLeftRadius: "10px",
                      borderTopRightRadius: "55px",
                    }}
                  >
                    ALLERGY PROFILE
                  </h5>

                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      fontWeight: "600",
                    }}
                  >
                    <li>Allergy Test-Drugs</li>
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.2400/-)
                    </span>
                    <li>Allergy Test-Food Non Veg.</li>
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.1500/-)
                    </span>
                    <li>
                      Allergy Test-Food Veg.
                      <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                        (Rs.2500/-)
                      </span>
                    </li>
                    <li>Allergy Test-Pollens+Contact</li>
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.2000/-)
                    </span>
                    <li>Allergy Test-Food Veg.+Pollens+Contact</li>
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.3000/-)
                    </span>
                    <li>Allergy Test-Food Veg.+Pollens+Contact</li>
                    <span>+Drugs</span>
                    <br />
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.4500/-)
                    </span>
                    <li>Allergy Test-Food Veg.+Non Veg.+Pollens+Contact</li>
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.4000/-)
                    </span>
                    <li>Allergy Test-Food Veg.+Pollens+Contact</li>
                    <span style={{}}>+Drugs+Non Veg</span>
                    <br />
                    <span style={{ marginLeft: "3px", fontWeight: "bolder" }}>
                      (Rs.5000/-)
                    </span>
                    {/* <li>Allergy Test</li> */}
                  </ul>
                  {/* <img
                    src={Price1}
                    style={{
                      height: "230px",
                      width: "350px",
                      marginTop: "-85px",
                      float: "right",
                      marginRight: "-55px",
                    }}
                  /> */}
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className=" section-title">
              <h2>Advance Investigations</h2>
            </div>
            <div
              class="card"
              style={{
                width: "auto",
                border: "1px solid #D3D3D3",
                // padding: "15px",
                borderRadius: "10px",
                marginRight: "30px",
                letterSpacing: "2px",
                marginTop: "-50px",
                boxShadow: "5px 10px 18px #D3D3D3",
                // backgroundImage:`url(${Testback})`
              }}
            >
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                    color: "white",
                    padding: "15px",
                    marginTop: "-1px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  Advance Investigations
                </h5>
                <div style={{ display: "flex", fontSize: "20px" }}>
                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      marginRight: "20%",
                      marginLeft: "20%",
                    }}
                  >
                    <li>Hormonal Assays</li>
                    <li>Prenatal Screening</li>
                    <li>Tumor Markers</li>
                    <li>TORCH</li>
                    <li>Thyroid Antibodies</li>
                    <li>PCT</li>
                    <li>Trop T</li>
                    <li>Trop I</li>
                    <li>PT/INR</li>
                    <li>APTT</li>
                    <li>HbA1C</li>
                    <li>Dengue Elisa</li>
                    <li>Ck-MB</li>
                    <li>NT-pro BNP</li>
                  </ul>
                  <ul
                    class="card-text"
                    style={{ padding: "15px", listStyle: "inside" }}
                  >
                    <li>Cortisol</li>
                    <li>DHEA-S</li>
                    <li>Vitamin B12</li>
                    <li>Vitamin D3</li>
                    <li>Thyroid Function Test</li>

                    <li>
                      Fertility
                      <ul style={{ paddingLeft: "30px", listStyle: "revert" }}>
                        <li>D-Dimer</li>
                        <li>FSH</li>
                        <li>LH</li>
                        <li>B-HCG</li>
                        <li>Estradiol</li>
                      </ul>
                      <ul style={{ paddingLeft: "30px", listStyle: "revert" }}>
                        <li>Progesterone</li>
                        <li>Testosterone</li>
                        <li>PRL</li>
                        <li>Estradiol</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className=" section-title">
              <h2>Our Services</h2>
            </div>
            <div
              class="card"
              style={{
                width: "auto",
                border: "1px solid #D3D3D3",
                // padding: "15px",
                borderRadius: "10px",
                marginRight: "30px",
                letterSpacing: "1.5px",
                marginTop: "-50px",
                boxShadow: "5px 10px 18px #D3D3D3",
              }}
            >
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #005da9 20%, #5ca9fb 100%)",
                    color: "white",
                    padding: "15px",
                    marginTop: "-1px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  Our Services
                </h5>
                <div style={{ display: "flex", fontSize: "20px" }}>
                  <ul
                    class="card-text"
                    style={{
                      padding: "15px",
                      listStyle: "inside",
                      marginRight: "10%",
                      marginLeft: "10%",
                    }}
                  >
                    <li>24*7 Working Lab</li>
                    <li>Advance Technology</li>
                    <li>Well Experienced Technical Staff</li>
                    <li>Errorless Diagnosis</li>
                    <li>Home Visit Facility</li>
                    <li>FNAC, Biospy and Body Fluids</li>
                    <li>Semen Processing for IUI</li>
                  </ul>
                  <ul
                    class="card-text"
                    style={{ padding: "15px", listStyle: "inside" }}
                  >
                    <li>Allergy Panels</li>
                    <li>Health Checkup Plans</li>
                    <li>Haematology & Coagulation</li>
                    <li>Biochemistry & Immunology</li>
                    <li>Microbiology</li>
                    <li>Hormonal Assay</li>
                    <li>Semen Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div
          className="OurSpecialities_Wraapper"
          // data-aos="fade-up"
          // data-aos-duration="2000"
          // data-aos-easing="ease-in-back"
        >
          <div className="Title">
            <h2>Our Instruments</h2>
          </div>
          <div className="Specialities_Grid_Content">
            <ul>
              <div className="grid-item1 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid1} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>Modular Operation Theatres</p>
                  </div>
                </li>
              </div>
              <div className="grid-item2 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid4} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>Easten Gujarat's the first Japanese City Scan Machine</p>
                  </div>
                </li>
              </div>
              <div className="grid-item3 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid2} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>lorem ksf sje eod skemdme sjend sle ske</p>
                  </div>
                </li>
              </div>
              <div className="grid-item4 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid2} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>lorem ksf sje eod skemdme sjend sle ske</p>
                  </div>
                </li>
              </div>
              <div className="grid-item5 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid1} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>lorem ksf sje eod skemdme sjend sle ske</p>
                  </div>
                </li>
              </div>
              <div className="grid-item6 grid-item-cmn">
                <li className="grid-hvr">
                  <img src={grid4} alt="image" style={{ height: "230px" }} />
                </li>
                <li>
                  <div className="Grid-Content">
                    <p>lorem ksf sje eod skemdme sjend sle ske</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Contact data={landingPageData.Contact}/>
    </>
  );
};
