import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react'
import './Cta.css'

export default function Cta() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="cta-section" id="contato" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-glow" />
          <p className="section-label" style={{ justifyContent: 'center' }}>Pronto para começar?</p>
          <h2 className="cta-title">
            Tem um projeto<br />
            <em className="serif gold">A MOLTE executa.</em>
          </h2>
          <p className="cta-desc">
            Solicite uma vistoria técnica gratuita. Nossa equipe entra em contato em até 2 horas úteis.
          </p>
          <div className="cta-actions">
            <a
              href="https://api.whatsapp.com/send/?phone=5511961880078&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20MOLTE%20e%20gostaria%20de%20solicitar%20uma%20vistoria%20t%C3%A9cnica%20gratuita."
              target="_blank"
              rel="noreferrer"
              className="btn btn-wpp"
              style={{ fontSize: '1rem', padding: '1.2rem 2.8rem' }}
            >
              <WhatsappLogo size={22} weight="fill" />
              Solicitar Vistoria Gratuita via WhatsApp
            </a>
            <a
              href="mailto:contato@mobiano.com.br"
              className="btn btn-outline"
              style={{ fontSize: '1rem', padding: '1.2rem 2.8rem' }}
            >
              Enviar e-mail <ArrowRight size={18} />
            </a>
          </div>
          <div className="cta-trust">
            <span>✓ Resposta em até 2h</span>
            <span>✓ Vistoria 100% gratuita</span>
            <span>✓ Sem compromisso</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
