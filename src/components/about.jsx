import AboutUs from "../image/aboutus1.jpg";

export const About = props => {
  return (
    <div id="about">
      <div className="container">
        {/* <img src="./image/background.png" /> */}
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-duration="1500"
          >
            {" "} 
            <img src={AboutUs} className="img-responsive" alt="" />{" "}
             
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-back"
              >
                About Us
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-back"
              >
                Expert hospital include State-of-The-Art operation theatre and
                ultra modern technology for a one stop eye care service. We are
                ready to provide consultations and medical surgical care for
                complex ophthalmic problems to give the best to our patients.
                Eye services are comprehensive and affordable and include
                Cataract Surgery, Glaucoma evaluation and treatment, LASIK for
                removal of spectacle number, Retinal evaluation and treatment
                both medical and surgical, Squint / Strabismus / Lazy eyes
                repair and Surgery and management of chronic corneal diseases
                and various occuloplasty procedures along with contact lens and
                low vision clinic.
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="2200"
                data-aos-easing="ease-in-back"
              >
                Why Choose Us?
              </h3>
              <div
                className="list-style"
                data-aos="fade-up"
                data-aos-duration="2300"
                data-aos-easing="ease-in-back"
              >
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
