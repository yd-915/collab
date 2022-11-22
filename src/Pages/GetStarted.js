import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import Title from "../Assets/images/imti.png";
import GetStartedImg from "../Assets/images/BEGIN.png";
import Stars from "../Components/Stars/Stars";


function GetStarted() {
  const history = useHistory();

  const homeHandler = () => {
    history.push("/homepage");
  };

  return (
    <div
      style={{
        height: "100vh",
        boxSizing: "border-box",
        document.body.style.backgroundImage: url("../Assets/images/shadow.png"),
      }}
    >
      <Stars color="#fff" />
  
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: "30vh" }}
      >
        <img
          src={Title}
          style={{ width: "40%", minWidth: "300px" }}
          alt="Code-N-Collab"
        />

       
          <img
          onClick={homeHandler}
            src={GetStartedImg}
            style={{ width: "200px", alignSelf: "center", height: "40px" }}
            alt="GetStarted"
          />
      
      </Grid>
    </div>
  );
}

export default GetStarted;
