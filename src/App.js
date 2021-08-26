import Home from './Pages/Home'
import Bussiness from './Pages/Bussiness'
import Press from './Pages/Press'
import Nav from './Pages/components/Nav'
import About from './Pages/components/About'
import SocialIcon from './Pages/components/SocialIcon'
import Guide from './Pages/components/Guide'
import Number from './Pages/components/Number'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/bussiness'>
          <Bussiness />
        </Route>
        <Route exact path='/press'>
          <Press />
        </Route>
      </Switch>
      <Number />
      <Guide />
      <About />
      <article className='section__center'>
        <SocialIcon />
      </article>
    </Router>
  )
}

export default App
