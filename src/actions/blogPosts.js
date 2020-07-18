export const setBlogPosts = posts =>({type:'ALL_BLOGS', payload:posts})

export const fetchBlogPosts = () =>{
    return(dispatch)=>{
        return fetch('https://dev.to/api/articles/me')
        .then(resp => resp.json())
        .then(data =>{
            dispatch(setBlogPosts(data))
        })
    }
}