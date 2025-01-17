import React from "react"
import blockchain from "../../blockchain.png"
import mobile from "../../mobile-app.gif"
import logo from "../logo/logo.png";
import MovieClip from '../utils/MovieClip';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos"
import "aos/dist/aos.css"
import { useState } from 'react';
import WalletListModal from './WalletListModal';
import '../../App.css';
import Cards from "../utils/Cards";
import Header from "./Header";
import { Link } from "react-router-dom";

function App() {
   const [open, setOpen] = useState(false);
   const [openChild, setOpenChild] = useState(false);


  const [text] = useTypewriter({
    words: ["Blockchain" ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50
  })

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  return (
    <div className="App">
    <Header setOpen={setOpen} />

      {/* Hero Section */}
      <section  id='hero'>
        <div className='hero'>
          <div className='hero-text'>
            <h1 style={{height: "200px"}}>Your Trusted <span style={{ fontWeight: "bold", color: "#693A85", display: "inline-block" }}> {text}</span>
                <span style={{ color: "#45aef5" }}>
                  <Cursor cursorColor="#693A85" />
                </span>
              and Crypto Rectification Solution!</h1>
            <p>Your go-to online tool to seamlessly and efficiently fix any blockchain-related issues you might encounter.</p>
            <button onClick={() => setOpen(true)}>Connect</button>
          </div>
          <div className="mobile">
            <img src={mobile}  alt='Hero' />
          </div>
        </div>
      </section>
      <section className="container explore">
        <div className="explore-container"> 
          <div className="explore-content">
          <p>Our commitment is to address a wide array of blockchain and crypto challenges comprehensively. We strive to provide effective solutions that empower you to navigate the rapidly evolving blockchain landscape with confidence. Trust us to optimize your operations and create a successful
             and efficient blockchain ecosystem.</p>
          <div className="details">
            <img alt="explore" src={blockchain} />
          </div>
          </div>
          <button onClick={() => setOpen(true)} className='explore-btn'>Connect to Get started</button>
        </div>

      </section>
      <section id='service' className='container content'>
        <div className='content-wrapper'>
          <div className='header'>
            <h2>Our Service</h2>
            <p>Blockchain Rectification issues that we could help resolve</p>
          </div>
          {/* List of cards flexboxs */}      
          <Cards setOpen={setOpen} />
        </div>
      </section>
      
      <div className='started'>
      <div class="custom-shape-divider-top-1734417415">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
      <section className='getstarted' id='explore'>
        <div className='title'>Learn about Blockchain</div>
        <div style={{ width: "100%"}}>
          <MovieClip />
        </div>
      </section>
      </div>
      
      <footer>
        <section className='footer'>
          <div className='footer-row'>
            <div className='col'>
              <Link to="/">
                <img src={logo} alt='footer-logo' />
              </Link>
            </div>
            <div className='col'>
                <ul>
                  <li><a href='#hero'>Home </a></li>
                  <li><a href='#explore'>Get started </a></li>
                  <li><a href='#service'>Services </a></li>
                </ul>
            </div>
          </div>
          <div className='attribution'>
            <p className="year"> Resolve Protocol &copy; 2019 - {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </section>
      </footer>
        {open === true && <WalletListModal setOpenChild={setOpenChild} setOpen={setOpen} open={open} />}
    </div>
  );
}

export default App;
