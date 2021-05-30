import React from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { Blog } from '../models';

class BlogView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        blogs: [],
      };
    }
  
    render() {
      return (
        <div>
          <button
            className="queryBlogs"
            onClick={() => this.setState({blogs: queryBlog})}
          >
          queryBlogs
          </button>
          <BlogList blogs={this.state.blogs}></BlogList>
        </div>
      );
    }
  }

  function BlogList(props) {
    const blogs = props.blogs;
    const listItems = blogs.map((blog) =>
      <li key={blog.toString()}>
        {blog.name}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const queryBlog =  async ()=>{
    const models = await DataStore.query(Blog);
    console.log(models);
    return models
  }

  export default BlogView;