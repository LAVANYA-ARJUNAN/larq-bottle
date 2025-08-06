import React from 'react';
import { CgArrowRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import NavBar from '../Router/NavBar';
import Footer from '../Router/Footer';
import './Water.css'; // Create and link this CSS file

const Water = () => {
  return (
    <div>
      <NavBar />
      <section className="water-section container">
        <h1>What's in your Water?</h1>
        <p className="desc">
          Discover the most common contaminants in your tap water and learn how they compare to critical health standards.
        </p>
        <div className="input-group">
          <input className="zip-input" placeholder="Enter zip code" />
          <button className="analyze-btn">Analyze <CgArrowRight /></button>
        </div>
        <p className="note">
          <b>Enter your zip code</b> to see the specific contaminants in your tap water, how they can affect you, and how to best protect yourself and your family.
        </p>

        <h2>Most commonly found contaminants</h2>

        <div className="card-container">
          {[
            {
              title: "PFAS",
              risk: "Risk of Potential exposure",
              filter: "High Filter Effectiveness",
              text: "Very low exposure to some PFAS chemicals has been linked to cancer, thyroid disease, weakened childhood immunity and many other health problems.",
            },
            {
              title: "Arsenic",
              risk: "Risk of Potential effect",
              filter: "Moderate Filter Effectiveness",
              text: "Very low exposure to some PFAS chemicals has been linked to cancer, thyroid disease, weakened childhood immunity and many other health problems.",
            },
            {
              title: "Barium",
              risk: "Risk of Potential exposure: Increase in blood pressure",
              filter: "High Filter Effectiveness",
              text: "Very low exposure to some PFAS chemicals has been linked to cancer, thyroid disease, weakened childhood immunity and many other health problems.",
            },
            {
              title: "HaloAcidic",
              risk: "Risk of Potential effect: Increased risk of cancer",
              filter: "High Filter Effectiveness",
              text: "Very low exposure to some PFAS chemicals has been linked to cancer, thyroid disease, weakened childhood immunity and many other health problems.",
            }
          ].map((item, index) => (
            <div className="contaminant-card" key={index}>
              <Link className="card-link" to="#">
                <h1>{item.title}</h1>
                <p>{item.risk}</p>
                <h6>{item.filter}</h6>
                <p>{item.text}</p>
                <Link to="#">Learn more</Link>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Water;
