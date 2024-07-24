import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ data }) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{data.title}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/learn">Start Learning</Link>
        </nav>
      </header>
      <section className="progress-view">
        <h2>Your Progress</h2>
        <p>{data.progress}</p>
      </section>
      <section className="sessions-access">
        <h2>Sessions</h2>
        {data.sessions.map((session, index) => (
          <Link key={index} to={session.link}>{session.label}</Link>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
