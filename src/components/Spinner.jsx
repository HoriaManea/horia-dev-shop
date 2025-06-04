import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Spinner = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cube", {
        rotateY: 360,
        rotateX: 360,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
      });
    }, spinnerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={styles.overlay} ref={spinnerRef}>
      <div style={styles.scene}>
        <div className="cube" style={styles.cube}>
          <div style={{ ...styles.face, ...styles.front }}>F</div>
          <div style={{ ...styles.face, ...styles.back }}>B</div>
          <div style={{ ...styles.face, ...styles.right }}>R</div>
          <div style={{ ...styles.face, ...styles.left }}>L</div>
          <div style={{ ...styles.face, ...styles.top }}>T</div>
          <div style={{ ...styles.face, ...styles.bottom }}>B</div>
        </div>
      </div>
      <p style={styles.text}>Loading your fashion universe...</p>
    </div>
  );
};

const cubeSize = 100;
const faceStyle = {
  position: "absolute",
  width: `${cubeSize}px`,
  height: `${cubeSize}px`,
  backgroundColor: "#FF6F61",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: 24,
  opacity: 0.9,
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  scene: {
    width: `${cubeSize}px`,
    height: `${cubeSize}px`,
    perspective: "800px",
  },
  cube: {
    width: `${cubeSize}px`,
    height: `${cubeSize}px`,
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "rotateX(0deg) rotateY(0deg)",
  },
  face: {
    ...faceStyle,
  },
  front: { transform: `rotateY(0deg) translateZ(${cubeSize / 2}px)` },
  back: { transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)` },
  right: { transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)` },
  left: { transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)` },
  top: { transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)` },
  bottom: { transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)` },
  text: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: 500,
    color: "#333",
    letterSpacing: "1px",
  },
};

export default Spinner;
