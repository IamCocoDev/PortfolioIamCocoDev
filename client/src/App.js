import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Route path='/' component={Header}/>
    <Route path='/' component={NavBar}/>
    <Route path='/' component={AboutMe}/>
    <Route path='/' component={Projects}/>
    <Route path='/' component={ContactMe}/>
    <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;
