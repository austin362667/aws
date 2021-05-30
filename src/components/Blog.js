import React from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { Blog } from '../models';


class BlogRow extends React.Component {
  render() {
    const blog = this.props.blog;
    const blogId = blog.id;
    const blogName = blog.name;

    return (
      <tr>
        <td>{blogId}</td>
        <td>{blogName}</td>
      </tr>
    );
  }
}

class BlogTable extends React.Component {
  render() {

    const rows = [];

    console.log(this.props.blogs)
    this.props.blogs.forEach((blog) => {
      rows.push(
        <BlogRow
          blog={blog}
          key={blog.id}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
/*
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class FilterableBlogTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <BlogTable
          blogs={this.props.blogs}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
*/
export default BlogTable;