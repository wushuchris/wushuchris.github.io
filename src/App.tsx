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

function Panel({ title, action, className = '', id, children }: PropsWithChildren<{ title?: string; action?: ReactNode; className?: string; id?: string }>) {
  return <section className={`panel ${className}`} id={id}>{(title || action) && <div className="panel__header"><span>{title}</span>{action && <span className="panel__action">{action}</span>}</div>}{children}</section>
}

function Header() {
  return <header className="topbar"><div className="brand"><span className="brand__mark">CM</span><span>CHRISTOPHER MENDOZA</span></div><nav aria-label="Primary navigation"><a className="active" href="#lab">LAB</a><a href="#agents">AGENTS</a><a href="#projects">PROJECTS</a><a href="#research">RESEARCH</a><a href="#about">ABOUT</a></nav><div className="topbar__tools"><div className="command">⌕ Type a command… <kbd>⌘K</kbd></div><span className="lab-status"><i /> LAB ONLINE</span><a className="utility-link" href="https://github.com/wushuchris" target="_blank" rel="noreferrer" aria-label="GitHub profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.6 9.6 0 0 0-3 18.7c.48.09.66-.2.66-.46v-1.69c-2.68.58-3.24-1.14-3.24-1.14-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.59.07-.59.97.07 1.48.99 1.48.99.86 1.48 2.26 1.05 2.81.8.09-.63.34-1.05.61-1.29-2.14-.24-4.39-1.07-4.39-4.77 0-1.05.38-1.92.99-2.59-.1-.24-.43-1.22.1-2.55 0 0 .81-.26 2.64.99A9.2 9.2 0 0 1 12 7.23a9.2 9.2 0 0 1 2.41.32c1.83-1.25 2.64-.99 2.64-.99.53 1.33.2 2.31.1 2.55.62.67.99 1.54.99 2.59 0 3.71-2.26 4.53-4.41 4.77.35.3.65.88.65 1.78v2.64c0 .26.18.56.66.46A9.6 9.6 0 0 0 12 2.5Z"/></svg></a></div></header>
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
    </section>
  )
}

function RecentBuilds() {
  return <Panel title="RECENT BUILDS" action="VIEW ALL →" className="recent-builds"><div className="build-list">{recentBuilds.map((build) => <div className="build-row" key={build.id}><span className="build-id">{String(build.id).padStart(2, '0')}</span><span className="build-title">{build.title}</span><span className="online-dot" /><span className="online-text">ONLINE</span><time>{build.date}</time></div>)}</div><div className="recent-metrics"><div><span>LIVE SYSTEMS</span><strong>13</strong></div><div><span>PROJECT TRACKS</span><strong>4+</strong></div><div className="recent-activity"><span>BUILD ACTIVITY</span><div className="build-pulse" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div></div></Panel>
}

function ProjectIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="8" r="4"/><circle cx="8" cy="24" r="4"/><circle cx="28" cy="24" r="4"/><path d="M18 12v8M14 21l-4 1M22 21l4 1"/></svg>
  if (index === 1) return <span className="project-card__f1">F1</span>
  if (index === 2) return <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M12 26v-9l6-5 5 4 4-7"/><circle cx="12" cy="27" r="4"/><circle cx="18" cy="12" r="3"/><circle cx="27" cy="9" r="3"/><path d="M23 16v8h6"/></svg>
  return <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M8 28V18M14 28V13M20 28V9M26 28V15M32 28V6"/><path d="M6 28h27"/></svg>
}

function ProjectSystems() {
  return <Panel title="PROJECT SYSTEMS" action="VIEW ALL →" className="projects-panel" id="projects"><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-card--${project.accent}`} key={project.title} id={project.title === 'Research & Investments' ? 'research' : undefined}><div className="project-card__top"><span className="project-card__icon"><ProjectIcon index={index} /></span><div><div className="project-card__eyebrow">{project.eyebrow}</div><h3>{project.title}</h3></div></div><p>{project.description}</p><div className="project-card__footer"><div className="project-card__status">{project.status}</div><span className="project-card__beam" /></div></article>)}</div></Panel>
}

function TechnicalCube() {
  return <svg className="tech-graphic tech-cube" viewBox="0 0 120 92" aria-hidden="true"><defs><linearGradient id="cubeFill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0a5cff" stopOpacity=".18"/><stop offset="1" stopColor="#23dcff" stopOpacity=".46"/></linearGradient><filter id="cubeGlow"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g stroke="#24b7ff" strokeWidth="1.6" fill="url(#cubeFill)" filter="url(#cubeGlow)"><path d="M60 10 78 20 60 30 42 20Z"/><path d="M42 20v20l18 10V30Z"/><path d="M78 20v20L60 50V30Z"/><path d="M24 42 42 52 24 62 6 52Z"/><path d="M6 52v18l18 10V62Z"/><path d="M42 52v18L24 80V62Z"/><path d="M96 42 114 52 96 62 78 52Z"/><path d="M78 52v18l18 10V62Z"/><path d="M114 52v18L96 80V62Z"/><path d="M60 50 78 60 60 70 42 60Z"/><path d="M42 60v18l18 10V70Z"/><path d="M78 60v18L60 88V70Z"/></g><g stroke="#58d9ff" strokeWidth="1" opacity=".6"><path d="M42 40 24 42M78 40l18 2M60 50v0"/></g></svg>
}

function MiniChart() {
  return <svg className="tech-graphic mini-chart" viewBox="0 0 120 92" aria-hidden="true"><defs><linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0"><stop stopColor="#0b5aff"/><stop offset="1" stopColor="#25d9ff"/></linearGradient></defs><g stroke="#1e76aa" strokeWidth=".7" opacity=".42"><path d="M12 18H112M12 38H112M12 58H112M12 78H112"/><path d="M28 10V82M48 10V82M68 10V82M88 10V82"/></g><g fill="url(#barFill)"><rect x="19" y="58" width="9" height="24" rx="1"/><rect x="36" y="49" width="9" height="33" rx="1"/><rect x="53" y="55" width="9" height="27" rx="1"/><rect x="70" y="35" width="9" height="47" rx="1"/><rect x="87" y="28" width="9" height="54" rx="1"/><rect x="104" y="18" width="8" height="64" rx="1"/></g><polyline points="18,63 40,52 57,57 74,39 92,30 110,22" fill="none" stroke="#9cecff" strokeWidth="2"/></svg>
}

function RightRail() {
  return <aside className="right-rail"><Panel className="beach-panel"><img src="/beach-horizon.svg" alt="Sunset coastline representing the human purpose behind intelligent systems" /><blockquote>“A more capable, curious, and creative future through intelligent systems.”</blockquote></Panel><Panel title="◈ CURRENT BUILD" action={<><span className="online-dot" /> ONLINE</>}><div className="system-card"><div><span className="system-card__id">SYSTEM {currentAgent.id}</span><h3>{currentAgent.shortTitle}</h3><p>{currentAgent.summary}</p></div><div className="system-visual"><TechnicalCube /></div></div><div className="system-actions"><a className="button button--primary" href={currentAgent.repo} target="_blank" rel="noreferrer">VIEW PROJECT →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">LIVE DEMO</a></div></Panel><Panel title="⚙ NEXT BUILD" className="next-build"><div className="system-card"><div><span className="system-card__id">SYSTEM {nextAgent.id}</span><h3>{nextAgent.shortTitle}</h3><p>{nextAgent.summary}</p></div><div className="system-visual"><MiniChart /></div></div><div className="pill">IN DEVELOPMENT</div></Panel><Panel title="◇ SYSTEM STATUS" action={<><span className="online-dot" /> LIVE</>}><div className="status-list"><div className="status-meter"><span>Agents Deployed</span><strong>13 / 30</strong><em><i style={{ width: '43%' }} /></em></div><div className="status-meter status-meter--projects"><span>Project Systems</span><strong>4+</strong><em><i style={{ width: '68%' }} /></em></div><div><span>Current Phase</span><strong>Decentralized Systems</strong></div><div><span>Next Milestone</span><strong>System 14</strong></div><div className="status-signal"><span>Build Integrity</span><strong><b /> NOMINAL</strong></div></div></Panel></aside>
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
  return <Panel title="◇ SYSTEM HORIZON" className="horizon-panel"><div className="horizon-image"><img src="/system-horizon.svg" alt="Futuristic path from software intelligence toward physical intelligence and robotics" /><div className="horizon-copy"><strong>FROM SOFTWARE INTELLIGENCE TO THE PHYSICAL WORLD</strong><span>Agents → multimodal systems → physical intelligence → AI robotics → ?</span></div><button className="horizon-cta" type="button">EXPLORE THE NEXT FRONTIER →</button></div></Panel>
}

export default function App() {
  return <div className="app-shell" id="lab"><Header /><main className="dashboard"><div className="left-column"><Hero /><RecentBuilds /></div><div className="center-column"><AgentNetwork /><ProjectSystems /></div><RightRail /><div className="bottom-left"><TerminalPanel /></div><div className="bottom-right"><HorizonPanel /></div></main></div>
}
