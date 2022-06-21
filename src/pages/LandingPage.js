import React from "react";
import LandingPageHeader from "../components/LandingPageHeader";
import style from "../styles/modules/app.module.scss";

function LandingPage() {
  return (
    <div className={style.landingPage}>
      <LandingPageHeader />
    </div>
  );
}

export default LandingPage;
