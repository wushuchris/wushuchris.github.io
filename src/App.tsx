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
  return <header className="topbar"><div className="brand"><span className="brand__mark">CM</span><span>CHRISTOPHER MENDOZA</span></div><nav aria-label="Primary navigation"><a className="active" href="#lab">LAB</a><a href="#agents">AGENTS</a><a href="#projects">PROJECTS</a><a href="#research">RESEARCH</a><a href="#about">ABOUT</a></nav><div className="topbar__tools"><div className="command">⌕ Type a command… <kbd>⌘K</kbd></div><span className="lab-status"><i /> LAB ONLINE</span><a className="utility-link" href="https://github.com/wushuchris" target="_blank" rel="noreferrer" aria-label="GitHub profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.6 9.6 0 0 0-3 18.7c.48.09.66-.2.66-.46v-1.69c-2.68.58-3.24-1.14-3.24-1.14-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.59.07-.59.97.07 1.48.99 1.48.99.86 1.48 2.26 1.05 2.81.8.09-.63.34-1.05.61-1.29-2.14-.24-4.39-1.07-4.39-4.77 0-1.05.38-1.92.99-2.59-.1-.24-.43-1.22.1-2.55 0 0 .81-.26 2.64.99A9.2 9.2 0 0 1 12 7.23a9.2 9.2 0 0 1 2.41.32c1.83-1.25 2.64-.99 2.64-.99.53 1.33.2 2.31.1 2.55.62.67.99 1.54.99 2.59 0 3.71-2.26 4.53-4.41 4.77.35.3.65.88.65 1.78v2.64c0 .26.18.56.66.46A9.6 9.6 0 0 0 12 2.5Z"/></svg></a><a className="utility-link" href="https://www.linkedin.com/in/christophermendoza" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.2H2.8V21h3.4V8.2ZM4.5 3A2 2 0 1 0 4.5 7a2 2 0 0 0 0-4ZM21.2 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.3-3.9 2.1V8.2H9V21h3.4v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.4l-.1-7.3Z"/></svg></a></div></header>
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
  return <svg className="tech-graphic tech-cube" viewBox="0 0 132 98" aria-hidden="true"><defs><linearGradient id="cubeFill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0a5cff" stopOpacity=".10"/><stop offset=".55" stopColor="#17a8ff" stopOpacity=".28"/><stop offset="1" stopColor="#47efff" stopOpacity=".52"/></linearGradient><radialGradient id="corePulse" cx=".5" cy=".45" r=".6"><stop offset="0" stopColor="#c4f7ff"/><stop offset=".18" stopColor="#4bdfff"/><stop offset=".55" stopColor="#147eff" stopOpacity=".64"/><stop offset="1" stopColor="#147eff" stopOpacity="0"/></radialGradient><filter id="cubeGlow"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g opacity=".38" stroke="#1e73ad" strokeWidth=".65"><path d="M8 18H124M8 34H124M8 50H124M8 66H124M8 82H124"/><path d="M20 8V90M44 8V90M68 8V90M92 8V90M116 8V90"/></g><g stroke="#29baff" strokeWidth="1.5" fill="url(#cubeFill)" filter="url(#cubeGlow)"><path d="M66 10 84 20 66 30 48 20Z"/><path d="M48 20v20l18 10V30Z"/><path d="M84 20v20L66 50V30Z"/><path d="M26 42 44 52 26 62 8 52Z"/><path d="M8 52v18l18 10V62Z"/><path d="M44 52v18L26 80V62Z"/><path d="M106 42 124 52 106 62 88 52Z"/><path d="M88 52v18l18 10V62Z"/><path d="M124 52v18l-18 10V62Z"/><path d="M66 50 84 60 66 70 48 60Z"/><path d="M48 60v18l18 10V70Z"/><path d="M84 60v18L66 88V70Z"/></g><g stroke="#6ce8ff" strokeWidth="1" opacity=".62"><path d="M48 40 26 42M84 40l22 2M44 52l22-2 22 2M66 30v20"/></g><circle cx="66" cy="50" r="16" fill="url(#corePulse)" opacity=".72"/><g fill="#9df2ff"><circle cx="66" cy="10" r="1.8"/><circle cx="26" cy="42" r="1.8"/><circle cx="106" cy="42" r="1.8"/><circle cx="66" cy="88" r="1.8"/></g><g fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" fontWeight="700" fill="#8fcae8"><text x="7" y="14">TRUST</text><text x="94" y="14">RECOVER</text><text x="50" y="96">CONSENSUS</text></g></svg>
}

function MiniChart() {
  return <svg className="tech-graphic mini-chart" viewBox="0 0 132 98" aria-hidden="true"><defs><linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0"><stop stopColor="#0b5aff"/><stop offset="1" stopColor="#25d9ff"/></linearGradient><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#24d8ff" stopOpacity=".24"/><stop offset="1" stopColor="#0b5aff" stopOpacity="0"/></linearGradient></defs><g stroke="#1e76aa" strokeWidth=".7" opacity=".42"><path d="M12 18H122M12 38H122M12 58H122M12 78H122"/><path d="M28 10V86M50 10V86M72 10V86M94 10V86M116 10V86"/></g><path d="M18 67 37 56 55 61 75 42 95 34 116 23 116 82 18 82Z" fill="url(#areaFill)"/><g fill="url(#barFill)"><rect x="18" y="61" width="8" height="21" rx="1"/><rect x="34" y="53" width="8" height="29" rx="1"/><rect x="50" y="59" width="8" height="23" rx="1"/><rect x="66" y="44" width="8" height="38" rx="1"/><rect x="82" y="35" width="8" height="47" rx="1"/><rect x="98" y="29" width="8" height="53" rx="1"/><rect x="114" y="20" width="6" height="62" rx="1"/></g><polyline points="18,67 37,56 55,61 75,42 95,34 116,23" fill="none" stroke="#b7f3ff" strokeWidth="2"/><g fill="#b7f3ff"><circle cx="18" cy="67" r="2"/><circle cx="37" cy="56" r="2"/><circle cx="55" cy="61" r="2"/><circle cx="75" cy="42" r="2"/><circle cx="95" cy="34" r="2"/><circle cx="116" cy="23" r="2"/></g><g fontFamily="Arial, Helvetica, sans-serif" fontSize="6.4" fontWeight="700" fill="#7fb7d6"><text x="10" y="94">INGEST</text><text x="48" y="94">ANALYZE</text><text x="93" y="94">INSIGHT</text></g></svg>
}

function RightRail() {
  return <aside className="right-rail"><Panel className="beach-panel"><img src="/beach-horizon.svg" alt="Sunset coastline representing the human purpose behind intelligent systems" /><span className="beach-kicker">HUMAN HORIZON</span><blockquote>“A more capable, curious, and creative future through intelligent systems.”</blockquote></Panel><Panel title="◈ CURRENT BUILD" action={<><span className="online-dot" /> ONLINE</>}><div className="system-card"><div><span className="system-card__id">SYSTEM {currentAgent.id}</span><h3>{currentAgent.shortTitle}</h3><p>{currentAgent.summary}</p><div className="system-tags"><span>FAULT TOLERANCE</span><span>MULTI-AGENT</span></div></div><div className="system-visual"><TechnicalCube /></div></div><div className="system-actions"><a className="button button--primary" href={currentAgent.repo} target="_blank" rel="noreferrer">VIEW PROJECT →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">LIVE DEMO</a></div></Panel><Panel title="⚙ NEXT BUILD" className="next-build"><div className="system-card"><div><span className="system-card__id">SYSTEM {nextAgent.id}</span><h3>{nextAgent.shortTitle}</h3><p>{nextAgent.summary}</p><div className="system-tags system-tags--amber"><span>ANALYSIS</span><span>VISUALIZATION</span></div></div><div className="system-visual"><MiniChart /></div></div><div className="pill">IN DEVELOPMENT</div></Panel><Panel title="◇ SYSTEM STATUS" action={<><span className="online-dot" /> LIVE</>}><div className="status-list"><div className="status-meter"><span>Agents Deployed</span><strong>13 / 30</strong><em><i style={{ width: '43%' }} /></em></div><div className="status-meter status-meter--projects"><span>Project Systems</span><strong>4+</strong><em><i style={{ width: '68%' }} /></em></div><div><span>Current Phase</span><strong>Decentralized Systems</strong></div><div><span>Next Milestone</span><strong>System 14</strong></div><div><span>Runtime</span><strong>GitHub Pages</strong></div><div><span>CI/CD</span><strong>GitHub Actions</strong></div><div className="status-signal"><span>Latest Deploy</span><strong><b /> SUCCESS</strong></div></div></Panel></aside>
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
