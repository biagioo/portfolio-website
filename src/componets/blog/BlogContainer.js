import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts} from '../../actions/blogPosts';
import Posts from './Posts';

class BlogContainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <div className="col-md-offset-2">
        <section className="colorlib-blog " data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className=" animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Recent Blog</h2>
                {this.props.posts.map((post) => (
                  <Posts key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
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
