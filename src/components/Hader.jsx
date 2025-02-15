import "./hader.css";

function Hader() {
  return (
    <>
      <div className="header">
        <button className="online-builder-btn">Add Friends</button>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Type here..."
            className="search-bar"
          />
          <button className="online-builder-btn">Online Builder</button>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
      <div className="dashboard">
        {/* Header Section */}

        {/* Dashboard Title */}
        <h1 className="dashboard-title padding">Dashboard</h1>

        {/* Flex Container for Dashboard Metrics and Reviews */}
        <div className="flex-container">
          {/* Dashboard Metrics Section */}
          <div className="metrics">
            <div className="metric-card active-users">
              <div className="metric-value">1600</div>
              <div className="metric-label">Users Active</div>
              <div className="metric-change">+55%</div>
            </div>
            <div className="metric-card click-events">
              <div className="metric-value">357</div>
              <div className="metric-label">Click Events</div>
              <div className="metric-change">+124%</div>
            </div>
            <div className="metric-card purchases">
              <div className="metric-value">2300</div>
              <div className="metric-label">Purchases</div>
              <div className="metric-change">+15%</div>
            </div>
            <div className="metric-card likes">
              <div className="metric-value">940</div>
              <div className="metric-label">Likes</div>
              <div className="metric-change">+90%</div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews">
            <h2 className="reviews-title">Reviews</h2>
            <div className="review-stats">
              <div className="review-progress positive">
                <span>Positive Reviews</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span>80%</span>
              </div>
              <div className="review-progress neutral">
                <span>Neutral Reviews</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "17%" }}></div>
                </div>
                <span>17%</span>
              </div>
              <div className="review-progress negative">
                <span>Negative Reviews</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "3%" }}></div>
                </div>
                <span>3%</span>
              </div>
            </div>
            <p className="reviews-description">
              More than <strong>1,500,000</strong> developers used Creative
              Tim’s products and over <strong>700,000</strong> projects were
              created.
            </p>
            <button className="view-reviews-btn">View all reviews</button>
          </div>
        </div>
      </div>
      <div className="leads-overview-container">
        <div className="leads-overview">
          <h1>Leads Overview</h1>
          <div className="leads-years">
            <span>1950</span>
            <span>1960</span>
            <span>1980</span>
            <span>1990</span>
            <span>2000</span>
          </div>
          <div className="chart-info">
            <span>0.2</span>
            <p>JS chart by amCharts</p>
          </div>
          <button className="show-all-button">Show all</button>
          <div className="chart-scale">
            <span>0.1</span>
            <span>0.0</span>
            <span>-0.1</span>
            <span>-0.2</span>
            <span>-0.3</span>
          </div>
          <div className="chart-years">
            <span>1972</span>
            <span>1974</span>
            <span>1976</span>
            <span>1978</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hader;
