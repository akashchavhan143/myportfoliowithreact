import React from "react";
import "../styles/Event.css";

const eventData = [
  {
    image: "/events/event1.jpg",
    title: "Tech Talk 2024",
    description: "A seminar on modern web technologies.",
  },
  {
    image: "/events/event2.jpg",
    title: "Hackathon Night",
    description: "An overnight coding battle among teams.",
  },
  {
    image: "/events/event3.jpg",
    title: "Workshop: Spring Boot",
    description: "Hands-on training on building REST APIs.",
  },
  {
    image: "/events/event4.jpg",
    title: "AI in Action",
    description: "A talk on the future of Artificial Intelligence.",
  },
];

const Event = () => {
  return (
    <section className="event-section" id="events">
   <div className="about-header">
          <h2>
           My <span className="highlight">Events</span>
          </h2>
          <div className="divider"></div>
        </div>
      <div className="event-slider">
        <div className="event-track">
          {[...eventData, ...eventData].map((event, index) => (
            <div className="event-card" key={index}>
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg";
                }}
              />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
