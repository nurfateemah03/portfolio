import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import WorkDetails from './components/WorkDetails';
import {Routes} from 'react-router-dom';


function App() {
  return (
    <div >
<Navbar />
<Routes>
  <Route path='/WorkDetails' element={<WorkDetails/>}/>
</Routes>
<Home />
<About/>
<Skills />
<Work />
<Contact />
    </div>
  );
}

export default App;
