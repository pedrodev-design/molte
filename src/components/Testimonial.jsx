import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'
import './Testimonial.css'

const testimonials = [
  {
    quote: 'A MOLTE foi a melhor decisão do nosso projeto. Entregaram os 3 andares dentro do prazo e cada detalhe estava perfeito. Nenhum móvel precisou de ajuste.',
    author: 'Mariana F.',
    role: 'Gestora de Facilities — Fintech, Faria Lima',
    initials: 'MF',
  },
  {
    quote: 'Contratei a MOLTE para a vistoria técnica antes de fechar com o marceneiro. O relatório que eles trouxeram economizou duas semanas de retrabalho. Profissionalismo absoluto.',
    author: 'Ricardo L.',
    role: 'Sócio Fundador — Escritório de Advocacia, Itaim',
    initials: 'RL',
  },
  {
    quote: 'O letreiro da nossa sede ficou milimétrico. Já tivemos instaladores antes que deixaram o logotipo torto. Com a MOLTE, nem precisei conferir — sabia que estava certo.',
    author: 'Camila O.',
    role: 'Head of Brand — Startup, Vila Olímpia',
    initials: 'CO',
  },
]

export default function Testimonial() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="testimonial-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Depoimentos</p>
          <h2 className="section-title" style={{ marginBottom: '5rem' }}>
            Quem já confiou<br /><em>na MOLTE.</em>
          </h2>
        </motion.div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quotes size={32} weight="fill" className="testimonial-icon" />
              <p className="testimonial-quote serif italic">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <strong className="testimonial-name">{t.author}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
