import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts} from '../../actions/blogPosts';
import Posts from './Posts';
import {Row, Col} from 'react-bootstrap';
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
                <h2 className="colorlib-heading">Recent Blogs</h2>
                <Row>
                  {this.props.posts.map((post) => (
                    <Col xs={3} key={post.id} className="mb-5">
                      <Posts  post={post} />
                    </Col>
                  ))}
                </Row>
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
