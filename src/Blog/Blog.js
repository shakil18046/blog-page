import React from 'react';

const Blog = ({bloge}) => {
    console.log(bloge)
    const {blog, imageName, imageURL, title, _id} = bloge

    return (
        <div>
            <img src={imageURL} alt=''></img>
            <h2>{blog}</h2>
        </div>
    );
};

export default Blog;