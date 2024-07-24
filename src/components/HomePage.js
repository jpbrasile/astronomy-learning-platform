import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage({ data }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>{data.title}</h1>
        <nav>
          {data.navigation.map((navItem, index) => (
            <Link key={index} to={navItem.link}>{navItem.label}</Link>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default HomePage;
