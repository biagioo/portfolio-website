
export const setBlogPosts = posts =>({type:'ALL_BLOGS', payload:posts})

export const fetchBlogPosts = () =>{
    return(dispatch)=>{
        return fetch('https://cors-anywhere.herokuapp.com/https://dev.to/api/articles/me/published',{
            headers:{
                'api-key': process.env.REACT_APP_BLOG_API_KEY
            }
        })
        .then(resp => resp.json())
        .then(data =>{
            dispatch(setBlogPosts(data))
        })
    }
}

// fetch('https://cors-anywhere.herokuapp.com/https://dev.to/api/articles/me/published'

// fetch('https://dev.to/api/articles/me/published'