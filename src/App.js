import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Reach from "./pages/Reach";
import ScrollButton from "./components/scroll-to-top";
import { Content, Heading } from "./components/scroll-to-top/style.jsx";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Team />
      <Sponsors />
      <Reach />
      <Content />
      <ScrollButton />
    </div>
  );
}

export default App;
