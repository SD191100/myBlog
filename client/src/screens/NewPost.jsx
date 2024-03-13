// import React from 'react'

import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('title: ', title)
        console.log('content: ', content)
        console.log('tags: ', tags)
        const data = { title, content, tags };
        const newPost = async() => {
            try {
                await Axios.post('http://localhost:3000/api/posts', data);
                setTitle(" ");
                setContent(" ");
                setTags([]);
                navigate("/");
                
            } catch (error) {
                console.log('error: ', error);
                setTitle(" ");
                setContent(" ");
                setTags([]);
                window.location.reload();
            }
        }
        newPost()
    }

    
  return <div className="container max-w-3xl mx-auto px-4  text-white">
    <h1 className="text-3xl font-bold mb-4">Create a new post</h1>
    <form type='submit' className="flex flex-col">
      <label className="text-lg mb-2 rounded-md" htmlFor="title">Title</label>
      <input className="bg-[#404040] text-white px-4 py-2 mb-4 rounded-md" type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
      <label className="text-lg mb-2" htmlFor="content">Content</label>
      <textarea className="bg-[#404040] text-white px-4 py-2 mb-4 rounded-md" id="content" name="content" rows="10" onChange={(e) => setContent(e.target.value)}/>
      <label className="text-lg mb-2" htmlFor="tags">Tags</label>
      <input className="bg-[#404040] text-white px-4 py-2 mb-4 rounded-md" type="text" id="tags" name="tags" onChange={(e) => setTags(e.target.value)} />
      <button className="bg-[#404040] text-white px-4 py-2 mb-4 rounded-md" type="submit" onClick={handleSubmit} >Create</button>
    </form>
  </div>
}

export default NewPost