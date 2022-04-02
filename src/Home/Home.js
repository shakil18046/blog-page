import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../App';
import Blog from '../Blog/Blog';
const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("https://retro-tech-talks.herokuapp.com/blogs")
        .then(res=> res.json())
        .then( data => setBlogs(data))
    },[])
    // blogs.map(blog=> )
    return (
        
        <div>
           {
               blogs.map(blog=> <Blog bloge={blog}></Blog>)
           }
        </div>
    );
};

export default Home;