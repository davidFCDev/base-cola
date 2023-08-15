import "./App.css";
import { About } from "./components/About";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Description />
        <Join />
      </main>
    </div>
  );
}

export default App;
