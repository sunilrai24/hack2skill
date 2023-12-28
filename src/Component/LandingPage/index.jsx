import React, { useState } from "react";
import userData from "../../data/users.json";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = userData.users.some(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    if (userExists) {
      navigate(`/dashboard?name=${name}`);
    } else {
      setError("User not found. Please check your name.");
    }
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Search Name</h1>
      <div class="card" style={{ maxWidth: "400px", margin: "20px auto" }}>
        <div class="card-body">
          <nav class="navbar bg-body-tertiary justify-content-center">
            <div class="container-fluid justify-content-center">
              <form
                class="d-flex"
                role="search"
                action=""
                onSubmit={handleSubmit}
              >
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Enter your name"
                  aria-label="Search"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
