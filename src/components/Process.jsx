import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Process.css'

const steps = [
  {
    n: '01',
    title: 'Vistoria Técnica Gratuita',
    desc: 'Nossa equipe vai ao espaço antes de qualquer proposta. Medição a laser, análise de acesso de carga, leitura da planta executiva e identificação de interferências. Zero custo, máxima inteligência.',
    detail: 'Entendemos o projeto antes de precificar.',
  },
  {
    n: '02',
    title: 'Proposta e Cronograma',
    desc: 'Enviamos proposta detalhada por serviço, com cronograma dia a dia. Você sabe exatamente o que será feito em cada etapa, quando e por quem. Sem surpresas.',
    detail: 'Transparência total do início ao fim.',
  },
  {
    n: '03',
    title: 'Execução Tática',
    desc: 'Nossa equipe executa com ferramentas de precisão e EPIs completos. Controlamos cada etapa: montagem, alinhamento, torque, nivelamento. Limpeza constante do ambiente durante a obra.',
    detail: 'Segurança, velocidade, perfeição.',
  },
  {
    n: '04',
    title: 'Checklist e Entrega Formal',
    desc: 'Realizamos um checklist rigoroso em cada peça: aperto de parafusos, alinhamento de portas e gavetas, verificação de comunicação visual. Entrega fotográfica e formal do ambiente.',
    detail: 'O ambiente entregue supera a expectativa.',
  },
  {
    n: '05',
    title: 'Pós-venda Garantido',
    desc: 'Retornamos 30 dias após a entrega para uma visita de verificação. Ajustes finos, regulagem e qualquer correção necessária são realizados sem custo adicional dentro da garantia.',
    detail: 'Nossa relação não termina na entrega.',
  },
]

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="process-section" id="processo" ref={ref}>
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Como Trabalhamos</p>
          <h2 className="section-title">
            Metodologia que<br /><em>elimina imprevistos.</em>
          </h2>
        </motion.div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="proc-step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="proc-step-left">
                <span className="proc-n">{s.n}</span>
              </div>
              <div className="proc-step-right">
                <h3 className="proc-title">{s.title}</h3>
                <p className="proc-desc">{s.desc}</p>
                <span className="proc-detail">{s.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
