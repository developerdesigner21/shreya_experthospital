import { useState } from "react";
import { Navigation } from "../components/navigation";

export const GalleryTab = (props) => {
    return (
    <>
      <div>
      <Navigation />
      <div className="container">
        <div className=" section-title" style={{ marginTop: "10%" }}>
          <h2>Gallery</h2>
        </div>
        </div>
      </div>
      </>
    );
  };