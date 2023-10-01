import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/categories/Categories'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import NewsLetter from '../../components/newsletter/NewsLetter'
import classes from "./home.module.css"

const Home = () => {
  return (
    <div className={classes.containter}>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      <NewsLetter />
    </div>
  )
}

export default Home