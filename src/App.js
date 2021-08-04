import './style/App.scss';
import arrowDown from './images/icon-arrow-down.svg'
import egg from './images/desktop/image-transform.jpg'
import cup from './images/desktop/image-stand-out.jpg'

import emily from './images/image-emily.jpg'
import jennie from './images/image-jennie.jpg'
import thomas from './images/image-thomas.jpg'

import bottles from './images/desktop/image-gallery-milkbottles.jpg'
import orange from './images/desktop/image-gallery-orange.jpg'
import cone from './images/desktop/image-gallery-cone.jpg'
import sugar from './images/desktop/image-gallery-sugarcubes.jpg'
import fb from './images/icon-facebook.svg'
import insta from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import burger from './images/icon-hamburger.svg'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOPen] = useState(false)


  return (
    <div>
      <section className="navbar">
        <div className="navWrapper">
          <div className="logo">
            sunnyside
          </div>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>About</li>
              <li>Serviecs</li>
              <li>Projects</li>
              <li className="lastli">CONTACT</li>
            </ul>
            <div className="triangle"></div>
          </div>
          <img src={burger} alt="burger" onClick={() => setMenuOPen(prev => !prev)}/>
        </div>
        
        

        
      </section>
      <section className="home">
        <div className="slogan" >
          WE ARE CREATIVES
        </div>
        
        <a href="#grid">
          <img src={arrowDown} alt="arrowdown" />
        </a>
      </section>

      <section className="grid" id="grid">
        <div className="row">
          <div className="column text">
            <div className="flexWrapper">
              <div className="title">
              Transform your brand
              </div>  
              <div className="para">
              We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.
              </div>
              <a href="">
              LEARN MORE

              </a>
            </div>
          </div>
          <div className="column">
            <img src={egg} alt="egg" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={cup} alt="cup" />
          </div>
          <div className="column text">
            <div className="flexWrapper">
              <div className="title">
              Stand out to the right audience
              </div>  
              <div className="para">
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
              </div>
              <a href="" className="secondA">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column textBottom graphic">
            <div className="flexWrapper">
              <div className="title">
                Graphic Design
              </div>
              <div className="para">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

              </div>
            </div>
          </div>
          <div className="column textBottom photo">
            <div className="flexWrapper tangerine">
              <div className="title">
                Photography
              </div>
              <div className="para second">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="sectionHeader">
          CLIENT TESTIMONIALS
        </div>
        <div className="testimonialCards">
          <div className="card">
            <img src={emily} alt="profile" />
            <div className="quote">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </div>
            <div className="name">
            Emily R.

            </div>
            <div className="position">
            Marketing Director
            </div>
          </div>
          <div className="card">
            <img src={thomas} alt="profile" />
            <div className="quote">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </div>
            <div className="name">
            Emily R.

            </div>
            <div className="position">
            Marketing Director
            </div>
          </div>
          <div className="card">
            <img src={jennie} alt="profile" />
            <div className="quote">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </div>
            <div className="name">
            Emily R.

            </div>
            <div className="position">
            Marketing Director
            </div>
          </div>
        </div>
      </section>
      <section className="fourPics">
        <img src={bottles} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugar} alt="" />
      </section>

      <section className="bottombar">
        <div className="webname">
          <b>sunnyside</b>
        </div>
        <div className="menu">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="social">
          <img src={fb} alt="social" />
          <img src={insta} alt="social" />
          <img src={twitter} alt="social" />
          <img src={pinterest} alt="social" />
        </div>
      </section>
    </div>
    
  );
}

export default App;
