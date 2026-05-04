import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educations = [
    {
      type: 'degree',
      title: 'Ciência da Computação',
      institution: 'Universidade Tecnológica',
      period: '2017 - 2021',
      desc: 'Bacharelado com foco em Engenharia de Software, Estruturas de Dados e Arquitetura de Sistemas.'
    },
    {
      type: 'cert',
      title: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2023',
      desc: 'Certificação avançada em design e deploy de sistemas escaláveis na nuvem AWS.'
    },
    {
      type: 'bootcamp',
      title: 'Bootcamp Full Stack Ignite',
      institution: 'Rocketseat',
      period: '2022',
      desc: 'Especialização intensiva em React, Node.js e ecossistema TypeScript.'
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'degree': return <GraduationCap size={14} />;
      case 'cert': return <Award size={14} />;
      default: return <BookOpen size={14} />;
    }
  };

  return (
    <section id="education" style={{ padding: '8rem 2rem', background: 'var(--bg-color)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Formação & <span style={{ color: 'var(--text-muted)' }}>Certificados</span>
          </h2>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Linha vertical do tempo */}
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            top: '1rem', 
            bottom: '1rem', 
            width: '1px', 
            background: 'var(--border-color)' 
          }}></div>

          {educations.map((edu, index) => (
            <div key={index} className="scroll-animate" style={{ position: 'relative', marginBottom: index === educations.length - 1 ? 0 : '4rem' }}>
              {/* Ponto na linha do tempo */}
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0.25rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateX(-50%)',
                color: 'var(--text-main)'
              }}>
                {getIcon(edu.type)}
              </div>

              {/* Conteúdo */}
              <div className="glass-panel" style={{ padding: '2rem', transition: 'border-color 0.2s ease, background 0.2s ease' }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = '#444';
                  e.currentTarget.style.background = 'var(--surface-hover)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{edu.title}</h3>
                    <span style={{ color: 'var(--text-main)', opacity: 0.8, fontSize: '0.95rem', fontWeight: 500 }}>{edu.institution}</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
