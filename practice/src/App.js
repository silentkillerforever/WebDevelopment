import './App.css';
// import Card from './components/Card'
import CardPractice from './components/CardPractice';
// import Greet from './components/Greet';
// import king from './components/table.jpg';
// import { Home } from './components/Home';

// import Chores from './components/Chores';


function Welcome(props){
  return(
    <h1>Hello {props.name}!</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Welcome/>
      <CardPractice/>
    </div>
  );
}

export default App;
