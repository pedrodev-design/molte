import { InstagramLogo, WhatsappLogo, Globe, MapPin, Envelope, Phone } from '@phosphor-icons/react'
import './Footer.css'

export default function Footer() {
  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="ft-brand">
          <a href="#" className="ft-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            MOLTE<span className="gold">.</span>
          </a>
          <p className="ft-tagline serif italic">
            "A execução que representa a sua marca."
          </p>
          <div className="ft-contact-list">
            <a href="https://api.whatsapp.com/send/?phone=5511961880078" target="_blank" rel="noreferrer" className="ft-contact-item">
              <Phone size={16} /> +55 (11) 96188-0078
            </a>
            <a href="mailto:contato@mobiano.com.br" className="ft-contact-item">
              <Envelope size={16} /> contato@mobiano.com.br
            </a>
            <span className="ft-contact-item">
              <MapPin size={16} /> Rua David Ben Gurion, 412 — São Paulo, SP
            </span>
          </div>
          <div className="ft-socials">
            <a href="https://www.instagram.com/mobianooficial/" target="_blank" rel="noreferrer" className="ft-social-btn">
              <InstagramLogo size={20} weight="fill" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5511961880078" target="_blank" rel="noreferrer" className="ft-social-btn">
              <WhatsappLogo size={20} weight="fill" />
            </a>
            <a href="https://www.mobiano.com.br" target="_blank" rel="noreferrer" className="ft-social-btn">
              <Globe size={20} weight="fill" />
            </a>
          </div>
        </div>

        <div className="ft-nav">
          <h4 className="ft-nav-title">Navegação</h4>
          <ul>
            {[
              ['Serviços', '#servicos'],
              ['Projetos', '#portfolio'],
              ['Processo', '#processo'],
              ['A Empresa', '#empresa'],
              ['Contato', '#contato'],
            ].map(([label, id]) => (
              <li key={id}>
                <button className="ft-nav-link" onClick={() => scroll(id)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-nav">
          <h4 className="ft-nav-title">Serviços</h4>
          <ul>
            {[
              'Montagem Corporativa',
              'Comunicação Visual',
              'Pré-instalação',
              'Pós-venda',
              'Vistoria Técnica',
            ].map((s) => (
              <li key={s}><span className="ft-nav-link">{s}</span></li>
            ))}
          </ul>
        </div>

        <div className="ft-nav">
          <h4 className="ft-nav-title">Grupo Mobiano</h4>
          <ul>
            <li>
              <a href="https://www.mobiano.com.br" target="_blank" rel="noreferrer" className="ft-nav-link">
                Site da Mobiano ↗
              </a>
            </li>
            <li><span className="ft-nav-link mute">Móveis Planejados de Luxo</span></li>
            <li><span className="ft-nav-link mute">20 anos de mercado</span></li>
            <li><span className="ft-nav-link mute">6.000+ projetos entregues</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 MOLTE — Grupo Mobiano. Fundado por <strong>Antônio Costa Dcôr</strong>. Todos os direitos reservados.</p>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  )
}
