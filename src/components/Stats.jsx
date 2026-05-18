import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Stats.css'

const stats = [
  { number: '6.000+', label: 'Projetos entregues', sub: 'No Grupo Mobiano & MOLTE' },
  { number: '20+',    label: 'Anos de legado',     sub: 'Fundado por Antônio Costa Dcôr' },
  { number: '500+',   label: 'Ambientes montados', sub: 'Corporativos de alto padrão' },
  { number: '100%',   label: 'Equipe própria',     sub: 'Sem terceirizados' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="stat-num">{s.number}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-sub">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
