import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './pages/Landing';
import About from './pages/About';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';

function App() {
  return (
    <div className='App'>
      <Landing />
      <About />
      <Team />
      <Sponsors />
    </div>
  );
}

export default App;
