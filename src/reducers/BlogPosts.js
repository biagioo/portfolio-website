const BlogPosts =(
    state={
        All:[]
    },
    action
) =>{
    switch (action.type){
        case 'ALL_BLOGS' :
            return{
                ...state, 
                All: action.payload,
            }

        default:
            return state;
    }
}

export default BlogPosts