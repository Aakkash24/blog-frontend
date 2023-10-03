import React, { useState } from 'react'
import {MdOutlinePreview} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"
import "./featuredBlogs.css"

const FeaturedBlogs = () => {
  const img1 = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/23/12/north-east-night-sky-8.jpg?quality=75&width=640&height=614&fit=bounds&format=pjpg&crop=16%3A9%2Coffset-y0.5&auto=webp";
  const img2 = "https://m.economictimes.com/thumb/msid-100785841,width-6720,height-4480,resizemode-4,imgsize-1157658/best-gaming-chairs-in-india.jpg";
  const img3 = "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024";

  return (
    <div className="container">
      <div className="wrapper">
        <h3>Featured Blogs</h3>
        <div className="blogs">
          <div className="left">
            <div className="mainBlog">
              <img src={img1} alt='IMG1'/>
              <div className="mainBlogData">
                <h4>The Colorful Skies of the Northern Realm</h4>
                <div className="categoryAndMetadata">
                  <span className="category">Nature</span>
                  <div className="metadata">
                  <MdOutlinePreview style={{color:"#000",fontSize:"20"}}/> 100 views
                  </div>
                  <div className="metadata">
                    <AiFillLike style={{color:"#21304D",fontSize:"20"}}/> 100 likes
                  </div>
                </div>
                <p className="blogDesc">
                The northern part of our world unveils an awe-inspiring canvas every evening—a spectacle that paints the sky with an array of ... 
                </p>
                <div className="authorAndCreatedAt">
                  <span><span>Author:</span> Aakkash</span>
                  <span><span>Created:</span> 29-09-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="secondaryBlog">
                <img src={img2} alt="Img 2" />
                <div className="secondaryBlogData">
                  <h4>Does Gaming spoil children?</h4>
                  <p className="desc">
                  The impact of gaming on children is a topic of ongoing research and discussion. It's important to recognize that gaming, like many other activities, can have both positive and negative effects on children, depending on various factors such as the type of game, the amount of time spent playing, parental guidance, and the child's overall lifestyle.
                  </p>
                  <div className="authorAndCreatedAt">
                    <span><span>Author:</span> James</span>
                    <span><span>Created:</span> 22-03-2012</span>
                  </div>
                </div>
            </div>
            <div className="secondaryBlog">
            <img src={img3} alt="Img 3" />
                <div className="secondaryBlogData">
                  <h4 style={{}}>Can Music create peace?</h4>
                  <p className="desc" style={{color:'black'}}>
                  In a world often besieged by discord and strife, the universal language of music possesses a unique power—a power to transcend barriers, evoke emotions, and bring people together. It has long been believed that music, with its enchanting melodies and soul-stirring rhythms, 
                  </p>
                  <div className="authorAndCreatedAt" style={{color:'black'}}>
                    <span><span>Author:</span> DJ Dinesh</span>
                    <span><span>Created:</span> 03-05-2019</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs