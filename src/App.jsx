import "./App.css";
import { About } from "./components/About";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Description />
      </main>
    </div>
  );
}

export default App;
