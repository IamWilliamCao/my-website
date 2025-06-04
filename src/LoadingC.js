import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "./LoadingC.css";

const getRotationTransition = (duration, from, to, loop = true) => ({
  from: from,
  to: to,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from, to) => ({
  rotate: getRotationTransition(duration, from, to),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "reverse", // changed default to reverse for clarity
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation, currentRotation + 360),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    switch (onHover) {
      case "reverse":
        controls.start({
          rotate: currentRotation - 360,  // rotate backwards
          scale: 1,
          transition: getTransition(spinDuration, currentRotation, currentRotation - 360),
        });
        break;
      // You can keep other cases if you want
      default:
        break;
    }
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,  // back to forward rotation
      scale: 1,
      transition: getTransition(spinDuration, currentRotation, currentRotation + 360),
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`circular-text ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
