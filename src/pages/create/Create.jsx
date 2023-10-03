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
  const [imgId, setImgId] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  var [url, setUrl] = useState(null);
  const { token } = useSelector((state) => state.auth)

  const categories = [
    "select",
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

  const converToBase64 = async(e) =>{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
      setImg(reader.result);
    };
    reader.onerror = error =>{
      console.log("Error:",error);
    }
  }

  const uploadSingleImage =  async(base64) => {
    await axios
      .post("https://blog-backend-temp-6yblp1oet-aakkashs-projects-de69e132.vercel.app/uploadImage", { image: base64 })
      .then(async (res) => {
        console.log(res.data.url);
        const temp = res.data.url;
        const jpgRegex = /\.jpg$/i; 
        console.log(jpgRegex.test(temp))
        if(!jpgRegex.test(temp))
          alert("Choose different image");
        else
        {
          console.log(temp);
          url = temp;
          await setUrl(res.data.url);
          alert("Image uploaded Succesfully");
        }
      })
      .catch(console.log);
  }

  const uploadImage = async() =>{
    await fetch("https://blog-backend-temp-6yblp1oet-aakkashs-projects-de69e132.vercel.app/blog/uploadImage",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify({
        base64:img
      })
    }).then((res) => res.json())
    .then((data) => {console.log(data.data);
      setImgId(data.data)})
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
        await uploadImage();
        console.log(imgId);
      } 
      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      const body = {
        title,
        desc,
        category,
        photo: imgId
      }
      if(category.length==0)
      setCategory("Nature")
      if(title.length==0 || desc.length==0 || category.length==0 || imgId.length == 0)
      {
        console.log(title);
        console.log(desc);
        console.log(category);
        console.log(imgId);
        alert("Fill all the inputs");
      }
      else{
      console.log(category.length)
      console.log(category);
      console.log(typeof imgId);
      const data = await request('/blog', "POST", options, body)
      console.log(data);
      navigate(`/blogDetails/${data._id}`)
      }
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
                Image: <span>Upload here(Only JPG)</span>
              </label>
              <input
                id="image"
                type="file"
                accept='image/*'
                className={classes.input}
                onChange={converToBase64}
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