/** @format */

import "./App.css";
import Nav from "./Nav";
import AdvertMid from "./AdvertMid";
import AdvertBottom from "./AdvertBottom";
import Mid from "./Mid";
import Trails from "./Trails";
import Footer from "./Footer";

function App() {
  return (
    <div className='appDiv'>
      <Nav />
      <div className='appMainContent'>
        <header>
          <h1>Forests</h1>
          <p>Tis the season to hike!</p>
          <p>
            Make sure you are prepared. Learn how <a href='#prepared'>here</a>
          </p>
        </header>
        <section>
          <AdvertMid />
        </section>
        <section id='explore'>
          <h2>Explore</h2>
          <Mid />
        </section>
        <section>
          <AdvertBottom />
        </section>
        <section>
          <Trails />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
