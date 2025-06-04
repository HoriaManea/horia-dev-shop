import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const scrollInstance = useRef(null);

  useEffect(() => {
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.03, // scroll inertial mai lent
      multiplier: 0.5,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Setup ScrollTrigger scroller proxy să folosească LocomotiveScroll
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollInstance.current.scrollTo(value, 0, 0);
        }
        return scrollInstance.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // Pinning fix pentru LocomotiveScroll
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    // Actualizează ScrollTrigger la update scroll
    scrollInstance.current.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger după inițializare și la resize
    ScrollTrigger.addEventListener("refresh", () =>
      scrollInstance.current.update()
    );
    ScrollTrigger.refresh();

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        scrollInstance.current.update()
      );
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (scrollInstance.current) scrollInstance.current.update();
      ScrollTrigger.refresh();
    }, 500);
  }, [location.pathname]);

  return (
    <div id="main-scroll-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollProvider;
