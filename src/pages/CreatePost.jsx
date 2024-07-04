import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  //const title = [""]
  //const category = [""]
  //const content = [""]
  //const author = [""]

  const modules= {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '=1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ]
  
  const postCategories = ["Art", "Games", "Life", "Music", "Random", "Science", "Technology", "Writing"]

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://capstone-backend-ydz5.onrender.com/blogpost/add_new', 
      {title: title, category: category, content: content, author: '',})
      .then(response => {
        console.log('Response:', response.data);
        setTitle('')
        setContent('')
        setCategory('')
      })
      .catch(error => {console.error('Error:', error);
      });
  }

  const handleChange = (value) => {
    setContent(prevValue => {
      return value
    })
  }

  
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form-error-message">
          There was an error
        </p>
        <form className="form create-post-form">
          <input type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)} autofocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={content} onChange={value => handleChange(value)}/>
          <button type="submit" className="btn primary" onClick={handleSubmit}>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost