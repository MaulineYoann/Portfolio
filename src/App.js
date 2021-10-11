import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>

       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
        
       </Switch>

     </Router>
    </div>
  );
}

export default App;
