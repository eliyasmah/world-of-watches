import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <h1 className="site-name">World Of Watches</h1>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
