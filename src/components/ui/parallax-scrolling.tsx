'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-transparent overflow-hidden" ref={parallaxRef}>
      <section className="relative w-full h-[170vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="absolute top-[-100px] w-full h-[100px] bg-transparent z-50"></div>
          
          <div data-parallax-layers className="absolute inset-0 w-full h-full">
            {/* Layer 1 — Foto real de praia tropical */}
            <img
              src="https://static.vecteezy.com/ti/fotos-gratis/p2/1229269-paisagem-vista-da-praia-tropical-gratis-foto.jpg"
              loading="eager"
              data-parallax-layer="1"
              alt=""
              className="absolute bottom-0 left-0 w-full h-[120%] object-cover object-center pointer-events-none opacity-50"
            />

            {/* Layer 2 — Overlay para contraste do texto */}
            <div
              data-parallax-layer="2"
              className="absolute bottom-0 left-0 w-full h-[120%] pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black/80"
            />

            {/* Layer 3 — Texto */}
            <div data-parallax-layer="3" className="absolute inset-0 flex flex-col items-center justify-center pb-[45vh] z-10 pointer-events-none">
              <h2 className="font-display text-[4rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                Nicolas
              </h2>
              <span className="mt-5 font-display text-sm md:text-lg font-medium tracking-[0.3em] uppercase text-white/80 drop-shadow-lg">
                Desenvolvedor Web
              </span>
            </div>

            {/* Layer 4 — Silhueta frontal original */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt=""
              className="absolute bottom-[-30%] left-0 w-full h-[120%] object-cover object-bottom pointer-events-none z-20"
            />
          </div>
          
          {/* Fade to background color at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-black/80 to-transparent z-30 pointer-events-none"></div>
        </div>
      </section>
      
    </div>
  );
}
