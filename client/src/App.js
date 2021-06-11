import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Header}/>
    </div>
  );
}

export default App;
