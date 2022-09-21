import './App.css';
import Card from './components/Card'
// import Greet from './components/Greet';
import king from './components/love.jpg';
// import { Home } from './components/Home';

// import Chores from './components/Chores';
function App() {
  return (
    <div className="App">
      <Card
      title='Card'
      imageURL={king}
      body='This is an image from Pexels.com website'/>
    </div>
  );
}

export default App;
