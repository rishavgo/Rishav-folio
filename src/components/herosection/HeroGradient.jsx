import React from "react";

const HeroGradient = () => {
  return (
    <>
      {/* Cyan Glow - Flowing Above Navbar */}
      <div
        className="absolute -top-20 left-[-100px] -z-10 animate-pulse"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(0, 255, 255, 0.15)",
          filter: "blur(180px)",
        }}
      ></div>

      {/* Orange Glow - Smoothly to the Left of Text */}
      <div
        className="absolute top-32 left-[-300px] -z-10 animate-pulse"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(255, 165, 0, 0.15)",
          filter: "blur(180px)",
        }}
      ></div>
    </>
  );
};

export default HeroGradient;
