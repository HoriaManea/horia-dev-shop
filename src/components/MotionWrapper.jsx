// src/components/MotionWrapper.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const MotionWrapper = styled(motion.div)`
  position: relative;
  will-change: opacity, transform;
  /* Glow subtil, fără afectarea layoutului */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  /* Optional: efect de sweep light cu pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    filter: blur(30px);
    animation: sweepLight 1.8s ease-in-out forwards; /* RUN ONCE and KEEP END STATE */
    border-radius: inherit;
    z-index: 10;
  }
  @keyframes sweepLight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default MotionWrapper;
