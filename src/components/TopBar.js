import React from "react";
import "../css-files/top_bar.css";

export const TopBar = () => {
  return (
    <>
      <div className="top_bar">
        <div className="top_bar_p">
          For the best experience use <b>inshorts </b>app on your smartphone
        </div>
        <div className="top_bar_img">
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="apple_store"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="Play Store"
          />
        </div>
      </div>
    </>
  );
};
