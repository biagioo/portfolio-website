import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts} from '../actions/blogPosts';
import Posts from './blog/Posts'


class BlogPosts extends Component {

  componentDidMount() {
    this.props.fetchBlogPosts();

  }

  render() {
    console.log(this.props.posts);
    return (
        <div> 
         <h2>Most Recent Blog Posts</h2> 
        {this.props.posts.map(post => <Posts key={post.id} post={post}/>)}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.All,
  };
};

export default connect(mapStateToProps, {fetchBlogPosts})(BlogPosts);
