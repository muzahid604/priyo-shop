import './App.css';
import Ans from './components/Ans/Ans';
import Buy from './components/Buy/Buy';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Buy></Buy>
      <Ans></Ans>
    </div>
  );
}

export default App;
