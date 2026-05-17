import React from 'react';
import { ParallaxComponent } from './ui/parallax-scrolling';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full">
      <ParallaxComponent />
    </section>
  );
};

export default Hero;
