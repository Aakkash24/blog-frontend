import React from 'react';
import './CategoryCard.css'; // Import the CSS file for styling

const CategoryCard = ({ title, description, iconClass }) => {
  return (
    <div className="category-card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={"/"} className="btn btn-primary">
        Explore {title}
      </a>
    </div>
  );
};

export default CategoryCard;
