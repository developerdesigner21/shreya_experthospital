import { useState } from "react";
import { Navigation } from "../components/navigation";
import grid1 from "../image/grid1.JPG";

export const GalleryTab = (props) => {
  return (
    <>
      <div>
        <Navigation />
        <div className="container gallery_section">
          <div className="section-title gallery_title">
            <h2>Gallery</h2>
          </div>
          <div class="row image_grid">
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 image_main">
              <img src={grid1}></img>
              <div className="image_title">
                <span>data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
