import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import classes from './create.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { request } from '../../utils/fetchApi'
import axios from 'axios'

const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  var [url, setUrl] = useState(null);
  const { token } = useSelector((state) => state.auth)

  const categories = [
    'nature',
    'music',
    'travel',
    'programming',
  ]

  const convertBase64 = async(file) => {
    return  new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadSingleImage =  async(base64) => {
    await axios
      .post("https://blog-backend-temp.vercel.app/blog/uploadImage", { image: base64 })
      .then(async (res) => {
        console.log(res.data.url);
        const temp = res.data.url;
        console.log(temp);
        url = temp;
        await setUrl(res.data.url);
        alert("Image uploaded Succesfully");
      })
      .catch(console.log);
  }

  const onChangeFile = async(e) => {
    await setImg(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImg(null)
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault()

    try {
      if (img) {
        const base64 = await convertBase64(img);
        await uploadSingleImage(base64);
      } 
      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      const body = {
        title,
        desc,
        category,
        photo: url
      }
      if(category.length==0)
      setCategory("Nature")
      console.log(url);
      console.log(category);
      const data = await request('/blog', "POST", options, body)
      console.log(data);
      navigate(`/blogDetails/${data._id}`)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Create Blog</h2>
          <form onSubmit={handleCreateBlog} encType="multipart/form-data">
            <div className={classes.inputWrapper}>
              <label>Title: </label>
              <input
                type="text"
                placeholder='Title...'
                className={classes.input}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={classes.inputWrapper}>
              <label>Description: </label>
              <input
                type="text"
                placeholder='Description...'
                className={classes.input}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className={classes.inputWrapperSelect}>
              <label>Category: </label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={crypto.randomUUID()} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className={classes.inputWrapperImg}>
              <label htmlFor='image' className={classes.labelFileInput}>
                Image: <span>Upload here</span>
              </label>
              <input
                id="image"
                type="file"
                accept='image/*'
                className={classes.input}
                onChange={onChangeFile}
                style={{ display: 'none' }}
              />
              {img && <p className={classes.imageName}>{img.name} <AiOutlineCloseCircle className={classes.closeIcon} onClick={() => handleCloseImg()} /></p>}
            </div>
            <div className={classes.buttonWrapper}>
              <button className={classes.submitBtn} type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create