import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {fetchBlogPosts} from '../actions/blogPosts'
class BlogPosts extends Component {
    
    componentDidMount(){
        this.props.fetchBlogPosts()
    }
    
    render(){
        console.log(this.props)
        return(
            <h1> 
                Blogs need a pic, short summary, and link to dev.to or user dev.to API
            </h1>
        )
    }
}

const mapStateToProps = state =>{
    return{
        posts: state.All
    }
}

export default connect(mapStateToProps, {fetchBlogPosts})(BlogPosts )