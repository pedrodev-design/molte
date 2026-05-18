import './Marquee.css'

const items = [
  'Montagem Corporativa',
  'Comunicação Visual',
  'Pré-Instalação Técnica',
  'Pós-Venda Premium',
  'Mobiliário de Alto Padrão',
  'Grupo Mobiano',
  '20 Anos de Legado',
  '6.000+ Projetos',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
