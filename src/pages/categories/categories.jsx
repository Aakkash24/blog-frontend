// src/components/Categories.js
import React from 'react';
import "./categories.css"
import CategoryCard from '../CategoryCard/CategoryCard';
import Navbar from '../../components/navbar/Navbar';

const categories = [
  {
    title: 'Nature',
    description: 'Explore the beauty of nature and its wonders.',
    iconClass: 'fa fa-leaf'
  },
  {
    title: 'Music',
    description: 'Discover the world of music and its genres.',
    iconClass: 'fa fa-music'
  },
  {
    title: 'Travel',
    description: 'Embark on exciting journeys and explore new places.',
    iconClass: 'fa fa-plane'
  },
  {
    title: 'Programming',
    description: 'Dive into the world of coding, algorithms, and software development.',
    iconClass: 'fa fa-code'
  }
];

const Categories = () => {
  return (
    <>
    <Navbar />
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
            ))}
      </div>
    </div>
    </>
  );
};

export default Categories;
