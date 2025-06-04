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
import WillC from './images/WillC.png';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Email copied to clipboard: ${text}`);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}

function InfoContent() {
  return (
    <div style={{ padding: '2rem 1rem', color: 'white', maxWidth: '800px', margin: 'auto', fontSize: '1.5rem', lineHeight: '1.8' }}>
      <h2>Hello!</h2>

      <p style={{ marginBottom: '2rem' }}>
        My name is William Cao, a Computer Science sophomore at Rensselaer Polytechnic Institute (RPI). 
        My studies have deepened my understanding of programming languages, algorithms, and software development.
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '3rem', 
        marginBottom: '3rem', 
        flexWrap: 'wrap' 
      }}>
        {/* Image */}
        <img 
          src={WillC} 
          alt="William Cao" 
          style={{ 
            height: '380px', 
            width: '380px', 
            objectFit: 'cover', 
            borderRadius: '20px', 
            border: '3px solid white', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)' 
          }} 
        />

        {/* Vertical Social Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
      </div>
      
      {/* Academic Section */}
      <h3 style={{ marginBottom: '1rem' }}>Academics</h3>

      <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
        <img src={RPI} alt="RPI Logo" style={{ height: 300, marginRight: 15, borderRadius: 8 }} />
        <p style={{ flex: 1, marginBottom: 0 }}>
          In 2022, RPI was ranked #1 in Computer Engineering Technology and #2 in General Visual & Performing Arts by College Factual. 
          Business Insider ranked it as the 12th Best Computer Science and Engineering School in the US. 
          I currently hold a GPA of 3.66 and plan to pursue Computational Biology with a dual major in Mathematics or Biology.
        </p>
      </div>

      {/* Skills Learned Section with your updated content */}
      <section style={{ backgroundColor: '#222', padding: '1.5rem 2rem', borderRadius: '8px', marginBottom: '3rem', color: '#ccc', fontSize: '1.1rem' }}>
        <h4 style={{ color: '#00acee', marginBottom: '1rem' }}>Skills I Learned</h4>

        <p style={{ marginBottom: '0.7rem' }}><strong>Computer Science</strong></p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Foundations of Computer Science:</strong> Set theory, combinatorics, probability theory, Turing Machine models, and notions of computational complexity.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Data Structures:</strong> Learned to implement and analyze data structures like lists, stacks, queues, trees, and graphs to efficiently organize and manipulate data.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Computer Organization:</strong> Gained understanding of computer hardware architecture, assembly language, and low-level programming concepts including memory and CPU operations.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Introduction to Algorithms:</strong> Studied algorithm design and analysis including sorting, searching, recursion, and complexity to solve computational problems efficiently.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Principles of Software:</strong> Learned software development methodologies, design patterns, testing, and debugging.
          </li>
          <li>
            <strong>Intro to Artificial Intelligence:</strong> Explored AI concepts such as search algorithms, knowledge representation, machine learning basics, and intelligent agent design.
          </li>
          <li style={{ marginTop: '1rem' }}>
            <strong>Languages:</strong> C++, C, Java, Python, HTML, CSS, TypeScript, JavaScript, MIPS, SQL, MATLAB
          </li>
          <li style={{ marginTop: '1rem' }}>
            <strong>Frameworks & Libraries:</strong> SQLAlchemy, OpenCV, Pillow, EasyOCR, React Native
          </li>
        </ul>

        <p style={{ marginBottom: '0.7rem' }}><strong>Math & Science</strong></p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Calculus (Multivariable, Matrix Algebra, & Intro Differential Equations):</strong> Learned techniques to solve differential equations and their applications in modeling dynamic systems.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Linear Algebra:</strong> Explored vector spaces, linear transformations, eigenvalues, and eigenvectors critical for graphics, machine learning, and scientific computing.
          </li>
          <li style={{ marginBottom: '0.7rem' }}>
            <strong>Biology:</strong> Gained foundational knowledge of biological systems, cell structure, genetics, and organism functions.
          </li>
          <li>
            <strong>Physics:</strong> Covered fundamental physics principles including mechanics, motion, forces, and energy.
          </li>
        </ul>
      </section>

      {/* Music & Hobbies Section */}
      <h3 style={{ marginBottom: '1rem' }}>Music & Hobbies</h3>
      <p style={{ marginBottom: '1.5rem' }}>
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

      <div style={{ display: 'flex', gap: '80px', margin: '2rem 0', alignItems: 'center' }}>
        <img src={AES} alt="AES Logo" style={{ height: 360, borderRadius: 8 }} />
        <img src={AES2} alt="AES Logo 2" style={{ height: 360, borderRadius: 8 }} />
      </div>

      <p style={{ marginBottom: '1.5rem' }}>
        I've collaborated with talented professionals, including RPI Professor{' '}
        <a href="https://faculty.rpi.edu/ross-rice" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          Ross Rice
        </a>, a Billboard-chart topping songwriter. My involvement with the Audio Engineering Society (<a href="https://aes2.org/about/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
          AES
        </a>) has provided valuable feedback that enhanced my work.
      </p>

      <p style={{ marginBottom: '2rem' }}>
        I combine my computer science skills with music by creating plugins using Ableton’s MAX, Java, and C++. These plugins rival modern market offerings.
      </p>

      <p style={{ marginBottom: '3rem' }}>
        My goal is to work with the best in the industry, pushing boundaries to discover new sounds and cultures. I hope my dedication to music translates well into other fields.
      <br /><br /><br /><br />
      </p>

    </div>
  );
}

export default InfoContent;
