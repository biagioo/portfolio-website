import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts} from '../../actions/blogPosts'
import Posts from './Posts'


class BlogContainer extends Component {

  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
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

export default connect(mapStateToProps, {fetchBlogPosts})(BlogContainer);
