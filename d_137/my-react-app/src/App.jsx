import { useState } from 'react';
import React from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javascript', body: 'Description' },
    { id: 2, title: 'javascript 2', body: 'Description' },
    { id: 3, title: 'javascript 3', body: 'Description' },
    { id: 4, title: 'javascript 4', body: 'Description' },
  ])
  const [selectedSort, setSelectedSort] = useState('');
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])));
  } 

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Sorted By...'
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'},
          ]}
        />
      </div>
      {posts.length
        ? <PostList posts={posts} remove={removePost} title="Lists about JS" />
        : <h1>Posts are empty!</h1>
      }
    </div>
  )
}

export default App
