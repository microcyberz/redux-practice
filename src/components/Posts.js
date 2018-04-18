import React, { Component } from 'react';

class Posts extends Component {
  render() {
    const postItems = this.state.posts.map((post, index)=> (
      <div key={post.id}> 
        <h3>{index+1}. {post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;