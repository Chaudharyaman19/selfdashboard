import { useState } from "react";
import "./dashboard.css";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  const [show, setShow] = useState(false);
  return (
    <div className="dashboard-container">
      <div className={show ? "sidebar expanded" : "sidebar"}>
        <ul>
          <li>
            <Link to="/">
              <i
                className="fa fa-bars"
                onClick={() => setShow((prev) => !prev)}
              ></i>
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <i className="fa fa-table"></i>
              <span className="menu-text">Tables</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-credit-card"></i>
              <span className="menu-text">Billing</span>
            </Link>
          </li>
          <li>
            <Link to="/billing">
              <i className="fa fa-cube"></i>
              <span className="menu-text">Virtual Reality</span>
            </Link>
          </li>
          <li>
            <Link to="/rlt">
              <i className="fa fa-align-right"></i>
              <span className="menu-text">RTL</span>
            </Link>
          </li>
          <li className="account-section">
            <Link to="/billing">
              <i className="fa fa-user"></i>
              <span className="menu-text">Account</span>
            </Link>
          </li>
          <li className="help-section">
            <Link to="/about">
              <i className="fa fa-question-circle"></i>
              <span className="menu-text">Need help?</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <i className="fa fa-book"></i>
              <span className="menu-text">Documentation</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-star"></i>
              <span className="menu-text">Upgrade to Pro</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">{<Outlet />}</div>
    </div>
  );
}

export default Dashboard;
