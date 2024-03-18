import { About } from "../components/About";
import { Description } from "../components/Description";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Join } from "../components/Join";
import { Video } from "../components/Video";


function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Video />
        <About />
        <Description />
        <Join />
      </main>
    </div>
  );
}

export default Home;
