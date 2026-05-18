import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import {
  OfficeChair,
  MapPin,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from '@phosphor-icons/react'
import './Services.css'

const services = [
  {
    id: '01',
    icon: <OfficeChair size={32} weight="duotone" />,
    title: 'Montagem de Mobiliário Corporativo',
    tagline: 'Do parafuso ao acabamento perfeito.',
    desc: 'Montamos qualquer sistema de mobiliário: estações de trabalho, mesas de diretoria, painéis acústicos, armários, recepções e ambientes completos. Trabalhamos com as maiores marcas do mercado — Herman Miller, Giroflex, Milani — seguindo o projeto executivo à risca.',
    list: [
      'Leitura e interpretação de planta baixa',
      'Nivelamento a laser em cada superfície',
      'Ferramentas de torque calibrado',
      'Limpeza total pós-montagem',
    ],
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '02',
    icon: <MapPin size={32} weight="duotone" />,
    title: 'Comunicação Visual',
    tagline: 'Sua marca no espaço com perfeição.',
    desc: 'Instalamos a identidade visual no ambiente físico: logotipos em relevo, letreiros iluminados, fachadas, totens de sinalização, adesivação de vidros e painéis de marca. Cada elemento é posicionado com alinhamento milimétrico.',
    list: [
      'Medição a laser antes da instalação',
      'Fixação estrutural e oculta',
      'Acabamento de nível arquitetônico',
      'Garantia de 12 meses na instalação',
    ],
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '03',
    icon: <Wrench size={32} weight="duotone" />,
    title: 'Pré-instalação Técnica',
    tagline: 'Eliminamos imprevistos antes que existam.',
    desc: 'Nossa equipe visita o espaço antes da obra. Medição completa, mapeamento de riscos estruturais, alinhamento com outros empreiteiros, acesso de carga e cronograma detalhado. Esta etapa custa zero e economiza semanas.',
    list: [
      'Vistoria técnica presencial gratuita',
      'Relatório de riscos e interferências',
      'Alinhamento com outros fornecedores',
      'Cronograma executivo detalhado',
    ],
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '04',
    icon: <ShieldCheck size={32} weight="duotone" />,
    title: 'Pós-venda e Manutenção',
    tagline: 'Presença que vai além da entrega.',
    desc: 'Entregamos e continuamos presentes. Realizamos visitas de verificação, ajustes finos de ferragens, regulagem de portas e gavetas, e manutenção preventiva periódica para garantir que o ambiente permaneça impecável.',
    list: [
      'Visita de verificação 30 dias pós-entrega',
      'Contrato de manutenção mensal disponível',
      'Resposta em até 24h para chamados urgentes',
      'Equipe permanente em São Paulo',
    ],
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="services-section" id="servicos" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header-row"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="section-label">O que fazemos</p>
            <h2 className="section-title">
              Expertise em cada<br /><em>detalhe da obra.</em>
            </h2>
          </div>
          <p className="section-body">
            Não somos apenas montadores. Somos especialistas que leem projetos arquitetônicos com fluência e tratam cada ambiente como uma obra de arte.
          </p>
        </motion.div>

        <div className="svc-layout">
          {/* Tab nav */}
          <motion.div
            className="svc-tabs"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {services.map((s, i) => (
              <button
                key={i}
                className={`svc-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="svc-tab-num">{s.id}</span>
                <span className="svc-tab-title">{s.title}</span>
                <span className="svc-tab-arrow"><ArrowRight size={16} /></span>
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="svc-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="svc-panel-img-wrap">
                <img src={services[active].img} alt={services[active].title} className="svc-panel-img" />
                <div className="svc-panel-img-overlay" />
                <div className="svc-panel-icon">{services[active].icon}</div>
              </div>
              <div className="svc-panel-text">
                <p className="svc-tagline">{services[active].tagline}</p>
                <h3 className="svc-panel-title">{services[active].title}</h3>
                <p className="svc-panel-desc">{services[active].desc}</p>
                <ul className="svc-panel-list">
                  {services[active].list.map((item, j) => (
                    <li key={j}>
                      <span className="svc-check">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511961880078"
                  className="btn btn-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar este serviço <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
