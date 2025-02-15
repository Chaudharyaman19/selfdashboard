import "./about.css";
function About() {
  return (
    <>
      {" "}
      <div className="about-dashboard-container">
        <div className="about-section">
          <h1>About Our Dashboard</h1>
          <p>
            Our dashboard is designed to provide you with the most comprehensive
            and intuitive interface for managing your data. Whether you're
            tracking sales, monitoring user activity, or analyzing trends, our
            tools are here to help you make informed decisions.
          </p>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <h3>Emily Johnson</h3>
              <p>Data Analyst</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses by providing them with the
            tools they need to visualize and understand their data. We believe
            that data-driven decisions lead to better outcomes and a brighter
            future.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need support, please feel free to reach
            out to us. We're here to help!
          </p>
          <div className="contact-info">
            <p>Email: support@dashboard.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
