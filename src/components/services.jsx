export const Services = props => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
        >
          <h2>Our Services</h2>
          <p>Ophthalmology Specialities</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img src={d.img}></img>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="section-title">
          <p>Pathology Specialities</p>
        </div>
      </div>
    </div>
  );
};
