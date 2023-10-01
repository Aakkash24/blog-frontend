import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './about.css'

const About = () => {
    return (
    <>
    <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>Welcome to Our Blog</h1>
          <p>
            We are a team of dedicated individuals who love to share our
            knowledge, experiences, and stories with the world. Our blog covers a
            wide array of topics, including technology, travel, lifestyle,
            science, and much more.
          </p>
  
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and inform our readers through engaging and
            insightful content. We strive to provide valuable information, spark
            meaningful discussions, and encourage a sense of curiosity in our
            readers.
          </p>
  
          <h2>Our Values</h2>
          <ul>
            <li>We believe in the power of knowledge and continuous learning.</li>
            <li>We value creativity, originality, and diversity of perspectives.</li>
            <li>We aim to foster a sense of community and encourage interactions among our readers.</li>
            <li>We are committed to providing reliable, accurate, and up-to-date information.</li>
          </ul>
  
          <h2>Join the Conversation</h2>
          <p>
            We'd love to hear from you! Join the conversation by sharing your
            thoughts and insights in the comments section of our articles. You can
            also connect with us on our social media platforms to stay updated
            with the latest posts and engage with our community.
          </p>
  
          <div className="social-icons">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
    </>
    );
  };
  

export default About;