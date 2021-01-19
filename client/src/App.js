import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Aside } from './components/Aside/Aside';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Service } from './components/Services/Service';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import State from './context/State';
import { IoMdMoon } from 'react-icons/io';
import './App.scss';

function App() {
  const switcher = () => {
    const body = document.querySelector('body');
    const switcher = document.querySelector('#switcher');
    setTimeout(() => {
      body.classList.toggle('dark');
      switcher.classList.toggle('dark-theme');
    }, 300);
  };

  return (
    <State>
      <Router>
        <div className='main-container'>
          <div onClick={switcher} className='color-switcher' id='switcher'>
            <div className='icon'>
              <IoMdMoon />
            </div>
          </div>
          <Aside />
          <div className='main-content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/service' component={Service} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contact' component={Contact} />
              <Redirect from='/*' to='/' />
            </Switch>
          </div>
        </div>
      </Router>
    </State>
  );
}

export default App;
