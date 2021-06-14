import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/landing/landing';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Header}/>
    <Route exact path='/' component={NavBar}/>
    <Route exact path='/' component={AboutMe}/>
    <Route exact path='/' component={Landing}/>
    </div>
  );
}

export default App;
