import './App.css';
import Card from './components/Card'
// import Greet from './components/Greet';
import king from './components/table.jpg';
// import { Home } from './components/Home';

// import Chores from './components/Chores';
function App() {
  return (
    <div className="App">
      <Card
      title='Card'
      imageURL={king}
      body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
    </div>
  );
}

export default App;
