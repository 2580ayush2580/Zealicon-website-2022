import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Reach from "./pages/Reach";
import ScrollButton from "./components/scroll-to-top";
import { Content, Heading } from "./components/scroll-to-top/style.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Team />
      <Sponsors />
      <Reach />
      <Footer />
      <Content />
      <ScrollButton />
    </div>
  );
}

export default App;
