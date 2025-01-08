import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function HomePage() {
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const message = sessionStorage.getItem("success");
    if (message) {
      setSuccessMessage(message);
      sessionStorage.removeItem("success");
    }
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Idea Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <Link to="/" className="nav-link">All Ideas</Link>
            <Link to="/ideas/create" className="nav-link">New Idea</Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-5">
        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success" id="success-message">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for ideas..."
            // value={}
            // onChange={}
          />
        </div>

        <div>
          <h1>Welcome to Idea Tracker</h1>
          <p>Your ideas are here!</p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
