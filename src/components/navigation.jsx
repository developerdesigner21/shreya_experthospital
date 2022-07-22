import LOGO from "../image/logo.png";
import { useNavigate } from "react-router-dom";

export const Navigation = props => {
  const navigate = useNavigate()
  const ContactBtn = () => {
    <a href="#contact"></a>
  }

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll link_logo"
            href="/"
            // style={{ marginTop: "-39px", marginLeft: "-70px" }}
          >
            <img className="main_logo" src={LOGO} alt="img" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#features" className="page-scroll">
                Featues
              </a>
            </li>
            <li className="Service_Drop_Wrapper">
              <a className="page-scroll">
                Services
              </a>
              <ul className="Service_dropDown">
                <li>
                  <a onClick={()=>{navigate('/pathology')}}>Pathology</a>
                </li>
                <li>
                  <a onClick={()=>{navigate('/ophthalmology')}}>Ophthalmology</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={()=>{navigate('/gallery')}} className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="/#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/#team" className="page-scroll">
                Team
              </a>
            </li>
            <li className="contact_wrp">
              <a
                href="/#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
