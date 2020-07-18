import React from 'react'


const Posts = (props) =>(
    <div>
        <a href={props.post.url}>{props.post.title}</a>
        <img src={props.post.cover_image} alt=''/>
    </div>
)

export default Posts