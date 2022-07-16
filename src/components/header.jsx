import Banner from "../image/poster1.png";
import Banner1 from "../image/poster2.png"
import { Carousel } from "react-responsive-carousel";
export const Header = props => {
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
  return (
    <>
      <div className="Banner_Wrapper">
        <Carousel infiniteLoop showThumbs={false} autoPlay>
          <div>
            <img src={Banner} alt="banner" />
          </div>

          <div>
            <img src={Banner1} alt="banner" />
          </div>
        </Carousel>
      </div>
    </>
  );
};
