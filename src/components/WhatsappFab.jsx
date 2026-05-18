import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { WhatsappLogo, X } from '@phosphor-icons/react'
import './WhatsappFab.css'

export default function WhatsappFab() {
  const [tooltip, setTooltip] = useState(true)

  return (
    <div className="fab-wrap">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="fab-tooltip"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="fab-tooltip-close" onClick={() => setTooltip(false)}>
              <X size={14} />
            </button>
            <strong>Orçamento Rápido</strong>
            <span>Resposta em até 2 horas úteis</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://api.whatsapp.com/send/?phone=5511961880078&text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20da%20MOLTE."
        target="_blank"
        rel="noreferrer"
        className="fab-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <WhatsappLogo size={28} weight="fill" />
      </motion.a>
    </div>
  )
}
