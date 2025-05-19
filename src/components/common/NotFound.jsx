import React from "react";
import "./Loader.css";

import opsImage from "../../assets/ops.png";
import { useNavigate } from "react-router";

function NotFound() {
    const navigate= useNavigate();
  return (
    <div className="notfound">
      <img src={opsImage} alt="Not Found" height="200px" width={"200px"} />
      <h3>Somthing's wrong here...</h3>
      <p>
        We cant find the page you're looking for. Checkout our help center or
        move back to previous page
      </p>
      <div className="twobtn">
        <button className="helpbtn">Help</button>
        <button onClick={()=>{navigate(-1)}} className="homebtn">Go Back</button>
      </div>
    </div>
  );
}

export default NotFound;
