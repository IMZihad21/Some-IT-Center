import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Handle404 from './components/Handle404/Handle404';
import LiveSupport from './components/LiveSupport/LiveSupport';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/support">
            <LiveSupport></LiveSupport>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Handle404></Handle404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
