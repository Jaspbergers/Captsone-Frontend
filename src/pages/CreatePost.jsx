import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setPost] = setState('')
  const [category, setCategory] =useState('Random')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('Anonymous')

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

  axios.post('http://127.0.0.1:5000', {title: '', category: '', content: '', author: '',
  })
    .then(response => {console.log('Response:', response.data);
    })
    .catch(error => {console.error('Error:', error);
    });
  
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
          <ReactQuill modules={modules} formats={formats} value={content} onChange={setContent}/>
          <button type="submit" className="btn primary">Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost