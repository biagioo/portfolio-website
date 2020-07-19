import React from 'react'


const Posts = (props) =>(
    <div>
        <a href={props.post.url}>{props.post.title}</a>
        <p>{props.post.description}</p>
        <img src={props.post.cover_image} alt=''/>
    </div>
)

export default Posts