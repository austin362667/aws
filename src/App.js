import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Blog } from './models';
import BlogTable from './components/Blog'
import OverviewFlow from './components/Graph'
import React from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import BasicFlow from './components/Basic.tsx'

// const BLOGS = [
//   {id: 'sljhboir930wergwabrewebvi3opubhb', name: 'Alisa'},
//   {id: 'sljhboir93wreg0u4wg3i3wsaegwubhb', name: 'Austin'},
//   {id: 'sljhbosfdbfbergwabrewebvi3opubhb', name: 'Fintch'},
//   {id: 'sljhboir93wreg0u4wg3i3wetbrbesdr', name: 'Betty'},
// ];

const elements = [
  { id: '1', data: { label: '睡覺' }, position: { x: 50, y: 50 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: '吃飯'}, position: { x: 250, y: 250 } },
  { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrowclosed', label: '然後',},
  { id: 'e2-1', source: '2', target: '1', arrowHeadType: 'arrowclosed', label: '循環',},
];



class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        properties: []
      }
  }

  getData = () => {

    DataStore.query(Blog)
      .then(models => {
          return models
      })
      .then(models => {

          var blogs = [];

          for (let i=0; i<models.length; i++) { 
              blogs.push({
                  name: models[i].name,
                  id: models[i].id,
              });
          }

          this.setState({properties: blogs});
      });
  }

  componentDidMount = () => this.getData();


  render () {
    return (
      <div className="App" style={{width: '60%', height: '50%'}}>
      <h1>我是如何在10天內成為廢物的學習地圖</h1>
    {/* <BlogTable blogs={this.state.properties} /> */}
    {<ReactFlow elements={elements} />}
    {/* <OverviewFlow /> */}
    {/* <BasicFlow elements={elements}/> */}
    <h3>
    最近與夥伴們有個口頭禪就是『我真是個廢物呢』，一開始的開始可能是打打嘴砲，最近感觸越來越深，只有不斷地把自己的現狀錨定在 0 分，才有追求卓越的可能性，我們似乎很享受當個快樂的低能兒，我覺得這狀態挺好，stay hungry stay foolish。
    </h3>
    </div>
    )
}
}



export default App;
