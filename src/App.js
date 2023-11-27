import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import AboutMe from './components/AboutMe';
import DeletePost from './components/DeletePost';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">CreatePost</Link>
        <Link to="/about">About Me</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id/update" element={<UpdatePost />} />
        <Route path="/posts/:id/delete" element={<DeletePost />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default App;
