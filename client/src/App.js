import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPalette, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"

library.add(fab, faHome, faPalette, faEnvelope)

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
      <Route exact path={["/"]} component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
