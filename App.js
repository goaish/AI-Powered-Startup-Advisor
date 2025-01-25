import React, { useState } from "react";
import "./styles.css";

function App() {
  const [businessIdea, setBusinessIdea] = useState("");
  const [feedback, setFeedback] = useState("");
  const [fundingSources, setFundingSources] = useState([]);
  const [pitchTemplate, setPitchTemplate] = useState("");

  const evaluateBusinessIdea = () => {
    // Here you can implement AI logic for feedback and suggestions
    setFeedback(
      "Your business idea is promising, but you need to focus on the target audience."
    );
    setFundingSources(["Angel Investors", "Venture Capital", "Crowdfunding"]);
    setPitchTemplate(
      "1. Problem Statement\n2. Solution\n3. Market Size\n4. Revenue Model\n5. Competitive Advantage"
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>AI-Powered Startup Advisor</h1>
        <p>
          Get feedback, funding sources, and pitch templates for your business
          idea.
        </p>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
          <li>
            <a href="#funding">Funding Sources</a>
          </li>
          <li>
            <a href="#pitch">Pitch Template</a>
          </li>
        </ul>
      </nav>

      <section className="hero-section">
        <h2>Evaluate Your Business Idea</h2>
        <textarea
          value={businessIdea}
          onChange={(e) => setBusinessIdea(e.target.value)}
          placeholder="Describe your business idea..."
        />
        <button onClick={evaluateBusinessIdea}>Evaluate Idea</button>
      </section>

      <section className="dashboard-section">
        <h3>User Profile</h3>
        <p>Welcome, Aishwarya. Here's a quick overview of your activity.</p>
      </section>

      <section className="dashboard-section">
        <h3>Recent Activity</h3>
        <p>Last evaluated idea: "Eco-friendly packaging solutions"</p>
      </section>

      <section className="dashboard-section">
        <h3>Analytics</h3>
        <p>Feedback: Positive | Funding: Angel Investors | Pitch: Ready</p>
      </section>

      <section id="feedback" className="feature-card">
        <h2>Feedback on Business Idea:</h2>
        <p>{feedback}</p>
      </section>

      <section id="funding" className="feature-card">
        <h2>Suggested Funding Sources:</h2>
        <ul>
          {fundingSources.map((source, index) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      </section>

      <section id="pitch" className="feature-card">
        <h2>Investor Pitch Template:</h2>
        <pre>{pitchTemplate}</pre>
      </section>

      <footer className="footer">
        <p>&copy; 2025 AI-Powered Startup Advisor. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
