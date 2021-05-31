import React from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { Post } from '../models';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: '睡覺' }, position: { x: 50, y: 50 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: '吃飯'}, position: { x: 250, y: 250 } },
  { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrowclosed', label: '循環',},
  { id: 'e2-1', source: '2', target: '1', arrowHeadType: 'arrowclosed', label: '循環',},
];

class BlogRow extends React.Component {
  render() {

    const blog = this.props.blog;
    const blogId = blog.id;
    const blogName = blog.name;
    const blogEdges = blog.edges
    const blogNodes = blog.nodes
    var dataEdges = blogEdges.map((edge)=>{
      return { id: `e${edge.source}-${edge.target}`, source: edge.source, target: edge.target, arrowHeadType: edge.type, label: JSON.parse(`"${edge.label}"`)}
    })
    var dataNodes = blogNodes.map((node)=>{

      return { id: node.nameId, data: JSON.parse(node.data.replace(`label`, `"label"`).replaceAll(`'`, `"`)), position: JSON.parse(node.position.replace(`x`, `"x"`).replace(`y`, `"y"`)) }
    })
    
    const data = [...dataEdges, ...dataNodes]
    console.log(data)
    return (
      <tr>
        <td>{blogId}</td>
        <td>{blogName}</td>
        <td>
          <div style={{width: '50rem', height: '25rem'}}>
            <ReactFlow elements={data} />
          </div>
        </td>
      </tr>
    );
  }
}

class BlogTable extends React.Component {
  render() {

    const rows = [];

    // console.log(this.props.blogs)
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
            <th>Title</th>
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default BlogTable;