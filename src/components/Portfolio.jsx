import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Portfolio.css'

const projects = [
  {
    title: 'Sede Corporativa',
    sub: 'Faria Lima, São Paulo',
    tag: 'Montagem Completa',
    detail: '3 andares · 280 estações de trabalho · 12 dias de execução',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
    color: '#1a1308',
  },
  {
    title: 'Escritório Boutique',
    sub: 'Itaim Bibi, São Paulo',
    tag: 'Comunicação Visual',
    detail: 'Letreiro de recepção · Fachada · Adesivação arquitetônica',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop',
    color: '#0a1018',
  },
  {
    title: 'Centro Empresarial',
    sub: 'Alphaville, Barueri',
    tag: 'Alto Padrão',
    detail: 'Sala presidência · Mesa 8m · Painéis acústicos premium',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
    color: '#0f0f0a',
  },
  {
    title: 'Tech Hub',
    sub: 'Vila Olímpia, São Paulo',
    tag: 'Logística Complexa',
    detail: '200+ estações · Execução noturna · 6 dias consecutivos',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
    color: '#0a1510',
  },
  {
    title: 'Loja Conceito',
    sub: 'Oscar Freire, São Paulo',
    tag: 'Varejo de Luxo',
    detail: 'Vitrine · Expositores · Mobiliário de loja exclusivo',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop',
    color: '#10080a',
  },
]

export default function Portfolio() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="portfolio-section" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header-row"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="section-label">Nossos Projetos</p>
            <h2 className="section-title">
              Obras que<br /><em>assinamos.</em>
            </h2>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5511961880078"
            className="btn-ghost-line"
            target="_blank"
            rel="noreferrer"
          >
            Ter um projeto assim <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Desktop list */}
      <motion.div
        className="port-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className={`port-row ${hoveredIdx === i ? 'hovered' : ''} ${hoveredIdx !== null && hoveredIdx !== i ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="port-row-left">
              <span className="port-row-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="port-row-info">
                <h3 className="port-row-title">{p.title}</h3>
                <span className="port-row-sub">{p.sub}</span>
              </div>
            </div>
            <div className="port-row-center">
              <span className="port-row-tag">{p.tag}</span>
              <span className="port-row-detail">{p.detail}</span>
            </div>
            <div className="port-row-right">
              <div className="port-row-img-wrap">
                <img src={p.img} alt={p.title} className="port-row-img" />
              </div>
              <span className="port-row-arrow"><ArrowUpRight size={20} /></span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mobile Swiper */}
      <div className="port-swiper-wrap">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={false}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 1.6 } }}
          className="port-swiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="port-card">
                <div className="port-card-img-wrap">
                  <img src={p.img} alt={p.title} className="port-card-img" />
                  <div className="port-card-overlay" />
                </div>
                <div className="port-card-body">
                  <span className="port-card-tag">{p.tag}</span>
                  <h3 className="port-card-title">{p.title}</h3>
                  <p className="port-card-sub">{p.sub}</p>
                  <p className="port-card-detail">{p.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
