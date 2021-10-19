import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
// import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Skillz from './components/Skillz';
import Project from './components/Project';
import Contact from './pages/Contact';



function App() {

  
  return (
    <div className="App">
     <Router>
        <NavBar/>
        {/* <Nav /> */}
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />  
         <Route path="/skills" component={Skillz} />
         <Route path="/projets" component={Project} />
         <Route path="/contact" component={Contact} />
       </Switch>
       
     </Router>
    </div>
  );
}

export default App;
