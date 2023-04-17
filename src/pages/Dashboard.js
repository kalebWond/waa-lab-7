import React, { useState } from 'react'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails';

function Dashboard() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Second post",
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "Third post",
      author: "Bob Johnson"
    }
  ]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const updated = posts.map(post => {
      if(post.id === 1) {
        post = {...post, title: name}
      }
      return post;
    })
    setPosts(updated);
    setName("");
  }

  const onPostSelect = (id) => {
    const post = posts.find(ps => ps.id === id);
    setSelectedPost(post);
  }
  
  return (
    <div className="max-w-4xl mx-auto py-16">
      <Posts posts={posts} onPostSelect={onPostSelect}/>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} className="py-1.5 px-3 border border-cyan-800 rounded" />
        <button onClick={(e) => onChangeHandler(e)} className="ml-4 py-1.5 px-3 bg-cyan-800 text-white font-medium rounded">Change name</button>
      </form>
      <PostDetails post={selectedPost} />
    </div>
  )
}

export default Dashboard