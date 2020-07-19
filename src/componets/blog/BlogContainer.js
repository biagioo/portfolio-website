import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPosts} from '../../actions/blogPosts';
import Posts from './Posts';
import {Row, Col, Container} from 'react-bootstrap';
class BlogContainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <Container className="col-md-offset-2">
        <h2>Recent Blogs</h2>
        <Row>
          {this.props.posts.map((post) => (
            <Col md="auto" key={post.id} className="mb-5">
              <Posts post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.All,
  };
};

export default connect(mapStateToProps, {fetchBlogPosts})(BlogContainer);
