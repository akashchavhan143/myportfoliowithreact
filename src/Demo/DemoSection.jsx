import React from "react";
import "./DemoSection.css";

const DemoSection = () => {
  return (
    <section className="demo-section">
      <div className="demo-content">
        <h2>Learn with Real Projects</h2>
        <p>
          Hands-on experience with real-world full-stack projects,
          <br /> covering frontend, backend, and deployment.
        </p>
      </div>

      <div className="demo-bg">
      
      </div>  <div className="demo-image">
          <img src="/sqImage.png" alt="Demo" />
        </div>
    </section>
  );
};

export default DemoSection;
