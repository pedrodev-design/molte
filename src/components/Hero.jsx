import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from '@phosphor-icons/react'
import './Hero.css'

const sentence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const word = {
  hidden: { y: '110%', opacity: 0, rotateZ: 5 },
  visible: { y: '0%', opacity: 1, rotateZ: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <div className="hero-video-wrap">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=2400&auto=format&fit=crop"
        >
          {/* We use an architecture/office related high quality video */}
          <source src="https://cdn.coverr.co/videos/coverr-modern-office-building-in-the-city-4328/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content container-wide">
        <div className="hero-main-area">
          <motion.div
            className="hero-badge-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge-header">
              <span className="live-dot" /> Grupo Mobiano
            </div>
            <div className="badge-body">
              <strong>6k+</strong> Projetos Executados
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            <span className="line-wrap"><motion.span variants={word}>DA PLANTA AO</motion.span></span>
            <span className="line-wrap italic-line">
              <motion.em className="serif" variants={word}>Extraordinário.</motion.em>
            </span>
          </motion.h1>

          <motion.div
            className="hero-desc-area"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-desc">
              A engenharia da montagem corporativa de alto padrão. Materializamos projetos complexos com precisão técnica milimétrica.
            </p>
            <a
              href="#portfolio"
              className="btn-ghost-line mt-2"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explorar Obras <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  )
}
