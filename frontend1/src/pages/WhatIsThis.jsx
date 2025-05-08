import React from 'react';
import './WhatIsThis.css'; // make sure to import your CSS if it’s external
import aboutImage from '/about.png'; // make sure this path is correct

const SummarySection = () => {
  return (
    <section className="Summary">
      <div className="Sum">
        <h1>What is this?</h1>
        <p>
          TheGlowUp.Dev is a blog-meets-platform created by us to help early-career techies glow up professionally. Whether you're a college student, self-taught coder, or just breaking into tech, we’re here to make your journey smoother with approachable guides, real advice, and a sprinkle of fun.
        </p>
        <p>
          We cover everything from debugging in React and building your first portfolio to writing a clean résumé or surviving your first internship. At the end of each article, you can take a short quiz to test your knowledge and earn a badge — because who doesn’t love a little gamified learning?
        </p>
        <p>
          We’re not experts. We’re just a couple who figured some things out and want to pass it on.
        </p>
        <img src={aboutImage} alt="About us illustration" className="about-image" />
      </div>
    </section>
  );
};

export default SummarySection;
