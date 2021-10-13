import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skillz from './components/Skillz';
import Project from './components/Project';



function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />  
         <Route path="/skills" component={Skillz} />
         <Route path="/projets" component={Project} />
       </Switch>
       {/* <Footer /> */}
     </Router>
    </div>
  );
}

export default App;
