import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import './About.css'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="about-section" id="empresa" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Images block */}
          <motion.div
            className="about-visuals"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-img-main-wrap">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
                alt="Equipe MOLTE"
                className="about-img-main"
              />
            </div>
            <div className="about-img-secondary-wrap">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
                alt="Execução de alto padrão"
                className="about-img-secondary"
              />
              <div className="about-badge">
                <strong>20+</strong>
                <span>Anos de Legado</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Quem Somos</p>
            <h2 className="section-title">
              Muito além de<br /><em>apertar parafusos.</em>
            </h2>

            <p className="section-body">
              A MOLTE nasceu para resolver uma dor real no mercado: projetos arquitetônicos brilhantes que perdem o impacto por conta de montagens amadoras. Fundada dentro do Grupo Mobiano — 20 anos de referência em móveis planejados de alto padrão — trouxemos todo esse DNA de excelência para a engenharia da execução.
            </p>
            <p className="section-body" style={{ marginTop: '1rem' }}>
              Nossas equipes são técnicos especializados que chegam ao canteiro de obras uniformizados, com ferramentas calibradas, EPIs completos e a planta executiva em mãos. Sabemos ler um projeto arquitetônico. Sabemos o que o seu arquiteto quis dizer.
            </p>

            <div className="about-checks">
              {[
                'Equipe CLT — sem terceirizados.',
                'Ferramentas de torque calibrado e nível a laser.',
                'Limpeza pós-obra: entregamos pronto para uso.',
                'Atendimento exclusivo em São Paulo e ABCD.',
              ].map((c, i) => (
                <div key={i} className="about-check-item">
                  <span className="about-check-icon">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <a
                href="https://www.mobiano.com.br"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-line"
              >
                Conhecer o Grupo Mobiano <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Founder quote */}
            <div className="about-quote">
              <p className="about-quote-text serif italic">
                "O detalhe não é apenas um detalhe — é o design. Na MOLTE, nenhum detalhe fica ao acaso."
              </p>
              <span className="about-quote-author">Antônio Costa Dcôr — Fundador, Grupo Mobiano</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
