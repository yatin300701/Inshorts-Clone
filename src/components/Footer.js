import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import React from "react";
import "../css-files/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container_footer">
          <div className="footer_parts_1">
            <div className="footer_parts_para">
              <img
                src="https://play-lh.googleusercontent.com/hd-zjb0kvaVWufm0SEsant8zt0-HS_0tUMv79m2onY_wpkdrAArYV8oZ0vQPiMolpPIa"
                alt={"Logo"}
              />
              <span className={"dark_name"}>Inshorts</span>
            </div>
            <span>Inshorts</span> Ltd
            <div className="footer_parts_para">&copy; 2022</div>
          </div>
          <div className="footer_parts_2">
            <BsFacebook />
            <AiOutlineTwitter />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
