"use client";
import Marquee from "react-fast-marquee";

const MarqueeText = ({
  text = "Your marquee text goes here",
  speed = 50,
  pauseOnHover = true,
  gradient = false,
  className = "",
  direction = "left",
  children,
}) => {
  return (
    <Marquee
      speed={speed}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      direction={direction}
      className={className}
    >
      {children ? children : <span>{text}</span>}
    </Marquee>
  );
};

export default MarqueeText;
