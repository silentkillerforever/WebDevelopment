import './App.css';
import Greet from './Greet';
import king from './Ajay.jpg'

function App() {
  return (
    <div className="App">
      <Greet/>
      <img src={king} alt="nothing much" />
    </div>
  );
}

export default App;
