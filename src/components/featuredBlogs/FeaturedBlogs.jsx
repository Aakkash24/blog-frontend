import React from 'react'
import classes from "./featuredBlogs.module.css"
import mountainImg1 from "../../assets/mountain1.jpg"
import gamingImg from "../../assets/gaming.jpg"
import musicImg from "../../assets/music.jpg"
import {MdOutlinePreview} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"

const FeaturedBlogs = () => {
  const img1 = "https://res.cloudinary.com/dmfcoexcm/image/upload/v1696146644/1696145857715.webp";
  const img2 = "https://res.cloudinary.com/dmfcoexcm/image/upload/v1696146730/1696145857715.webp";
  const img3 = "https://res.cloudinary.com/dmfcoexcm/image/upload/v1696146852/1696145857715.jpg";

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={img1} alt='IMG1'/>
              <div className={classes.mainBlogData}>
                <h4>The Colorful Skies of the Northern Realm</h4>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                  <MdOutlinePreview style={{color:"#000",fontSize:"20"}}/> 100 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike style={{color:"#21304D",fontSize:"20"}}/> 100 likes
                  </div>
                </div>
                <p className={classes.blogDesc}>
                The northern part of our world unveils an awe-inspiring canvas every evening—a spectacle that paints the sky with an array of ... 
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Aakkash</span>
                  <span><span>Created:</span> 29-09-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
                <img src={img2} alt="Img 2" />
                <div className={classes.secondaryBlogData}>
                  <h4>Does Gaming spoil children?</h4>
                  <p className={classes.desc}>
                  The impact of gaming on children is a topic of ongoing research and discussion. It's important to recognize that gaming, like many other activities, can have both positive and negative effects on children, depending on various factors such as the type of game, the amount of time spent playing, parental guidance, and the child's overall lifestyle.
                  </p>
                  <div className={classes.authorAndCreatedAt}>
                    <span><span>Author:</span> James</span>
                    <span><span>Created:</span> 22-03-2012</span>
                  </div>
                </div>
            </div>
            <div className={classes.secondaryBlog}>
            <img src={img3} alt="Img 3" />
                <div className={classes.secondaryBlogData}>
                  <h4 style={{}}>Can Music create peace?</h4>
                  <p className={classes.desc} style={{color:'black'}}>
                  In a world often besieged by discord and strife, the universal language of music possesses a unique power—a power to transcend barriers, evoke emotions, and bring people together. It has long been believed that music, with its enchanting melodies and soul-stirring rhythms, 
                  </p>
                  <div className={classes.authorAndCreatedAt} style={{color:'black'}}>
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