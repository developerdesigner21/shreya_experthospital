import Banner from "../image/poster1.png";
import Banner1 from "../image/poster2.png";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  return (
    <header id="header">
      {/* <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text"></div>
            </div>
          </div>
        </div>
      </div> */}
      <BannerSection />
    </header>
  );
};
const BannerSection = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="Banner_Wrapper">
        <Carousel infiniteLoop showThumbs={false} autoPlay>
          <div className="banner_one">
            <img src={Banner} alt="banner" />.
            <button type="button" class="btn btn-custom banner_one_button" onClick={()=>{navigate('/pathology')}}>know More?</button>
          </div>

          <div className="banner_two">
            <img src={Banner1} alt="banner" />
            <button type="button" class="btn btn-custom banner_two_button" onClick={()=>{navigate('/ophthalmology')}}>know More?</button>
          </div>
        </Carousel>
      </div>
    </>
  );
};
