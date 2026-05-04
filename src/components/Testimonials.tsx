import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'CTO na TechCorp',
      text: 'Trabalhar com o Nicolas foi uma excelente experiência. Ele conseguiu reescrever nosso back-end legado, reduzindo custos de servidor em 30% e tornando a API muito mais rápida.'
    },
    {
      name: 'Maria Oliveira',
      role: 'Product Manager',
      text: 'Raramente vejo um desenvolvedor tão preocupado com a experiência do usuário. O código dele não apenas funciona perfeitamente, mas a interface final é sempre linda e responsiva.'
    },
    {
      name: 'Carlos Santos',
      role: 'Tech Lead na Agência Digital',
      text: 'O Nicolas tem uma capacidade incrível de resolver problemas complexos rapidamente. Ajudou muito a equipe a adotar boas práticas de Clean Code e testes automatizados.'
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '8rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            O que <span style={{ color: 'var(--text-muted)' }}>dizem</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel scroll-animate" style={{ 
              padding: '2.5rem', 
              position: 'relative',
              transition: 'border-color 0.2s ease, background 0.2s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = '#444';
              e.currentTarget.style.background = 'var(--surface-hover)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            >
              <Quote size={32} color="var(--border-color)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.5 }} />
              
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                "{testimonial.text}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', fontWeight: 600, fontSize: '1.2rem' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 500 }}>{testimonial.name}</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
