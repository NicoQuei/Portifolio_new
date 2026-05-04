import React, { useEffect, useState } from 'react';

// SVG de uma folha de plátano (Maple Leaf) simples e elegante
const MapleLeaf = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.7 1.2c-.4-.4-1.1-.4-1.5 0l-2.4 2.8-3.5-1.2c-.5-.2-1.1 0-1.4.5L2 6.5c-.3.4-.3 1 0 1.4l2.5 2.5L2.2 12c-.5.1-.9.6-.8 1.1l.5 3.5c.1.5.6.8 1.1.7l3.8-1 1.7 3.5c.2.4.8.6 1.3.4l2.2-1.2v3.8c0 .6.4 1 1 1s1-.4 1-1v-3.8l2.2 1.2c.4.2 1 .1 1.3-.4l1.7-3.5 3.8 1c.5.1 1-.2 1.1-.7l.5-3.5c.1-.5-.3-1-.8-1.1l-2.3-1.6 2.5-2.5c.3-.4.3-1 0-1.4l-1.9-3.2c-.3-.5-.9-.7-1.4-.5l-3.5 1.2-2.4-2.8z" />
  </svg>
);

interface LeafProp {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
  opacity: number;
  rotationDuration: string;
  dir: number; // 1 for right, -1 for left
}

const FallingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<LeafProp[]>([]);

  useEffect(() => {
    // Gerar 25 folhas com propriedades aleatórias
    const generatedLeaves = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 15}s`, // Cai devagar: 10s a 25s
      animationDelay: `-${Math.random() * 20}s`, // Começa em tempos diferentes (negativo para já estar na tela)
      size: 10 + Math.random() * 25, // Tamanho de 10px a 35px
      opacity: 0.1 + Math.random() * 0.4, // Transparência de 0.1 a 0.5
      rotationDuration: `${5 + Math.random() * 10}s`, // Rotação de 5s a 15s
      dir: Math.random() > 0.5 ? 1 : -1
    }));
    
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1 // Na frente da imagem, mas atrás do texto (pois o container pai tem zIndex -2)
    }}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-leaf"
          style={{
            position: 'absolute',
            left: leaf.left,
            top: '-50px',
            opacity: leaf.opacity,
            color: 'white',
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationName: 'fallAndSway',
            animationDuration: leaf.animationDuration,
            animationDelay: leaf.animationDelay,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            // Variável CSS customizada para a animação balançar diferente
            '--sway-dir': leaf.dir,
          } as React.CSSProperties}
        >
          <MapleLeaf style={{
            width: '100%', height: '100%',
            animation: `spin ${leaf.rotationDuration} linear infinite`,
            animationDirection: leaf.dir > 0 ? 'normal' : 'reverse'
          }} />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
