/* eslint-disable no-unused-vars */
// src/components/Homepage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Blog</h1>
      <p>Explore our latest blog posts:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link to={`/post/${post.id}`} style={{ color: '#333', textDecoration: 'none', fontSize: '20px' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
