import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import './styles.css'
import { agents, currentAgent, nextAgent, projects, recentBuilds } from './data'

const categories = [
  { name: 'Foundations', range: '01–03', className: 'node--green' },
  { name: 'Knowledge + Evidence', range: '04–06', className: 'node--blue' },
  { name: 'Tools + Workflows', range: '07–09', className: 'node--cyan' },
  { name: 'Decentralized Systems', range: '10–13', className: 'node--orange' },
  { name: 'Reasoning + Simulation', range: '14–17', className: 'node--gold' },
  { name: 'Software Engineering', range: '18–20', className: 'node--violet' },
  { name: 'Human Systems', range: '21–23', className: 'node--pink' },
  { name: 'Multimodal + Physical', range: '24–26', className: 'node--red' },
  { name: 'Safety + Intelligence', range: '27–30', className: 'node--purple' },
]

function Panel({ title, action, className = '', id, children }: PropsWithChildren<{ title?: string; action?: ReactNode; className?: string; id?: string }>) {
  return <section className={`panel ${className}`} id={id}>{(title || action) && <div className="panel__header"><span>{title}</span>{action && <span className="panel__action">{action}</span>}</div>}{children}</section>
}

function Header() {
  return <header className="topbar"><div className="brand"><span className="brand__mark">CM</span><span>CHRISTOPHER MENDOZA</span></div><nav aria-label="Primary navigation"><a className="active" href="#lab">LAB</a><a href="#agents">AGENTS</a><a href="#projects">PROJECTS</a><a href="#research">RESEARCH</a><a href="#about">ABOUT</a></nav><div className="command">⌕ Type a command… <kbd>⌘K</kbd></div></header>
}

function Hero() {
  return <section className="hero panel" id="about"><div className="eyebrow">AI ENGINEERING LAB v1.0</div><h1>CHRISTOPHER<br />MENDOZA</h1><div className="hero__roles">AI ENGINEER <span>×</span> INVESTOR <span>×</span> BUILDER</div><p>Building intelligent systems from research → architecture → evaluation → deployment.</p><div className="hero__actions"><a className="button button--primary" href="#agents">ENTER THE LAB →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">WATCH DEMO</a></div><div className="hero__stats"><div><strong>13 / 30</strong><span>AGENTS ONLINE</span></div><div><strong>4+</strong><span>PROJECT SYSTEMS</span></div><div><strong>∞</strong><span>IDEAS</span></div><div><strong>↗</strong><span>ACTIVELY BUILDING</span></div></div></section>
}

function AgentNetwork() {
  return <section className="network panel" id="agents"><div className="network__intro"><strong>30 AGENTS</strong><span>FOR AI ENGINEERS</span><small>A COMPLETE SYSTEM FOR BUILDING WHAT'S NEXT</small></div><div className="network__stage" aria-label={`${agents.length} agent systems`}><div className="network__core"><strong>30 AGENTS</strong><span>FOR AI ENGINEERS</span></div>{categories.map((category, index) => <div className={`network__category ${category.className}`} key={category.name} style={{ '--angle': `${index * 40 - 90}deg` } as CSSProperties}><div className="network__label"><strong>{category.name}</strong><span>{category.range}</span></div><div className="network__cluster"><i /><i /><i /></div></div>)}</div></section>
}

function RecentBuilds() {
  return <Panel title="RECENT BUILDS" action="VIEW ALL →" className="recent-builds"><div className="build-list">{recentBuilds.map((build) => <div className="build-row" key={build.id}><span className="build-id">{String(build.id).padStart(2, '0')}</span><span className="build-title">{build.title}</span><span className="online-dot" /><span className="online-text">ONLINE</span></div>)}</div></Panel>
}

function ProjectSystems() {
  return <Panel title="PROJECT SYSTEMS" action="VIEW ALL →" className="projects-panel" id="projects"><div className="project-grid">{projects.map((project) => <article className={`project-card project-card--${project.accent}`} key={project.title} id={project.title === 'Research & Investments' ? 'research' : undefined}><div className="project-card__eyebrow">{project.eyebrow}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card__status">{project.status}</div></article>)}</div></Panel>
}

function RightRail() {
  return <aside className="right-rail"><Panel className="beach-panel"><img src="/beach-horizon.jpg" alt="Sunset coastline representing the human purpose behind intelligent systems" /><blockquote>“A more capable, curious, and creative future through intelligent systems.”</blockquote></Panel><Panel title="CURRENT BUILD" action={<><span className="online-dot" /> ONLINE</>}><div className="system-card"><div><span className="system-card__id">SYSTEM {currentAgent.id}</span><h3>{currentAgent.shortTitle}</h3><p>{currentAgent.summary}</p></div><div className="system-glyph">◇</div></div><div className="system-actions"><a className="button button--primary" href={currentAgent.repo} target="_blank" rel="noreferrer">VIEW PROJECT →</a><a className="button" href={currentAgent.demo} target="_blank" rel="noreferrer">LIVE DEMO</a></div></Panel><Panel title="NEXT BUILD" className="next-build"><div className="system-card"><div><span className="system-card__id">SYSTEM {nextAgent.id}</span><h3>{nextAgent.shortTitle}</h3><p>{nextAgent.summary}</p></div><div className="chart-glyph">▁▂▄▆█</div></div><div className="pill">IN DEVELOPMENT</div></Panel><Panel title="SYSTEM STATUS"><div className="status-list"><div><span>Agents Deployed</span><strong>13 / 30</strong></div><div><span>Project Systems</span><strong>4+</strong></div><div><span>Current Phase</span><strong>Decentralized Systems</strong></div><div><span>Next Milestone</span><strong>System 14</strong></div></div></Panel></aside>
}

function TerminalPanel() {
  return <Panel title="LAB TERMINAL" className="terminal-panel"><div className="terminal-grid"><pre>{`christopher@ai-lab:~$ help
Available commands:
  agents    — Show all 30 agent systems
  projects  — View featured projects
  status    — Show current build status
  open <n>  — Open agent system
  robotics  — Explore physical intelligence
  research  — Research & investments
  about     — Learn more about me
  github    — Visit GitHub profile

christopher@ai-lab:~$ _`}</pre><div className="terminal-mark"><span>CM</span><strong>AI ENGINEERING LAB</strong><small>BUILD › EVALUATE › DEPLOY › IMPROVE</small></div></div></Panel>
}

function HorizonPanel() {
  return <Panel title="SYSTEM HORIZON" className="horizon-panel"><div className="horizon-image"><img src="/system-horizon.svg" alt="Futuristic path from software intelligence toward physical intelligence and robotics" /><div className="horizon-copy"><strong>FROM SOFTWARE INTELLIGENCE TO THE PHYSICAL WORLD</strong><span>Agents → multimodal systems → physical intelligence → AI robotics → ?</span></div></div></Panel>
}

export default function App() {
  return <div className="app-shell" id="lab"><Header /><main className="dashboard"><div className="left-column"><Hero /><RecentBuilds /></div><div className="center-column"><AgentNetwork /><ProjectSystems /></div><RightRail /><div className="bottom-left"><TerminalPanel /></div><div className="bottom-right"><HorizonPanel /></div></main></div>
}
