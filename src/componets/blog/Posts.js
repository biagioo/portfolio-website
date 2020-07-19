import React from 'react'


const Posts = (props) =>(

        <div className="row">
            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
            <div className="blog-entry">
                <a href={props.post.url} className="blog-img"><img src={props.post.cover_image} className="img-responsive" alt="" /></a>
                <div className="desc">
                <h3><a href={props.post.url}>{props.post.title}</a></h3>
                <p>{props.post.description}</p>
                </div>
            </div>
            </div>
        
    </div>
)

export default Posts


// <a href={props.post.url}>{props.post.title}</a>
//         <p>{props.post.description}</p>
//         <img src={props.post.cover_image} alt=''/>