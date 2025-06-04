import React from 'react';
import './InfoContent.css';

// Import images
import RPI from './images/RPI.png';
import AES from './images/AES.png';
import AES2 from './images/AES2.png';
import GithubCat from './images/githubcat.png';
import GithubText from './images/github.png';
import LinkedInLogo from './images/linkedin.png';
import LinkedInText from './images/linkedintext.png';
import GmailIcon from './images/Gmail.png';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Email copied to clipboard: ${text}`);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}

function InfoContent() {
  return (
    <div style={{ padding: '2rem 1rem', color: 'white', maxWidth: '800px', margin: 'auto', fontSize: '1.5rem', lineHeight: '1.6' }}>
      <h2>Hello!</h2>

      <p>
        My name is William Cao, a Computer Science sophomore at Rensselaer Polytechnic Institute (RPI). 
        My studies have deepened my understanding of programming languages, algorithms, and software development.
         
          
           
            
      </p>





      {/* Social Buttons */}
      <div style={{ margin: '1rem 0 2rem', display: 'flex', gap: '40px', justifyContent: 'center'}}>

      {/* GitHub */}
      <a href="https://github.com/IamWilliamCao" target="_blank" rel="noopener noreferrer" className="button-wrapper github">
        <div className="icon-wrapper">
          <img src={GithubText} alt="GitHub Text" className="icon github-base" />
          <img src={GithubCat} alt="GitHub Cat" className="icon github-cat" />
        </div>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/williamca0/" target="_blank" rel="noopener noreferrer" className="button-wrapper linkedin">
        <div className="icon-wrapper">
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="icon linkedin-base" />
          <img src={LinkedInText} alt="LinkedIn Text" className="icon linkedin-text" />
        </div>
      </a>

      {/* Gmail */}
      <button onClick={() => copyToClipboard('willcnvr@gmail.com')} className="button-wrapper gmail large-gmail">
        <div className="icon-wrapper">
          <img src={GmailIcon} alt="Gmail Icon" className="icon gmail-icon" />
        </div>
      </button>
      </div>





      <h3>Academics</h3>

      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <img src={RPI} alt="RPI Logo" style={{ height: 300, marginRight: 15, borderRadius: 8 }} />
        <p style={{ flex: 1 }}>
          In 2022, RPI was ranked #1 in Computer Engineering Technology and #2 in General Visual & Performing Arts by College Factual. 
          Business Insider ranked it as the 12th Best Computer Science and Engineering School in the US. 
          I currently hold a GPA of 3.66 and plan to pursue Computational Biology with a dual major in Mathematics or Biology.
        </p>
      </div>

      <h3>Music & Hobbies</h3>
      <p>
        Music has been an important part of my life since 2015, helping me navigate tough times and nurture creativity. I started with{' '}
        <a href="https://www.apple.com/mac/garageband/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          GarageBand
        </a> in middle school, then moved on to{' '}
        <a href="https://www.ableton.com/en/about/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          Ableton
        </a> and{' '}
        <a href="https://www.apple.com/logic-pro/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          LogicPro
        </a> in high school.
      </p>

      <div style={{ display: 'flex', gap: '80px', margin: '1rem 0', alignItems: 'center' }}>
        <img src={AES} alt="AES Logo" style={{ height: 360, borderRadius: 8 }} />
        <img src={AES2} alt="AES Logo 2" style={{ height: 360, borderRadius: 8 }} />
      </div>

      <p>
        I've collaborated with talented professionals, including RPI Professor{' '}
        <a href="https://faculty.rpi.edu/ross-rice" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          Ross Rice
        </a>, a Billboard-chart topping songwriter. My involvement with the Audio Engineering Society (<a href="https://aes2.org/about/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          AES
        </a>) has provided valuable feedback that enhanced my work.
      </p>

      <p>
        I combine my computer science skills with music by creating plugins using Ableton’s MAX, Java, and C++. These plugins rival modern market offerings.
      </p>

      <p>
        My goal is to work with the best in the industry, pushing boundaries to discover new sounds and cultures. I hope my dedication to music translates well into other fields.
      </p>
    </div>
  );
}

export default InfoContent;
