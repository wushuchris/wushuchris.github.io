export type AgentStatus = 'online' | 'next' | 'planned'

export type Agent = {
  id: number
  title: string
  shortTitle: string
  status: AgentStatus
  category: string
  summary: string
  repo?: string
  demo?: string
}

export const agents: Agent[] = [
  { id: 1, title: 'Autonomous Decision-Making Agent', shortTitle: 'Bounded Decision System', status: 'online', category: 'Foundations', summary: 'Bounded autonomy with deterministic decision authority and guarded LLM explanation.', repo: 'https://github.com/wushuchris/01-autonomous-decision-agent' },
  { id: 2, title: 'Planning Agent', shortTitle: 'Mission Planner', status: 'online', category: 'Foundations', summary: 'Structured plans, validation, replanning, and human approval.', repo: 'https://github.com/wushuchris/agent-02-autonomous-mission-planner' },
  { id: 3, title: 'Memory-Augmented Agent', shortTitle: 'Governed Project Continuity', status: 'online', category: 'Foundations', summary: 'Governed memory with retrieval, compression, retention policy, and isolation.', repo: 'https://github.com/wushuchris/03-memory-augmented-agent' },
  { id: 4, title: 'Knowledge Retrieval Agent', shortTitle: 'Evidence Retrieval', status: 'online', category: 'Knowledge + Evidence', summary: 'Hybrid retrieval over approved evidence with abstention when support is weak.', repo: 'https://github.com/wushuchris/04-knowledge-retrieval-agent' },
  { id: 5, title: 'Document Intelligence Agent', shortTitle: 'Document Intelligence', status: 'online', category: 'Knowledge + Evidence', summary: 'Source-linked parsing, extraction, provenance, search, and export.', repo: 'https://github.com/wushuchris/05-document-intelligence-agent' },
  { id: 6, title: 'Verification, Validation, and Evidence Agent', shortTitle: 'Evidence Review Gate', status: 'online', category: 'Knowledge + Evidence', summary: 'Claim-level evidence alignment, contradiction checks, and human review escalation.', repo: 'https://github.com/wushuchris/06-verification-validation-evidence-agent' },
  { id: 7, title: 'Governed Tool-Using Agent', shortTitle: 'Capability Boundary', status: 'online', category: 'Tools + Workflows', summary: 'Application-owned authorization, typed tools, controlled execution, and auditability.', repo: 'https://github.com/wushuchris/07-tool-using-agent' },
  { id: 8, title: 'Centralized Multi-Agent Orchestrator', shortTitle: 'Supervised AI Decision Team', status: 'online', category: 'Tools + Workflows', summary: 'Supervisor-controlled routing, handoffs, shared state, and publication boundaries.', repo: 'https://github.com/wushuchris/08-centralized-multi-agent-orchestrator' },
  { id: 9, title: 'Agentic Workflow System', shortTitle: 'Operations Workflow', status: 'online', category: 'Tools + Workflows', summary: 'Resumable DAG workflows with persistence, retries, branching, and human gates.', repo: 'https://github.com/wushuchris/09-agentic-workflow-sys' },
  { id: 10, title: 'Peer-to-Peer Coordination Agent', shortTitle: 'Decentralized Research Team', status: 'online', category: 'Decentralized Systems', summary: 'Typed peer messaging, local autonomy, challenge/revision, and protocol-level coordination.', repo: 'https://github.com/wushuchris/10-peer-to-peer-coordination-agent' },
  { id: 11, title: 'Distributed Auction Task Allocation Agent', shortTitle: 'Distributed Allocation', status: 'online', category: 'Decentralized Systems', summary: 'Distributed task allocation through engineered bidding and assignment rules.', repo: 'https://github.com/wushuchris/11-distributed-auction-task-allocation-agent' },
  { id: 12, title: 'Role Coherence Monitor', shortTitle: 'Role Coherence Monitor', status: 'online', category: 'Decentralized Systems', summary: 'Monitors distributed agents for role drift and coordination integrity.', repo: 'https://github.com/wushuchris/12-role-coherence-monitor' },
  { id: 13, title: 'Fault-Tolerant Multi-Agent System', shortTitle: 'Fault-Tolerant Multi-Agent System', status: 'online', category: 'Decentralized Systems', summary: 'Detects unreliable agents, adjusts trust, requests corroboration, and continues the mission.', repo: 'https://github.com/wushuchris/13-fault-tolerant-multi-agent-system', demo: 'https://huggingface.co/spaces/FlyingNunchucks/13-fault-tolerant-multi-agent-system' },
  { id: 14, title: 'Data Analysis Agent', shortTitle: 'Data Analysis Agent', status: 'next', category: 'Reasoning + Simulation', summary: 'Advanced data analysis, visualization, and insight generation.' },
  ...Array.from({ length: 16 }, (_, index) => ({
    id: index + 15,
    title: `Agent ${index + 15}`,
    shortTitle: 'Planned System',
    status: 'planned' as const,
    category: index + 15 <= 17 ? 'Reasoning + Simulation' : index + 15 <= 20 ? 'Software Engineering' : index + 15 <= 23 ? 'Human Systems' : index + 15 <= 26 ? 'Multimodal + Physical' : 'Safety + Intelligence',
    summary: 'Planned capability in the evolving AI engineering system.',
  })),
]

export const currentAgent = agents.find((agent) => agent.id === 13)!
export const nextAgent = agents.find((agent) => agent.id === 14)!

export const recentBuilds = [
  { id: 13, title: 'Fault-Tolerant Multi-Agent System', date: 'Sep 26, 2026' },
  { id: 12, title: 'Role Coherence Monitor', date: 'Sep 18, 2026' },
  { id: 11, title: 'Distributed Auction Allocation', date: 'Sep 12, 2026' },
  { id: 10, title: 'Peer-to-Peer Coordination', date: 'Sep 12, 2026' },
  { id: 9, title: 'Agentic Workflow System', date: 'Sep 12, 2026' },
]

export const projects = [
  { title: '30 Agents for AI Engineers', status: '13 / 30', eyebrow: 'FLAGSHIP SYSTEM', description: 'From bounded single-agent behavior toward resilient, coordinated intelligent systems.', accent: 'cyan', href: '#agents', external: false },
  { title: 'F1 IoT Strategy Advisor', status: 'DEPLOYED', eyebrow: 'REAL-TIME AI', description: 'Real-time racing strategy using IoT telemetry and AI-assisted decision support.', accent: 'red', href: 'https://github.com/wushuchris/f1-ai-strategy-advisor', external: true },
  { title: 'AI Robotics', status: 'NEXT FRONTIER', eyebrow: 'PHYSICAL INTELLIGENCE', description: 'Bridging software intelligence and the physical world through embodied systems.', accent: 'purple', href: '#system-horizon', external: false },
  { title: 'Research & Investments', status: 'ONGOING', eyebrow: 'DECISION SYSTEMS', description: 'AI-assisted research, investment analysis, markets, and technology-driven decision support.', accent: 'amber' },
] as const
