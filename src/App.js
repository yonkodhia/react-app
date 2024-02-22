import React, { useState } from 'react';
import './index.css';
import aa from './assets/arrow-left.svg'
import landingBanner from './assets/landing-image.png'
import imageGRID from './assets/image-col.png'
import sec3img from './assets/sec3-img.png'

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/1024px-Binance_Logo.svg.png" alt="Your Logo" width="140" height="100" />
        </div>
        <div className='border'>
          <div className="navbar">
            <a
              href="#section1"
              onClick={() => handleSectionClick('section1')}
              className={selectedSection === 'section1' ? 'active' : ''}
            >
              About
            </a>
            <a
              href="#section2"
              onClick={() => handleSectionClick('section2')}
              className={selectedSection === 'section2' ? 'active' : ''}
            >
              Render Network
            </a>
            <a
              href="#section3"
              onClick={() => handleSectionClick('section3')}
              className={selectedSection === 'section3' ? 'active' : ''}
            >
              Whitepaper
            </a>
            <a
              href="#section3"
              onClick={() => handleSectionClick('section4')}
              className={selectedSection === 'section4' ? 'active' : ''}
            >
              Team & Adviosors
            </a>
            <a
              href="#section3"
              onClick={() => handleSectionClick('section5')}
              className={selectedSection === 'section5' ? 'active' : ''}
            >
              Knowledge Base
            </a>
          </div>
        </div>

        <div className="signup-btn">
          <p>Sign Up</p>
          <img className='icon' src={aa} alt='' />
        </div>
      </header>
      <section className='first-sec'>
        <div>
          <div>
            <h1>
              Distributed GPU rendering on the blockchain
            </h1>
            <p>the Render Network is the first decentralized GPU rendering platform, empowering artists to scale GPU rendering work on-demand to hight performance GPU Nodes around the world. Through a blockchain marketplace for idle GPU compute.</p>
            <button className='sec1-btn'>
              Artist Portal
              <img className='icon' src={aa} alt='' />
            </button>
          </div>
          <div>
            <img src={landingBanner} alt='' />
          </div>
        </div>
      </section>
      <section className='second-sec'>
        <div>
          <div>
            <h1>
              About The Render Network
            </h1>
            <p>the Render Network is the first decentralized GPU rendering platform, empowering artists to scale GPU rendering work on-demand to hight performance GPU Nodes around the world. Through a blockchain marketplace for idle GPU compute.</p>
            <p>the next network provides artists the ability to scale next generation rendering work at fractions of the cost and at orders of magnitude increases in speed when compared to the centralized GPU cloud</p>
            <button className='sec2-btn'>
              Artist Portal
              <img className='icon' src={aa} alt='' />
            </button>
          </div>
          <div>
            <img src={imageGRID} alt='' />
          </div>
        </div>
      </section>
      <section className='third-sec'>
        <div>
          <p>Our visual world is evolving at breakneck speed.</p>
          <p>Authoring and publishing state-of-the-art graphics is an immense challenge that is growing each day. The future demand for advanced rendering will lead to even more complexity and require higher resolution and more interactivity.</p>
          <button className='sec1-btn'>
            Artist Portal
            <img className='icon' src={aa} alt='' />
          </button>
        </div>
        <div className='cards'>
          <div className='oneCard'>
            <div className='icon-card'></div>
            <div>
              <p>Network Scalability</p>
              <p>Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.</p>
            </div>
          </div>
          <div className='oneCard'>
            <div className='icon-card'></div>
            <div>
              <p>Network Scalability</p>
              <p>Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.</p>
            </div>
          </div>
          <div className='oneCard'>
            <div className='icon-card'></div>
            <div>
              <p>Network Scalability</p>
              <p>Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='fourth-section'>
        <div>
          <div>
            <h1>
              How It Works
            </h1>
            <p>
              blockchain's widespread adoption was the key to realizing the Render Network. Instead of GPUs being used to only mine currencies, the network uses their intinsic function to render and leverage the features of the blockchain: network, incentives and trust.
            </p>
            <button className='sec2-btn'>
              Artist Portal
              <img className='icon' src={aa} alt='' />
            </button>
          </div>
          <div>
            <img src={sec3img} alt='' />
          </div>
        </div>
      </section>
      <section className='fifth-section'>
        <div>
          <h1>
            Meet the founder & our advisors
          </h1>
          <p>
            People handling community outreach blockchain's widespeard adoption was the key to realizing the Render Network. Instead of GPUs being used to only mine currencies, the network uses their intrinsic function to render and leverage the features of the blockchain: network, incentives and trust.
          </p>
        </div>
        <div className='grid-cards'>
          <div className='grid-wrapper'>
            <div className='first-child'>
              <h1>Ari Emanuel</h1>
              <p>Chairman & CEO Bad Robot Production</p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div className='last-child'>
              <p>Ariel Emanuel is Chief Executive Officer of Endeavor (NYSE: EDR), a global sports</p>
            </div>
          </div>
          <div className='grid-wrapper'>
            <div className='first-child'>
              <h1>Ari Emanuel</h1>
              <p>Chairman & CEO Bad Robot Production</p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div className='last-child'>
              <p>Ariel Emanuel is Chief Executive Officer of Endeavor (NYSE: EDR), a global sports</p>
            </div>
          </div>
          <div className='grid-wrapper'>
            <div className='first-child'>
              <h1>Ari Emanuel</h1>
              <p>Chairman & CEO Bad Robot Production</p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div className='last-child'>
              <p>Ariel Emanuel is Chief Executive Officer of Endeavor (NYSE: EDR), a global sports</p>
            </div>
          </div>
        </div>
        
      </section>
      <div className='footer'>
        <h1>Subscribe to recive news & updates</h1>
        <div className='search-inside'></div>
      </div>
    </div>
  );
}

export default App;


