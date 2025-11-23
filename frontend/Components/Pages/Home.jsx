import "../Pages/Home.css"
import About from "./About";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <div className="home_cnt">
        <div className="home_mid">
          <h1>HI , I AM</h1>
          <h1>TAUSEEF</h1>
          <h1>KHAN</h1>

          <h2>UI/UX DESIGNER AND WEB DEVELOPER</h2>
        </div>

        <ul>
          <li className="downloadresume">
            <a
              href="https://drive.google.com/file/d/1U2gi9KKJLHqbkLqDna3oVHEVKqWeuRB_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      <About/>

      <Contact/>
    </>
  );
}

export default Home;
