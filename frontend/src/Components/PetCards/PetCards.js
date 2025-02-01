import React, { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/pet");
        setEvents(response.data);
      } catch (err) {
        setError("Failed to fetch pet data.", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <p>Loading pets...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="events">
      {events.map((event, index) => (
        <div
          key={index}
          className="event-card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            maxWidth: "300px",
          }}
        >
          <img
            src={
              event.avatar
                ? event.avatar // ✅ Use Cloudinary URL directly
                : "https://via.placeholder.com/300"
            }
            alt={event.petName}
            style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
          />

          <h3>{event.animal}</h3>
          <p className="nameage">
            <strong>Name:</strong> {event.petName}
            <br />
            <strong>Age:</strong> {event.age} years
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
