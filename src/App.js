import React, { useState, useEffect, useRef } from 'react';
import Dock from './Dock';
import Particles from "./Particles";
import TextPressure from './Pressure';
import InfoContent from './InfoContent';
import TiltedCard from './Card';
import Modal from './CardOut';

import { FiHome, FiPackage, FiUser, FiSettings, FiCheckCircle} from 'react-icons/fi';


import Project1 from './images/Project1.png';
import Project2 from './images/Project2.png';
import Project3 from './images/Project3.png';
import Project4 from './images/Project4.png';
import Project5 from './images/Project5.png';
import Project6 from './images/Project6.png';
import Project7 from './images/Project7.png';
import Project8 from './images/Project8.png';
import Project9 from './images/Project9.png';
import ProjectEmpty from './images/ProjectEmpty.png';

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');
  const [particlesOn, setParticlesOn] = useState(true);
  const [textEffectOn, setTextEffectOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState('');

  const items = [
    { icon: <FiHome size={18} />, label: 'Home', onClick: () => setCurrentPage('home') },
    { icon: <FiUser size={18} />, label: 'Info', onClick: () => setCurrentPage('info') },
    { icon: <FiPackage size={18} />, label: 'Projects', onClick: () => setCurrentPage('projects') },
    { icon: <FiSettings size={18} />, label: 'Settings', onClick: () => setCurrentPage('settings') },
  ];

  const projectNames = [
    <>Chaverse - Beyond Language <FiSettings style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>Language OCR Translator <FiSettings style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>Rock Paper Scissor Dungeon <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>Berkeley AI Projects <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>HackRPI 2024 Website <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>Call A Ride Platform <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>Youtube Comment System <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    <>HTML Search Engine <FiCheckCircle style={{ filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))"}} /></>,
    "",
  ];

  const hoverDesc = [
    "Chaverse - Beyond Language",
    "Language OCR Translator",
    "Rock Paper Scissor Dungeon",
    "Berkeley AI Projects",
    "HackRPI 2024 Website",
    "Call A Ride Platform",
    "Youtube Comment System",
    "HTML Search Engine",
    "Hello :)"
  ];

  const projectDesc = [
    "A real-time, multilingual thread-based chat platform built with React and Firebase. Users can create or join rooms via unique codes, send messages with auto-translation, dictate text via speech recognition, and share images. Features live participant tracking, profile customization, animated UI, and automatic room lifecycle management.",
    "Automates the translation of text in images by performing OCR, translating detected text, and replacing original text with translated text while preserving layout and style. Handles batch processing of images, dynamically adjusts fonts and colors for readability, and ensures efficient file I/O and error handling.",
    "Ever wanted to let your hands do the talking? In this game, that’s not a metaphor, you’ll literally be speaking to hands, fighting with goblins, and running into all sorts of oddball creatures as you crawl through dungeons. Built entirely solo, this Rock-Paper-Scissors card-battle adventure mixes strategy, loot, and progression. With original composed music, every battle feels alive, where every throw of rock, paper, or scissors could change your fate.",
    "AI Knowledge. ",
    "Designed and implemented a dynamic website for HackRPI 2024 using JavaScript, CSS, and interactive graphical animations. Collaborated with a team of organizers to integrate APIs and manage databases, enabling real-time profile handling and event updates.",
    "Developed a Uber-like simulation platform in C++ using linked lists and object-oriented design. Managed drivers and riders with classes, processed ride requests/cancellations, and calculated distances using the Haversine formula..",
    "Designed and implemented a C++ tree-based system to parse JSON-like YouTube comment data, build hierarchical comment trees, and process user commands (like, delete, reply, display) with dynamic updates and structured output.",
    "This C++ program recursively crawls local HTML files, searches for keywords, extracts metadata and snippets, calculates relevance scores using keyword density and backlinks, and outputs ranked search results.",
    "Hello :)",
  ];

  const projectOverlayDesc = [
    "June 2025 - Present", 
    "May 2025 - Present",
    "June 2025 - August 2025",
    "January 2025 - May 2025", 
    "November 2024 - December 2024",
    "January 2024 - March 2024",
    "November 2023 - December 2023",
    "November 2023 - December 2023",
    "",
  ];

  const skillsUsed = [
    // CHAVERSE BEYOND LANGUAGE
    "Frontend: React (hooks | state | refs | effects | CSS | dynamic canvas animations), " +
    "Realtime communication: Firebase Firestore (rooms | messages | participants), " +
    "Authentication: Firebase Auth (signup | login | email verification | persistent sessions), " +
    "Storage & file handling: Firebase Storage | FileReader (Base64 image uploads), " +
    "Translation layer: REST API fetch (timeouts | error handling | multilingual output), " +
    "Speech recognition: Web Speech API (dictation | continuous input | language switching), " +
    "UI/UX: Room codes | modal previews | original vs translated toggle | scroll anchoring, " +
    "Collaboration tools: User profiles (dictation language persistence | live participants display), " +
    "Error handling & optimization (aborted fetch | duplicate room prevention | auto-cleanup of empty rooms)", 

    // LANGUAGE OCR TRANSLATOR
    "Python (PIL | ImageDraw | ImageFont | OS | EasyOCR), " +
    "OCR processing (text detection | bounding box extraction | confidence filtering), " +
    "Translation (GoogleTranslator API | batch processing | source-target handling), " +
    "Image manipulation (cropping | color analysis | background adjustment | text overlay), " +
    "Font & layout management (dynamic sizing | positioning | fill color selection), " +
    "Automation & scripting (file I/O | folder traversal | batch saving), " +
    "Error handling & optimization (skip empty translations | bounding box adjustments | loop efficiency)",


    // ROCK PAPER SCISSOR DUNGEON
    "React.js (functional components | hooks | props/state management), " +
    "JavaScript (modules | higher-order functions | async logic), " +
    "Game logic architecture (turn-based phases | RPS rules | card abilities | cooldowns | buffs & debuffs), " +
    "Performance & debugging (memoization | batched updates), " +
    "UI/UX systems (backpack | tooltips | overlays | dialog flow), " +
    "Animation & effects (CSS transitions | hit & heal feedback | wave entries), " +
    "Persistence (localStorage for progress | coins | settings), " +
    "Testing & QA (edge cases | regression checks | deterministic seeds), " +
    "Version control and Project management (roadmapping), " +
    "Creative direction (UX flow | art style guidelines | narrative), " +
    "Original audio production (composition | recording | mixing | mastering | SFX design)",

    // AI
    "Python | AI algorithms | Informed search | Probabilistic inference, " +
    "Reinforcement learning | Simulation visualization | Algorithm optimization, " +
    "Data structures | State-space search | Problem-solving | Critical thinking",
    
    // HACK-RPI 2024 WEBSITE
    "JavaScript | CSS | HTML, " +
    "DOM manipulation | API integration | Database management, " +
    "Responsive design | JavaScript/CSS | Dynamic UI effects, " +
    "Project management | Team coordination | Adaptability | Creativity",
        
    // DRIVER APP
    "Object-Oriented Programming (Driver & Rider classes), " +
    "Operator overloading for structured output, " +
    "File I/O (ifstream | ofstream) for drivers/riders data, " +
    "Linked lists & iterators for dynamic data management, " +
    "Haversine formula for distance calculation, " +
    "Command handling (request | cancel), " +
    "State management for drivers & riders, " +
    "String parsing & validation (phone numbers, vehicle preferences), " +
    "Output formatting & structured printing",
    
    //YOUTUBE COMMENT SYSTEM
    "File I/O (ifstream | ofstream), " +
    "Custom JSON-like parsing (find | substr | erase), " +
    "Nested vector & tree data structures, " +
    "Tree construction (root | child | recursive replies), " +
    "Command parsing & execution (like | delete | reply | display), " +
    "State updates (likes | replies | hidden/deleted flags), " +
    "Duplicate-check prevention, " +
    "Dynamic memory management & cleanup, " +
    "Output formatting & structured printing, " +
    "Command-line argument handling",
    
    //HTML SEARCH ENGINE
    "File I/O (ifstream | ofstream), " +
    "String parsing (find | substr | erase), " +
    "Regex link extraction (std::regex), " +
    "Recursive search & crawling, " +
    "STL containers (list | vector | map), " +
    "Custom comparator, " +
    "Keyword density scoring, " +
    "Edge case handling, " +
    "HTML parsing (title | h1 | meta | body), " +
    "Command-line argument handling",

    "N/A",
  ];

  const CardImages = [
    Project8,
    Project1,
    Project9,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    ProjectEmpty,
  ];

  const projectTemplates = projectNames.map((name, i) => ({
    id: i + 1,
    name,
    hoverDesc: hoverDesc[i],
    desc: projectDesc[i],
    overlaydesc: projectOverlayDesc[i],
    imageSrc: CardImages[i],
    skills: skillsUsed[i],
  }));

  // Handle mouse movement to update mouse state for text effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Loading timer for 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);

    const dotsInterval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotsInterval);
    };
  }, []);

  const loadingStyle = {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  if (loading) {
  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Compressa VF';
          src: url('https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2');
        }
      `}</style>
      <div style={{
        ...loadingStyle,
        fontFamily: "'Compressa VF', sans-serif", 
      }}>
        Loading{loadingDots}
      </div>
    </>
  );
}

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
            {projectTemplates.map(({ id, name, hoverDesc, desc, overlaydesc, imageSrc, skills}) => (
              <TiltedCard
                key={id}
                imageSrc={imageSrc}
                altText={name}
                captionText={hoverDesc}
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
                        <p><strong>Skills Used:</strong></p>
                        <ul style={{ listStylePosition: "inside", paddingLeft: 0, textAlign: "left", display: "inline-block", margin: "0 auto" }}>
                          {(skills ? skills.split(',') : ["N/A"]).map((tech, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                              {tech.trim()}
                            </li>
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
