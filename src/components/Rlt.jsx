import "./rlt.css";

function Rlt() {
  return (
    <>
      <div className="vr-container">
        <h1>Virtual Reality Experience</h1>

        <div className="vr-intro">
          <p>
            Step into a new dimension with our cutting-edge virtual reality
            technology. Explore immersive environments, interact with 3D
            objects, and experience the future of digital interaction.
          </p>
        </div>

        <div className="vr-features">
          <div className="feature-card">
            <h3>Immersive Environments</h3>
            <p>Explore realistic 3D worlds that feel like real life.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Objects</h3>
            <p>
              Interact with objects in a way that feels natural and intuitive.
            </p>
          </div>
          <div className="feature-card">
            <h3>Multiplayer Support</h3>
            <p>Connect with friends and explore together in real-time.</p>
          </div>
        </div>

        <div className="vr-demo">
          <h2>Try It Now</h2>
          <div className="demo-video">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="VR Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rlt;
