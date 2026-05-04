import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Como otimizei o carregamento de imagens no React',
      category: 'Performance',
      date: '12 Out 2025',
      desc: 'Um estudo de caso detalhado sobre lazy loading, formato WebP e a nova tag picture no Next.js.',
      readTime: '5 min de leitura'
    },
    {
      title: 'Entendendo a Arquitetura Serverless em 2026',
      category: 'Back-end',
      date: '05 Set 2025',
      desc: 'Os prós, contras e quando vale a pena migrar sua API tradicional para AWS Lambda ou Vercel Functions.',
      readTime: '8 min de leitura'
    },
    {
      title: 'Clean Code: O que realmente importa',
      category: 'Engenharia',
      date: '22 Ago 2025',
      desc: 'Esquecendo dogmas e focando em manutenibilidade. Como escrever código que sua equipe vai amar ler.',
      readTime: '6 min de leitura'
    }
  ];

  return (
    <section id="blog" style={{ padding: '8rem 2rem', background: 'var(--bg-color)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scroll-animate" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Artigos & <span style={{ color: 'var(--text-muted)' }}>Estudos</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {posts.map((post, index) => (
            <a href="#" key={index} className="glass-panel scroll-animate" style={{ 
              padding: '2.5rem', 
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = '#444';
              e.currentTarget.style.background = 'var(--surface-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.3rem 0.8rem', background: 'var(--text-main)', color: 'var(--bg-color)', borderRadius: '4px' }}>
                  {post.category}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={14} /> {post.readTime}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {post.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                {post.desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{post.date}</span>
                <span style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  Ler Artigo <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
