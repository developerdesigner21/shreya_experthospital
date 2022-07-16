import Shruti from "../image/team/shruti.jpg";
import Vibha from "../image/team/vibha.jpg";

export const Team = props => {
  return (
    <div id="team" className="text-center Team_Wrapper">
      <div className="container">
        <div className=" section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="Team_Item" className="" style={{display:"flex",justifyContent:"center"}}>
          
                <div className="team1">
                  <div className="thumbnail" style={{padding:"15px"}}>
                    {" "}
                    <img
                      style={{
                        height: "265px",
                        width: "255px",
                      }}
                      src={Shruti}
                      alt="..."
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>Dr. Shruti Gajera</h4>
                      <p>
                      M.S Ophthalmology (Mumbai)
                        <br />
                        FMR, FMC (SCEH-Delhi)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="team1">
                  <div className="thumbnail" style={{padding:"10px"}}>
                    {" "}
                    <img
                      style={{
                        height: "265px",
                        width: "255px",
                      }}
                      src={Vibha}
                      alt="..."
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>Dr. Vibha Gajera</h4>
                      <p>
                      M.D Pathology (Mumbai)
                        {/* <br />
                        FMR, FMC (SCEH-Delhi) */}
                      </p>
                    </div>
                  </div>
                </div>
            
        </div>
      </div>
    </div>
  );
};
