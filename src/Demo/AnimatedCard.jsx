import React from 'react';
import './AnimatedCard.css'; // Make sure this path is correct

const AnimatedCard = () => {
  return (
    <div className="container-animated">
      <div className="card" style={{ "--color": "#ef476f" }}>
        <i className="fa-solid fa-code"></i>
        <div className="title">Web Development</div>
        <div className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolore amet pariatur
          delectus dolores? Blanditiis ullam explicabo odit dicta quaerat!
        </div>
      </div>

      <div className="card" style={{ "--color": "#ffd23f" }}>
        <i className="fa-solid fa-robot"></i>
        <div className="title">Artificial Intelligence</div>
        <div className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolore amet pariatur
          delectus dolores? Blanditiis ullam explicabo odit dicta quaerat!
        </div>
      </div>

      <div className="card" style={{ "--color": "#00a6ed" }}>
        <i className="fa-brands fa-figma"></i>
        <div className="title">Web Design</div>
        <div className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolore amet pariatur
          delectus dolores? Blanditiis ullam explicabo odit dicta quaerat!
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
