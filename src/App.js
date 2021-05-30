import logo from './logo.svg';
import './App.css';

import BlogView from './components/Blog'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BlogView></BlogView>
    </div>
    
  );
}
export default App;
