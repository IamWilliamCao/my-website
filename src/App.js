import React, { useState, useEffect, useRef } from 'react';
import Dock from './Dock';
import Particles from "./Particles";
import TextPressure from './Pressure';
import ScrollReveal from './ScrollReveal';
import { FiHome, FiPackage, FiUser, FiSettings } from 'react-icons/fi';
import InfoContent from './InfoContent';
import TiltedCard from './Card';
import Modal from './CardOut';

import Project1 from './images/Project1.png';
import Project2 from './images/Project2.png';
import Project3 from './images/Project3.png';
import Project4 from './images/Project4.png';
import Project5 from './images/Project5.png';
import Project6 from './images/Project6.png';
import Project7 from './images/Project7.png';
import Project8 from './images/Project8.png';
import Project9 from './images/Project9.png';

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');
  const [particlesOn, setParticlesOn] = useState(true);
  const [textEffectOn, setTextEffectOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });
  const scrollContainerRef = useRef(null);

  const items = [
    { icon: <FiHome size={18} />, label: 'Home', onClick: () => setCurrentPage('home') },
    { icon: <FiUser size={18} />, label: 'Info', onClick: () => setCurrentPage('info') },
    { icon: <FiPackage size={18} />, label: 'Projects', onClick: () => setCurrentPage('projects') },
    { icon: <FiSettings size={18} />, label: 'Settings', onClick: () => setCurrentPage('settings') },
  ];

  const projectNames = [
    "Multi-Language OCR Translator",
    "...",
    "...",
    "Berkeley AI Projects",
    "HackRPI 2024 Website",
    "Call A Ride Platform",
    "Youtube Comment System",
    "HTML Search Engine",
    "..."
  ];

  const projectDesc = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const projectOverlayDesc = [
    "Python - EasyOCR & Deep Translator", 
    "",
    "",
    "Python - Searches, Inference, & RL", 
    "JavaScript - Web Dev with Animations",
    "C++ - Ride Platform with Linked Lists",
    "C++ - Tree-Based Optimization",
    "C++ - File Iterative Search",
    "",
  ];

  const CardImages = [
    Project1,
    Project8,
    Project9,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    Project9,
  ];

  const projectTemplates = projectNames.map((name, i) => ({
    id: i + 1,
    name,
    desc: projectDesc[i],
    overlaydesc: projectOverlayDesc[i],
    imageSrc: CardImages[i],
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(calc(-50% + ${mouse.x * 20}px), calc(-50% + ${mouse.y * 20}px))`,
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    pointerEvents: "none",
    zIndex: 2,
    transition: "transform 0.1s ease-out",
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", background: "black", overflow: "hidden" }}>
      {particlesOn && currentPage === 'home' && (
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="particles-layer"
        />
      )}

      <div style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 3 }}>
        <Dock items={items} />
      </div>

      <div style={{ height: '100vh', overflowY: 'auto', color: 'white', padding: 20 }}>
        {currentPage === 'home' && (
          <>
            <style>{`
              @font-face {
                font-family: 'Compressa VF';
                src: url('https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2');
              }
            `}</style>
            <div style={textStyle}>
              {textEffectOn ? (
                <TextPressure
                  text={`Welcome To My Website`}
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={36}
                />
              ) : (
                <div
                  style={{
                    color: 'white',
                    fontSize: '8rem',
                    fontWeight: 'bold',
                    fontFamily: 'Compressa VF',
                  }}
                >
                  Welcome To My Website
                </div>
              )}
            </div>
          </>
        )}

        {currentPage === 'info' && <InfoContent />}

        {currentPage === 'projects' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            justifyItems: 'center',
            padding: 20,
            marginTop: 50,
            marginBottom: 150,
          }}>
            {projectTemplates.map(({ id, name, desc, overlaydesc, imageSrc }) => (
              <TiltedCard
                key={id}
                imageSrc={imageSrc}
                altText={name}
                captionText={name}
                descriptionText={desc}
                descriptionOnImage={overlaydesc}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={<p style={{ color: 'white', fontWeight: 'bold' }}>{name}</p>}
                onClick={() => {
                  setModalData({
                    title: name,
                    content: (
                    <>
                      <p>{desc || `This is a detailed description for ${name}.`}</p>
                      <p><strong>Technologies:</strong></p>
                      <ul style={{ listStylePosition: "inside", paddingLeft: 0, textAlign: "left", display: "inline-block", margin: "0 auto" }}>
                        {(overlaydesc ? overlaydesc.split(',') : ["N/A"]).map((tech, i) => (
                          <li key={i}>{tech.trim()}</li>
                        ))}
                      </ul>
                    </>
                  )

                  });
                  setModalOpen(true);
                }}
              />
            ))}

            {modalOpen && (
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalData.title}
                content={modalData.content}
              />
            )}
          </div>
        )}



        {currentPage === 'settings' && (
          <>
            <div style={{ marginTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>Settings</h2>

              <label style={{ marginBottom: 20 }}>
                <input
                  type="checkbox"
                  checked={particlesOn}
                  onChange={() => setParticlesOn(!particlesOn)}
                  style={{ marginRight: 10 }}
                />
                Particles {particlesOn ? 'ON' : 'OFF'}
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={textEffectOn}
                  onChange={() => setTextEffectOn(!textEffectOn)}
                  style={{ marginRight: 10 }}
                />
                Text Effect {textEffectOn ? 'ON' : 'OFF'}
              </label>
            </div>

            <div
              style={{
                position: 'fixed',
                bottom: 10,
                left: 10,
                color: 'white',
                fontSize: '0.8rem',
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 1000,
              }}
            >
              Website created by William Cao
            </div>
          </>
        )}



        
      </div>
    </div>
  );
}

export default App;
