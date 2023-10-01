import React from 'react'
import { useState } from 'react'
import classes from './blogdetails.module.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { request } from '../../utils/fetchApi'
import Navbar from '../../components/navbar/Navbar'
import { format } from 'timeago.js'
import mountainImg1 from "../../assets/mountain1.jpg"
import { AiFillEdit, AiFillLike, AiFillDelete, AiOutlineArrowRight, AiOutlineLike } from 'react-icons/ai'

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [viewCount, setViewCount] = useState();
  const [url, setUrl] = useState();
  const { id } = useParams();
  const { user, token } = useSelector((state) => state.auth)
  const navigator = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const options = { 'Authorization': `Bearer ${token}` }
        const data = await request(`/blog/find/${id}`, 'GET', options);
        setUrl(data.bphoto);
        setBlogDetails(data)
        data.bviews += 1;
        setIsLiked(data.blikes.includes(user._id))
        await request(`/blog/updateViews/${id}`,'GET',options);
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogDetails()
  }, [id])

  // like
  const handleLikePost = async () => {
    try {
      setViewCount(prevCount => prevCount + 1);
      const options = { "Authorization": `Bearer ${token}` }
      await request(`/blog/likeBlog/${id}`, "PUT", options)
      setIsLiked(prev => !prev)
    } catch (error) {
      console.error(error)
    }
  }

  // delete
  const handleDeleteBlog = async() => {
    try {
      console.log(id);
      const options = {"Authorization": `Bearer ${token}`}
      const data = await request(`/blog/deleteBlog/${id}`, "PUT", options)
      console.log(data);
      navigator("/");
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <Link to='/' className={classes.goBack}>
          Go Back <AiOutlineArrowRight />
        </Link>
        <div className={classes.wrapper}>
          <img src={url} />
          <div className={classes.titleAndControls}>
            <h3 className={classes.title}>{blogDetails?.btitle}</h3>
            <p>(If image is not the same, then default image is loaded due to server issue)</p>
            {blogDetails?.uid?._id === user._id ?
              <div className={classes.controls}>
                <Link to={`/updateBlog/${blogDetails?._id}`} className={classes.edit}>
                  <AiFillEdit />
                </Link>
                <div className={classes.delete}>
                  <AiFillDelete onClick={handleDeleteBlog}/>
                </div>
              </div>
              :
              <>
                {isLiked
                  ? <div className={classes.like}>
                    <AiFillLike onClick={handleLikePost} />
                  </div> 
                  :
                  <div className={classes.like}>
                    <AiOutlineLike onClick={handleLikePost} />
                  </div>
                }
              </>
            }
          </div>
          <div className={classes.descAndLikesViews}>
            <p className={classes.desc}>
              <span>Description: </span>
              {blogDetails?.bdesc}
            </p>
            <div className={classes.likesAndViews}>
              <span>{blogDetails?.bviews} views</span>
              <span>{blogDetails?.blikes?.length} likes</span>
            </div>
          </div>
          <div className={classes.authorAndCreatedAt}>
            <span><span>Author:</span> {blogDetails?.uid?.uname}</span>
            <span><span>Created At:</span> {format(blogDetails?.createdAt)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails