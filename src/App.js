import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './login/Login';
import NotFound from './not-found/NotFound';
import Video from './video/Video';
export const BlogContext = createContext();
function App() {

  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/video" element={<Video></Video>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/blog" element={<Blog></Blog>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
