import { useEffect, useState } from 'react'
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import './styles.css'
import { agents, currentAgent, nextAgent, projects, recentBuilds } from './data'

const categories = [
  { name: 'Foundations', range: '01–03', className: 'node--green', icon: '◫' },
  { name: 'Knowledge + Evidence', range: '04–06', className: 'node--blue', icon: '▦' },
  { name: 'Tools + Workflows', range: '07–09', className: 'node--cyan', icon: '⌘' },
  { name: 'Decentralized Systems', range: '10–13', className: 'node--orange', icon: '⬡' },
  { name: 'Reasoning + Simulation', range: '14–17', className: 'node--gold', icon: '◎' },
  { name: 'Software Engineering', range: '18–20', className: 'node--violet', icon: '</>' },
  { name: 'Human Systems', range: '21–23', className: 'node--pink', icon: '◉' },
  { name: 'Multimodal + Physical', range: '24–26', className: 'node--red', icon: '◈' },
  { name: 'Safety + Intelligence', range: '27–30', className: 'node--purple', icon: '◇' },
]


const quickCommands = [
  { label: 'Agents', detail: 'Explore the 30-agent engineering system', target: '#agents' },
  { label: 'Projects', detail: 'View featured project systems', target: '#projects' },
  { label: 'Research & Investments', detail: 'Go to decision systems and research', target: '#research' },
  { label: 'AI Robotics', detail: 'Explore the physical-intelligence frontier', target: '#robotics' },
  { label: 'About Chris', detail: 'Return to the personal introduction', target: '#about' },
  { label: 'Current Build', detail: 'Open System 13 on GitHub', target: currentAgent.repo, external: true },
  { label: 'GitHub', detail: 'Open the full GitHub profile', target: 'https://github.com/wushuchris', external: true },
  { label: 'LinkedIn', detail: 'Open Christopher Mendoza on LinkedIn', target: 'https://www.linkedin.com/in/christophermendoza', external: true },
]

function navigateTo(target: string, external = false) {
  if (external) {
    window.open(target, '_blank', 'noopener,noreferrer')
    return
  }

  const element = document.querySelector(target)
  if (!element) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
}

function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  if (!open) return null

  const normalized = query.trim().toLowerCase()
  const filtered = quickCommands.filter((command) =>
    !normalized ||
    command.label.toLowerCase().includes(normalized) ||
    command.detail.toLowerCase().includes(normalized)
  )

  const run = (command: (typeof quickCommands)[number]) => {
    navigateTo(command.target, command.external)
    onClose()
  }

  return <div className="command-palette__backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="command-palette" role="dialog" aria-modal="true" aria-label="Lab command palette">
      <div className="command-palette__search">
        <span aria-hidden="true">⌕</span>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') onClose()
            if (event.key === 'Enter' && filtered[0]) run(filtered[0])
          }}
          placeholder="Type a command…"
          aria-label="Search commands"
        />
        <kbd>ESC</kbd>
      </div>
      <div className="command-palette__results">
        {filtered.length ? filtered.map((command, index) =>
          <button type="button" className="command-palette__item" key={command.label} onClick={() => run(command)}>
            <span className="command-palette__index">{String(index + 1).padStart(2, '0')}</span>
            <span><strong>{command.label}</strong><small>{command.detail}</small></span>
            <b aria-hidden="true">↗</b>
          </button>
        ) : <div className="command-palette__empty">No matching lab command.</div>}
      </div>
      <footer><span>ENTER selects first result</span><span>⌘K toggles palette</span></footer>
    </section>
  </div>
}

function Panel({ title, action, className = '', id, children }: PropsWithChildren<{ title?: string; action?: ReactNode; className?: string; id?: string }>) {
  return <section className={`panel ${className}`} id={id}>{(title || action) && <div className="panel__header"><span>{title}</span>{action && <span className="panel__action">{action}</span>}</div>}{children}</section>
}

function HeaderAvatar() {
  return <svg className="brand__avatar" viewBox="0 0 36 36" aria-hidden="true">
    <defs>
      <radialGradient id="avatarBg" cx=".5" cy=".28" r=".8">
        <stop offset="0" stopColor="#18354b" />
        <stop offset="1" stopColor="#081521" />
      </radialGradient>
      <linearGradient id="skin" x1=".22" y1=".08" x2=".82" y2=".92">
        <stop offset="0" stopColor="#f1c7a4" />
        <stop offset=".48" stopColor="#dca27d" />
        <stop offset="1" stopColor="#b97958" />
      </linearGradient>
      <linearGradient id="skinLight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffe0bf" stopOpacity=".82" />
        <stop offset="1" stopColor="#d28f6d" stopOpacity=".08" />
      </linearGradient>
      <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#314c62" />
        <stop offset="1" stopColor="#142838" />
      </linearGradient>
    </defs>

    <circle cx="18" cy="18" r="17" fill="url(#avatarBg)" stroke="rgba(126,205,235,.34)" />

    <path d="M8.7 34c.8-4.6 4.2-7.2 9.3-7.2s8.5 2.6 9.3 7.2Z" fill="url(#shirt)" />
    <path d="M14.8 27.4c.7 1.1 1.8 1.8 3.2 1.8s2.5-.7 3.2-1.8v3.2c-.9.7-2 1.1-3.2 1.1s-2.3-.4-3.2-1.1Z" fill="#bd7c5c" />

    <ellipse cx="9.9" cy="19.4" rx="1.5" ry="2.4" fill="#c98967" />
    <ellipse cx="26.1" cy="19.4" rx="1.5" ry="2.4" fill="#c98967" />

    <path d="M10.5 17.1c0-5.3 3-9 7.5-9s7.5 3.7 7.5 9v3.7c0 5-3.1 8.4-7.5 8.4s-7.5-3.4-7.5-8.4Z" fill="url(#skin)" />
    <path d="M12.1 13.4c1.2-2.7 3.1-4.1 5.9-4.1 2.9 0 4.9 1.5 6 4.4-1.8-1.7-3.8-2.5-6.1-2.5-2.2 0-4.1.7-5.8 2.2Z" fill="url(#skinLight)" opacity=".68" />

    <path d="M12.6 15.8c1.2-.7 2.5-.9 3.8-.4M19.7 15.4c1.3-.5 2.6-.3 3.8.4" fill="none" stroke="#5d3b31" strokeWidth=".72" strokeLinecap="round" />

    <rect x="11.4" y="16.5" width="5.5" height="3.8" rx="1.45" fill="rgba(21,29,34,.76)" stroke="#222c31" strokeWidth="1.05" />
    <rect x="19.1" y="16.5" width="5.5" height="3.8" rx="1.45" fill="rgba(21,29,34,.76)" stroke="#222c31" strokeWidth="1.05" />
    <path d="M16.9 18.1h2.2M11.4 17.8 10.2 17.4M24.6 17.8l1.2-.4" fill="none" stroke="#222c31" strokeWidth=".8" strokeLinecap="round" />
    <path d="M12.4 17.4h3.3M20.3 17.4h3.3" stroke="#d8eef5" strokeWidth=".55" strokeLinecap="round" opacity=".52" />

    <ellipse cx="14.2" cy="18.4" rx=".62" ry=".45" fill="#34261f" />
    <ellipse cx="21.8" cy="18.4" rx=".62" ry=".45" fill="#34261f" />

    <path d="M17.7 19.7c-.1 1.2-.3 2.2-.7 3 .5.3 1.1.4 1.8.2" fill="none" stroke="#9d634d" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.9 24.2c.9.8 1.9 1.2 3.1 1.2 1.3 0 2.4-.4 3.2-1.2" fill="none" stroke="#7d4339" strokeWidth=".8" strokeLinecap="round" />
    <path d="M16.1 25c1.2.4 2.5.4 3.7 0" fill="none" stroke="#f0b09c" strokeWidth=".45" strokeLinecap="round" opacity=".72" />

    <path d="M11.9 21.2c.5 1.6 1.1 2.8 1.9 3.8M24.1 21.2c-.5 1.6-1.1 2.8-1.9 3.8" fill="none" stroke="#b87357" strokeWidth=".48" opacity=".48" />
    <path d="M13.3 11c1.3-1.3 2.8-2 4.7-2s3.5.7 4.8 2" fill="none" stroke="#f7d1ad" strokeWidth=".55" strokeLinecap="round" opacity=".55" />
  </svg>
}

function Header({ onOpenCommand }: { onOpenCommand: () => void }) {
  return <header className="topbar"><div className="brand"><span className="brand__mark"><HeaderAvatar /></span><span>CHRISTOPHER MENDOZA</span></div><nav aria-label="Primary navigation"><a className="active" href="#lab">LAB</a><a href="#agents">AGENTS</a><a href="#projects">PROJECTS</a><a href="#research">RESEARCH</a><a href="#about">ABOUT</a></nav><div className="topbar__tools"><button className="command" type="button" onClick={onOpenCommand} aria-label="Open lab command palette"><span>⌕ Type a command…</span><kbd>⌘K</kbd></button><span className="lab-status"><i /> LAB ONLINE</span><a className="utility-link" href="https://github.com/wushuchris" target="_blank" rel="noreferrer" aria-label="GitHub profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.6 9.6 0 0 0-3 18.7c.48.09.66-.2.66-.46v-1.69c-2.68.58-3.24-1.14-3.24-1.14-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.59.07-.59.97.07 1.48.99 1.48.99.86 1.48 2.26 1.05 2.81.8.09-.63.34-1.05.61-1.29-2.14-.24-4.39-1.07-4.39-4.77 0-1.05.38-1.92.99-2.59-.1-.24-.43-1.22.1-2.55 0 0 .81-.26 2.64.99A9.2 9.2 0 0 1 12 7.23a9.2 9.2 0 0 1 2.41.32c1.83-1.25 2.64-.99 2.64-.99.53 1.33.2 2.31.1 2.55.62.67.99 1.54.99 2.59 0 3.71-2.26 4.53-4.41 4.77.35.3.65.88.65 1.78v2.64c0 .26.18.56.66.46A9.6 9.6 0 0 0 12 2.5Z"/></svg></a><a className="utility-link" href="https://www.linkedin.com/in/christophermendoza" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.2H2.8V21h3.4V8.2ZM4.5 3A2 2 0 1 0 4.5 7a2 2 0 0 0 0-4ZM21.2 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.3-3.9 2.1V8.2H9V21h3.4v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.4l-.1-7.3Z"/></svg></a></div></header>
}

function Hero() {
  return <section className="hero panel" id="about"><div className="eyebrow">AI ENGINEERING LAB v1.0</div><h1>CHRISTOPHER<br />MENDOZA</h1><div className="hero__roles">AI ENGINEER <span>×</span> INVESTOR <span>×</span> BUILDER</div><p>Building intelligent systems from research → architecture → evaluation → deployment.</p><div className="hero__actions"><a className="button button--primary" href="#agents">ENTER THE LAB →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">WATCH DEMO</a></div><div className="hero__stats"><div><strong>13 / 30</strong><span>AGENTS ONLINE</span></div><div><strong>4+</strong><span>PROJECT SYSTEMS</span></div><div><strong>∞</strong><span>IDEAS</span></div><div><strong>↗</strong><span>ACTIVELY BUILDING</span></div></div></section>
}

function AgentNetwork() {
  const orbitRadius = 184
  const angleStep = 360 / categories.length

  return (
    <section className="network panel" id="agents">
      <div className="network__intro">
        <strong>30 AGENTS</strong>
        <span>FOR AI ENGINEERS</span>
        <small>A COMPLETE SYSTEM FOR BUILDING WHAT&apos;S NEXT</small>
      </div>

      <div className="network__stage" aria-label={`${agents.length} agent systems`}>
        <div className="network__rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="network__telemetry" aria-hidden="true">
          <span className="network__telemetry-ring" />
          <span className="network__scan-arc network__scan-arc--one" />
          <span className="network__scan-arc network__scan-arc--two" />
        </div>

        <div className="network__links" aria-hidden="true">
          {categories.map((category, index) => {
            const angle = index * angleStep
            const linkStyle = {
              '--angle': `${angle}deg`,
              '--pulse-delay': `${(-index * 0.42).toFixed(2)}s`,
            } as CSSProperties

            return (
              <span
                className={`network__link ${category.className}`}
                key={`link-${category.name}`}
                style={linkStyle}
              >
                <i />
              </span>
            )
          })}
        </div>

        <div className="network__core">
          <div className="network__orb" aria-hidden="true" />
          <strong>30 AGENTS</strong>
          <span>FOR AI ENGINEERS</span>
          <small>13 ONLINE</small>
        </div>

        {categories.map((category, index) => {
          const angle = index * angleStep

          const nodeStyle = {
            '--angle': `${angle}deg`,
            '--orbit-radius': `${orbitRadius}px`,
          } as CSSProperties

          const labelPositions = [
            'top',
            'upper-right',
            'right',
            'lower-right',
            'bottom-right',
            'bottom-left',
            'lower-left',
            'left',
            'upper-left',
          ] as const

          const labelPosition = labelPositions[index]

          return (
            <div
              className={`network__category ${category.className} label--${labelPosition}`}
              key={category.name}
              style={nodeStyle}
            >
              <div className="network__cluster">
                <b className="network__icon">{category.icon}</b>
                <i />
                <i />
                <i />
              </div>

              <div className="network__label">
                <strong>{category.name}</strong>
                <span>{category.range}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="network__mobile-legend" aria-label="Agent capability groups">
        {categories.map((category) => <div className={`network__mobile-item ${category.className}`} key={`mobile-${category.name}`}><i aria-hidden="true" /><span><strong>{category.name}</strong><small>{category.range}</small></span></div>)}
      </div>
    </section>
  )
}

function RecentBuilds() {
  return <Panel title="RECENT BUILDS" action="VIEW ALL →" className="recent-builds"><div className="build-list">{recentBuilds.map((build) => <div className="build-row" key={build.id}><span className="build-id">{String(build.id).padStart(2, '0')}</span><span className="build-title">{build.title}</span><span className="online-dot" /><span className="online-text">ONLINE</span><time>{build.date}</time></div>)}</div><div className="recent-metrics"><div><span>LIVE SYSTEMS</span><strong>13</strong></div><div><span>PROJECT TRACKS</span><strong>4+</strong></div><div className="recent-activity"><span>BUILD ACTIVITY</span><div className="build-pulse" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div></div></Panel>
}

function OutsideLab() {
  const interests = [
    { icon: '△', title: 'Hiking', text: 'Open trails, quiet miles, and room to reset.' },
    { icon: '♞', title: 'Chess', text: 'Patience, pattern recognition, and thinking a few moves ahead.' },
    { icon: '◌', title: 'Learning', text: 'Following ideas across technology, markets, science, and history.' },
    { icon: '↗', title: 'Exploring', text: 'New places, new systems, and the occasional rabbit hole.' },
  ]

  return <Panel title="OUTSIDE THE LAB" className="outside-lab"><p className="outside-lab__intro">Some of my best thinking happens away from a screen.</p><div className="outside-lab__grid">{interests.map((interest) => <article className="outside-lab__item" key={interest.title}><span className="outside-lab__icon" aria-hidden="true">{interest.icon}</span><div><h3>{interest.title}</h3><p>{interest.text}</p></div></article>)}</div></Panel>
}

function ProjectIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="8" r="4"/><circle cx="8" cy="24" r="4"/><circle cx="28" cy="24" r="4"/><path d="M18 12v8M14 21l-4 1M22 21l4 1"/></svg>
  if (index === 1) return <span className="project-card__f1">F1</span>
  if (index === 2) return <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M12 26v-9l6-5 5 4 4-7"/><circle cx="12" cy="27" r="4"/><circle cx="18" cy="12" r="3"/><circle cx="27" cy="9" r="3"/><path d="M23 16v8h6"/></svg>
  return <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M8 28V18M14 28V13M20 28V9M26 28V15M32 28V6"/><path d="M6 28h27"/></svg>
}

function ProjectSystems() {
  return <Panel title="PROJECT SYSTEMS" action="VIEW ALL →" className="projects-panel" id="projects"><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-card--${project.accent}`} key={project.title} id={project.title === 'Research & Investments' ? 'research' : project.title === 'AI Robotics' ? 'robotics' : undefined}><div className="project-card__top"><span className="project-card__icon"><ProjectIcon index={index} /></span><div><div className="project-card__eyebrow">{project.eyebrow}</div><h3>{project.title}</h3></div></div><p>{project.description}</p><div className="project-card__footer"><div className="project-card__status">{project.status}</div><span className="project-card__beam" /></div></article>)}</div></Panel>
}

function TechnicalCube() {
  return <svg className="tech-graphic tech-cube" viewBox="0 0 132 98" aria-hidden="true"><defs><linearGradient id="cubeFill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0a5cff" stopOpacity=".10"/><stop offset=".55" stopColor="#17a8ff" stopOpacity=".28"/><stop offset="1" stopColor="#47efff" stopOpacity=".52"/></linearGradient><radialGradient id="corePulse" cx=".5" cy=".45" r=".6"><stop offset="0" stopColor="#c4f7ff"/><stop offset=".18" stopColor="#4bdfff"/><stop offset=".55" stopColor="#147eff" stopOpacity=".64"/><stop offset="1" stopColor="#147eff" stopOpacity="0"/></radialGradient><filter id="cubeGlow"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g opacity=".38" stroke="#1e73ad" strokeWidth=".65"><path d="M8 18H124M8 34H124M8 50H124M8 66H124M8 82H124"/><path d="M20 8V90M44 8V90M68 8V90M92 8V90M116 8V90"/></g><g stroke="#29baff" strokeWidth="1.5" fill="url(#cubeFill)" filter="url(#cubeGlow)"><path d="M66 10 84 20 66 30 48 20Z"/><path d="M48 20v20l18 10V30Z"/><path d="M84 20v20L66 50V30Z"/><path d="M26 42 44 52 26 62 8 52Z"/><path d="M8 52v18l18 10V62Z"/><path d="M44 52v18L26 80V62Z"/><path d="M106 42 124 52 106 62 88 52Z"/><path d="M88 52v18l18 10V62Z"/><path d="M124 52v18l-18 10V62Z"/><path d="M66 50 84 60 66 70 48 60Z"/><path d="M48 60v18l18 10V70Z"/><path d="M84 60v18L66 88V70Z"/></g><g stroke="#6ce8ff" strokeWidth="1" opacity=".62"><path d="M48 40 26 42M84 40l22 2M44 52l22-2 22 2M66 30v20"/></g><circle cx="66" cy="50" r="16" fill="url(#corePulse)" opacity=".72"/><g fill="#9df2ff"><circle cx="66" cy="10" r="1.8"/><circle cx="26" cy="42" r="1.8"/><circle cx="106" cy="42" r="1.8"/><circle cx="66" cy="88" r="1.8"/></g><g fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" fontWeight="700" fill="#8fcae8"><text x="7" y="14">TRUST</text><text x="94" y="14">RECOVER</text><text x="50" y="96">CONSENSUS</text></g></svg>
}

function MiniChart() {
  return <svg className="tech-graphic mini-chart" viewBox="0 0 132 98" aria-hidden="true"><defs><linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0"><stop stopColor="#0b5aff"/><stop offset="1" stopColor="#25d9ff"/></linearGradient><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#24d8ff" stopOpacity=".24"/><stop offset="1" stopColor="#0b5aff" stopOpacity="0"/></linearGradient></defs><g stroke="#1e76aa" strokeWidth=".7" opacity=".42"><path d="M12 18H122M12 38H122M12 58H122M12 78H122"/><path d="M28 10V86M50 10V86M72 10V86M94 10V86M116 10V86"/></g><path d="M18 67 37 56 55 61 75 42 95 34 116 23 116 82 18 82Z" fill="url(#areaFill)"/><g fill="url(#barFill)"><rect x="18" y="61" width="8" height="21" rx="1"/><rect x="34" y="53" width="8" height="29" rx="1"/><rect x="50" y="59" width="8" height="23" rx="1"/><rect x="66" y="44" width="8" height="38" rx="1"/><rect x="82" y="35" width="8" height="47" rx="1"/><rect x="98" y="29" width="8" height="53" rx="1"/><rect x="114" y="20" width="6" height="62" rx="1"/></g><polyline points="18,67 37,56 55,61 75,42 95,34 116,23" fill="none" stroke="#b7f3ff" strokeWidth="2"/><g fill="#b7f3ff"><circle cx="18" cy="67" r="2"/><circle cx="37" cy="56" r="2"/><circle cx="55" cy="61" r="2"/><circle cx="75" cy="42" r="2"/><circle cx="95" cy="34" r="2"/><circle cx="116" cy="23" r="2"/></g><g fontFamily="Arial, Helvetica, sans-serif" fontSize="6.4" fontWeight="700" fill="#7fb7d6"><text x="10" y="94">INGEST</text><text x="48" y="94">ANALYZE</text><text x="93" y="94">INSIGHT</text></g></svg>
}

function RightRail() {
  return <aside className="right-rail"><Panel className="beach-panel"><img src="/beach-horizon.svg" alt="Sunset coastline representing the human purpose behind intelligent systems" /><blockquote>“A more capable, curious, and creative future through intelligent systems.”</blockquote></Panel><Panel title="◈ CURRENT BUILD" action={<><span className="online-dot" /> ONLINE</>}><div className="system-card"><div><span className="system-card__id">SYSTEM {currentAgent.id}</span><h3>{currentAgent.shortTitle}</h3><p>{currentAgent.summary}</p><div className="system-tags"><span>FAULT TOLERANCE</span><span>MULTI-AGENT</span></div></div><div className="system-visual"><TechnicalCube /></div></div><div className="system-actions"><a className="button button--primary" href={currentAgent.repo} target="_blank" rel="noreferrer">VIEW PROJECT →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">LIVE DEMO</a></div></Panel><Panel title="⚙ NEXT BUILD" className="next-build"><div className="system-card"><div><span className="system-card__id">SYSTEM {nextAgent.id}</span><h3>{nextAgent.shortTitle}</h3><p>{nextAgent.summary}</p><div className="system-tags system-tags--amber"><span>ANALYSIS</span><span>VISUALIZATION</span></div></div><div className="system-visual"><MiniChart /></div></div><div className="pill">IN DEVELOPMENT</div></Panel><Panel title="◇ SYSTEM STATUS" action={<><span className="online-dot" /> LIVE</>}><div className="status-list"><div className="status-meter"><span>Agents Deployed</span><strong>13 / 30</strong><em><i style={{ width: '43%' }} /></em></div><div className="status-meter status-meter--projects"><span>Project Systems</span><strong>4+</strong><em><i style={{ width: '68%' }} /></em></div><div><span>Current Phase</span><strong>Decentralized Systems</strong></div><div><span>Next Milestone</span><strong>System 14</strong></div><div><span>Runtime</span><strong>GitHub Pages</strong></div><div><span>CI/CD</span><strong>GitHub Actions</strong></div><div className="status-signal"><span>Latest Deploy</span><strong><b /> SUCCESS</strong></div></div></Panel></aside>
}

function TerminalPanel() {
  return <section className="panel terminal-panel"><div className="terminal-tabs"><span className="active">⌘ LAB TERMINAL</span><span>SYSTEM LOGS</span><span>BUILD OUTPUT</span><b>✓</b></div><div className="terminal-grid"><pre>{`christopher@ai-lab:~$ help
Available commands:
  agents    — Show all 30 agent systems
  projects  — View featured projects
  status    — Show current build status
  open <n>  — Open agent system
  robotics  — Explore physical intelligence
  research  — Research & investments
  about     — Learn more about me
  github    — Visit GitHub profile

christopher@ai-lab:~$ _`}</pre><div className="terminal-mark"><span>CM</span><strong>AI ENGINEERING LAB</strong><small>BUILD › EVALUATE › DEPLOY › IMPROVE</small></div></div></section>
}

function HorizonPanel() {
  return <Panel title="◇ SYSTEM HORIZON" action={<a className="horizon-header-cta" href="#robotics">EXPLORE THE NEXT FRONTIER →</a>} className="horizon-panel"><div className="horizon-image"><img src="/system-horizon.svg" alt="Futuristic path from software intelligence toward physical intelligence and robotics" /><div className="horizon-copy"><strong>FROM SOFTWARE INTELLIGENCE TO THE PHYSICAL WORLD</strong><span>Agents → multimodal systems → physical intelligence → AI robotics → ?</span></div></div></Panel>
}

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen((open) => !open)
      } else if (event.key === 'Escape') {
        setCommandOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!commandOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [commandOpen])

  return <div className="app-shell" id="lab"><Header onOpenCommand={() => setCommandOpen(true)} /><main className="dashboard"><div className="left-column"><Hero /><RecentBuilds /><OutsideLab /></div><div className="center-column"><AgentNetwork /><ProjectSystems /></div><RightRail /><div className="bottom-left"><TerminalPanel /></div><div className="bottom-right"><HorizonPanel /></div></main><CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} /></div>
}
