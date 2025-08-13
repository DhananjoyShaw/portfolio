import { BrowserRouter } from "react-router-dom";
import { About, Hero, Experience, Contact, Navbar, Works, StarsCanvas, Tech } from "./components/index.js";

function App() {

  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary ">
        <div className="bg-hero-pattern bg-center bg-no-repeat bg-cover ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;